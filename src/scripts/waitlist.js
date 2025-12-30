import { createClient } from '@supabase/supabase-js';

const modal = document.querySelector('[data-waitlist-modal]');
if (!modal) {
	throw new Error('Waiting list modal root not found.');
}

const openButtons = document.querySelectorAll('[data-waitlist-open]');
const closeButtons = modal.querySelectorAll('[data-waitlist-close], [data-waitlist-cancel]');
const form = modal.querySelector('[data-waitlist-form]');
const statusSuccess = modal.querySelector('[data-waitlist-status="success"]');
const statusDuplicate = modal.querySelector('[data-waitlist-status="duplicate"]');
const emailError = modal.querySelector('[data-waitlist-email-error]');
const errorBox = modal.querySelector('[data-waitlist-error]');
const errorText = modal.querySelector('[data-waitlist-error-text]');
const submitButton = modal.querySelector('[data-waitlist-submit]');
const submitLabel = modal.querySelector('[data-waitlist-submit-label]');
const submitLoading = modal.querySelector('[data-waitlist-submit-loading]');

const fullNameInput = modal.querySelector('#waitlist-fullName');
const emailInput = modal.querySelector('#waitlist-email');
const companyInput = modal.querySelector('#waitlist-company');
const commentsInput = modal.querySelector('#waitlist-comments');

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;
const edgeFunctionUrl = supabaseUrl ? `${supabaseUrl}/functions/v1/fluentcrm-webhook` : '';

let status = 'idle';

const setStatus = (nextStatus) => {
	status = nextStatus;
	if (statusSuccess) statusSuccess.classList.toggle('hidden', status !== 'success');
	if (statusDuplicate) statusDuplicate.classList.toggle('hidden', status !== 'duplicate');
	if (form) form.classList.toggle('hidden', status === 'success' || status === 'duplicate');
};

const setSubmitting = (isSubmitting) => {
	if (submitButton) submitButton.disabled = isSubmitting;
	[fullNameInput, emailInput, companyInput, commentsInput].forEach((input) => {
		if (input) input.disabled = isSubmitting;
	});
	if (submitLabel) submitLabel.classList.toggle('hidden', isSubmitting);
	if (submitLoading) {
		submitLoading.classList.toggle('hidden', !isSubmitting);
		submitLoading.classList.toggle('inline-flex', isSubmitting);
	}
};

const resetForm = () => {
	if (form) form.reset();
	if (emailError) {
		emailError.classList.add('hidden');
		const text = emailError.querySelector('span:last-child');
		if (text) text.textContent = '';
	}
	if (errorBox) {
		errorBox.classList.add('hidden');
	}
	if (errorText) errorText.textContent = '';
	setStatus('idle');
};

const openModal = () => {
	modal.classList.remove('hidden');
	modal.classList.add('flex');
	document.body.style.overflow = 'hidden';
};

const closeModal = () => {
	if (status === 'submitting') return;
	modal.classList.add('hidden');
	modal.classList.remove('flex');
	document.body.style.overflow = '';
	setTimeout(resetForm, 300);
};

const validateEmail = (value) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);

openButtons.forEach((button) => {
	button.addEventListener('click', (event) => {
		event.preventDefault();
		openModal();
	});
});

closeButtons.forEach((button) => {
	button.addEventListener('click', (event) => {
		event.preventDefault();
		closeModal();
	});
});

modal.addEventListener('click', (event) => {
	if (event.target === modal) {
		closeModal();
	}
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});

emailInput?.addEventListener('blur', () => {
	if (!emailInput) return;
	if (emailInput.value && !validateEmail(emailInput.value)) {
		if (emailError) {
			emailError.classList.remove('hidden');
			const text = emailError.querySelector('span:last-child');
			if (text) text.textContent = 'Please enter a valid email address';
		}
	} else if (emailError) {
		emailError.classList.add('hidden');
	}
});

form?.addEventListener('submit', async (event) => {
	event.preventDefault();
	if (!fullNameInput || !emailInput) return;

	if (!validateEmail(emailInput.value)) {
		if (emailError) {
			emailError.classList.remove('hidden');
			const text = emailError.querySelector('span:last-child');
			if (text) text.textContent = 'Please enter a valid email address';
		}
		return;
	}

	if (!supabase || !supabaseUrl || !supabaseKey) {
		if (errorBox && errorText) {
			errorText.textContent = 'Waiting list is not configured. Please set Supabase environment variables.';
			errorBox.classList.remove('hidden');
		}
		return;
	}

	setSubmitting(true);
	if (errorBox) errorBox.classList.add('hidden');
	if (errorText) errorText.textContent = '';

	try {
		setStatus('submitting');
		const email = emailInput.value.trim().toLowerCase();

		const { data: existing, error: selectError } = await supabase
			.from('waiting_list_submissions')
			.select('email')
			.eq('email', email)
			.maybeSingle();

		if (selectError) throw selectError;

		if (existing) {
			setStatus('duplicate');
			setSubmitting(false);
			return;
		}

		const submissionData = {
			email,
			full_name: fullNameInput.value.trim(),
			company_name: companyInput?.value.trim() || null,
			comments: commentsInput?.value.trim() || null,
			webhook_status: 'pending',
		};

		const { error: insertError } = await supabase
			.from('waiting_list_submissions')
			.insert([submissionData]);

		if (insertError) throw insertError;

		let webhookSuccess = false;
		let webhookError = null;

		try {
			const webhookPayload = {
				email,
				first_name: submissionData.full_name.split(' ')[0],
				full_name: submissionData.full_name,
				tags: ['pro-plan-waitlist'],
				lists: [],
				custom_values: {
					company_name: submissionData.company_name || '',
					comments: submissionData.comments || '',
				},
			};

			const controller = new AbortController();
			const timeout = setTimeout(() => controller.abort(), 10000);

			const response = await fetch(edgeFunctionUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${supabaseKey}`,
				},
				body: JSON.stringify(webhookPayload),
				signal: controller.signal,
			});

			clearTimeout(timeout);

			if (response.ok) {
				webhookSuccess = true;
			} else {
				const responseText = await response.text();
				webhookError = `Webhook failed with status: ${response.status}. Response: ${responseText.substring(0, 200)}`;
			}
		} catch (webhookErr) {
			webhookError = webhookErr instanceof Error ? webhookErr.message : 'Webhook request failed';
		}

		await supabase
			.from('waiting_list_submissions')
			.update({
				webhook_status: webhookSuccess ? 'success' : 'failed',
				webhook_error: webhookError,
			})
			.eq('email', email);

		setStatus('success');
		setSubmitting(false);
		resetForm();
	} catch (err) {
		setSubmitting(false);
		setStatus('error');
		if (errorBox && errorText) {
			errorText.textContent = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
			errorBox.classList.remove('hidden');
		}
	}
});
