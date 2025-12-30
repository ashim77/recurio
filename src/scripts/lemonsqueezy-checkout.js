const page = document.querySelector('[data-pricing-page]');
if (!page) {
  throw new Error('Pricing page root not found.');
}

const errorBox = page.querySelector('[data-checkout-error]');
const errorText = page.querySelector('[data-checkout-error-text]');
const successBox = page.querySelector('[data-checkout-success]');
const buttons = page.querySelectorAll('[data-checkout]');
const faqButtons = page.querySelectorAll('[data-faq-button]');

const rawStoreId = import.meta.env.VITE_LEMONSQUEEZY_STORE_ID || '';
const variants = {
  starter: import.meta.env.VITE_LEMONSQUEEZY_STARTER_VARIANT_ID || '',
  professional: import.meta.env.VITE_LEMONSQUEEZY_PROFESSIONAL_VARIANT_ID || '',
  agency: import.meta.env.VITE_LEMONSQUEEZY_AGENCY_VARIANT_ID || '',
};

const extractStoreId = (storeIdOrUrl) => {
  if (!storeIdOrUrl) return '';
  const urlMatch = storeIdOrUrl.match(/(?:https?:\/\/)?([^.]+)\.lemonsqueezy\.com/);
  if (urlMatch) {
    return urlMatch[1];
  }
  if (storeIdOrUrl.includes('://')) {
    return storeIdOrUrl.replace(/https?:\/\//, '').split('.')[0];
  }
  return storeIdOrUrl;
};

const storeId = extractStoreId(rawStoreId.trim());

const setError = (message) => {
  if (errorBox && errorText) {
    errorText.textContent = message;
    errorBox.classList.remove('hidden');
  }
  if (successBox) {
    successBox.classList.add('hidden');
  }
};

const clearError = () => {
  if (errorBox) {
    errorBox.classList.add('hidden');
  }
};

const setButtonLoading = (button, isLoading) => {
  const defaultLabel = button.querySelector('[data-checkout-default]');
  const loadingLabel = button.querySelector('[data-checkout-loading]');
  if (isLoading) {
    button.setAttribute('disabled', 'disabled');
    if (defaultLabel) {
      defaultLabel.classList.add('hidden');
    }
    if (loadingLabel) {
      loadingLabel.classList.remove('hidden');
      loadingLabel.classList.add('inline-flex');
    }
  } else {
    button.removeAttribute('disabled');
    if (defaultLabel) {
      defaultLabel.classList.remove('hidden');
    }
    if (loadingLabel) {
      loadingLabel.classList.add('hidden');
      loadingLabel.classList.remove('inline-flex');
    }
  }
};

const buildCheckoutUrl = (variantId) => {
  if (!storeId || storeId.includes('your-store')) {
    throw new Error('Payment system not configured. Please set VITE_LEMONSQUEEZY_STORE_ID in your .env file.');
  }
  if (!variantId || variantId.includes('variant-id')) {
    throw new Error('LemonSqueezy variant ID not configured.');
  }

  const params = new URLSearchParams();
  params.append('embed', '1');
  params.append('media', '0');

  return `https://${storeId}.lemonsqueezy.com/buy/${variantId}?${params.toString()}`;
};

const openCheckoutOverlay = (url, onClose) => {
  const existingOverlay = document.getElementById('lemonsqueezy-overlay');
  if (existingOverlay) {
    existingOverlay.remove();
  }

  const originalOverflow = document.body.style.overflow;

  const overlay = document.createElement('div');
  overlay.id = 'lemonsqueezy-overlay';
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 23, 42, 0.7);
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  `;

  const modal = document.createElement('div');
  modal.style.cssText = `
    position: relative;
    width: min(95vw, 560px);
    height: min(90vh, 720px);
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    transform: scale(0.95);
    transition: transform 0.3s ease;
  `;

  const header = document.createElement('div');
  header.style.cssText = `
    position: absolute;
    inset: 0 0 auto 0;
    height: 52px;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    z-index: 10;
  `;

  const headerTitle = document.createElement('span');
  headerTitle.textContent = 'Complete Your Purchase';
  headerTitle.style.cssText = `
    color: white;
    font-weight: 600;
    font-size: 15px;
  `;

  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.innerHTML = '&times; Close';
  closeButton.style.cssText = `
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    padding: 6px 12px;
    font-size: 13px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: white;
    font-weight: 500;
    transition: background 0.2s;
  `;
  closeButton.onmouseover = () => { closeButton.style.background = 'rgba(255, 255, 255, 0.3)'; };
  closeButton.onmouseout = () => { closeButton.style.background = 'rgba(255, 255, 255, 0.2)'; };

  header.appendChild(headerTitle);
  header.appendChild(closeButton);

  const loader = document.createElement('div');
  loader.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #64748b;
    font-size: 14px;
  `;
  loader.innerHTML = `
    <div style="width: 40px; height: 40px; border: 3px solid #e5e7eb; border-top-color: #10b981; border-radius: 50%; animation: ls-spin 1s linear infinite; margin: 0 auto 10px;"></div>
    <p>Loading checkout...</p>
    <style>@keyframes ls-spin { to { transform: rotate(360deg); } }</style>
  `;

  const iframeWrap = document.createElement('div');
  iframeWrap.style.cssText = `
    position: absolute;
    inset: 52px 0 0 0;
  `;

  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.title = 'Checkout';
  iframe.style.cssText = `
    width: 100%;
    height: 100%;
    border: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  `;

  iframe.onload = () => {
    loader.style.display = 'none';
    iframe.style.opacity = '1';
  };

  const closeOverlay = () => {
    overlay.style.opacity = '0';
    modal.style.transform = 'scale(0.95)';
    document.body.style.overflow = originalOverflow || '';
    setTimeout(() => {
      overlay.remove();
      onClose();
    }, 300);
  };

  closeButton.addEventListener('click', closeOverlay);
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeOverlay();
    }
  });

  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      closeOverlay();
      document.removeEventListener('keydown', handleEscape);
    }
  };
  document.addEventListener('keydown', handleEscape);

  iframeWrap.appendChild(iframe);
  modal.appendChild(header);
  modal.appendChild(loader);
  modal.appendChild(iframeWrap);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  document.body.style.overflow = 'hidden';

  requestAnimationFrame(() => {
    overlay.style.opacity = '1';
    modal.style.transform = 'scale(1)';
  });
};

let activeButton = null;

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    clearError();

    const planId = button.dataset.checkout;
    if (!planId) {
      setError('Plan not found.');
      return;
    }

    const variantId = variants[planId];
    if (!variantId) {
      setError(`Variant ID not configured for ${planId}. Please add it to your .env file.`);
      return;
    }

    if (activeButton) {
      setButtonLoading(activeButton, false);
    }

    activeButton = button;
    setButtonLoading(button, true);

    let url = '';
    try {
      url = buildCheckoutUrl(variantId);
    } catch (error) {
      setButtonLoading(button, false);
      activeButton = null;
      setError(error instanceof Error ? error.message : 'Failed to start checkout.');
      return;
    }

    openCheckoutOverlay(url, () => {
      setButtonLoading(button, false);
      activeButton = null;
    });
  });
});

faqButtons.forEach((button) => {
  const panel = button.parentElement?.querySelector('[data-faq-panel]');
  if (!panel) {
    return;
  }

  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', (!isOpen).toString());
    panel.classList.toggle('hidden', isOpen);
  });
});

const url = new URL(window.location.href);
if (url.searchParams.get('checkout') === 'success' && successBox) {
  successBox.classList.remove('hidden');
}
