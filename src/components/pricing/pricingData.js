export const iconSvg = (type, className) => {
	if (type === 'check') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;
	}
	if (type === 'shield') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>`;
	}
	if (type === 'refresh') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15-6l3-3v9h-9l3-3a6 6 0 1 0 1.5 6"/></svg>`;
	}
	if (type === 'zap') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>`;
	}
	if (type === 'bar-chart') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15v3"/><path d="M12 9v9"/><path d="M17 6v12"/></svg>`;
	}
	if (type === 'brain') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4a3 3 0 0 1 6 0 3 3 0 0 1 6 0"/><path d="M6 4v6a3 3 0 0 0 3 3h2"/><path d="M18 4v6a3 3 0 0 1-3 3h-2"/><path d="M9 13a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3"/><path d="M15 13a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3"/></svg>`;
	}
	if (type === 'arrow-up') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19 7-7-7-7"/><path d="M5 12h14"/></svg>`;
	}
	if (type === 'users') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
	}
	if (type === 'link') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 1 0-7l2-2a5 5 0 0 1 7 7l-2 2"/><path d="M14 11a5 5 0 0 1 0 7l-2 2a5 5 0 0 1-7-7l2-2"/></svg>`;
	}
	if (type === 'calendar') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>`;
	}
	if (type === 'mail') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`;
	}
	if (type === 'help') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 1 1 5.82 1c0 2-3 2-3 4"/><line x1="12" y1="17" x2="12" y2="17"/></svg>`;
	}
	if (type === 'star') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>`;
	}
	if (type === 'award') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.5 13.5 19 22l-7-4-7 4 3.5-8.5"/></svg>`;
	}
	if (type === 'loader') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93 7.76 7.76"/><path d="M16.24 16.24 19.07 19.07"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07 7.76 16.24"/><path d="M16.24 7.76 19.07 4.93"/></svg>`;
	}
	return '';
};

export const colorClasses = {
	emerald: {
		badge: 'bg-emerald-600',
		ring: 'ring-2 ring-emerald-500',
		button: 'bg-emerald-600 hover:bg-emerald-700',
		link: 'text-emerald-600',
		iconBg: 'bg-emerald-100',
		iconText: 'text-emerald-600',
		roiBg: 'bg-emerald-50 border-emerald-200',
		roiText: 'text-emerald-900'
	},
	blue: {
		badge: 'bg-blue-600',
		ring: 'ring-2 ring-blue-500',
		button: 'bg-blue-600 hover:bg-blue-700',
		link: 'text-blue-600',
		iconBg: 'bg-blue-100',
		iconText: 'text-blue-600',
		roiBg: 'bg-blue-50 border-blue-200',
		roiText: 'text-blue-900'
	},
	amber: {
		badge: 'bg-amber-500',
		ring: 'ring-2 ring-amber-500',
		button: 'bg-amber-500 hover:bg-amber-600',
		link: 'text-amber-600',
		iconBg: 'bg-amber-100',
		iconText: 'text-amber-600',
		roiBg: 'bg-amber-50 border-amber-200',
		roiText: 'text-amber-900'
	}
};

export const pricingTiers = [
	{
		name: 'STARTER',
		price: '$99',
		billing: 'per year',
		badge: 'MOST POPULAR',
		bestFor: 'Single Site & Startups',
		tagline: 'Everything you need to launch and grow your subscription business',
		description:
			'Unlock all 26 features including advanced billing and premium support. Perfect for entrepreneurs and single-site businesses ready to scale.',
		features: [
			'All 18 FREE Features, PLUS:',
			'Daily & Weekly Billing Periods',
			'Smart Dunning Management (Recover 40-70% of failed payments)',
			'7 Advanced Email Campaigns',
			'Revenue Forecasting & Projections',
			'AI-Powered Churn Prediction',
			'Subscription Upgrades/Downgrades with Proration',
			'Team Collaboration Tools (3 team members)',
			'Webhook Integrations (Zapier, Make.com, etc.)'
		],
		license: [
			'1 Site License',
			'1 Year of Updates',
			'1 Year of Priority Email Support',
			'Premium Documentation',
			'24-48 Hour Response Time',
			'30-Day Money-Back Guarantee',
			'14-Day Free Trial (No Credit Card)'
		],
		roi: [
			'Recover $40-70 for every $100 in failed payments*',
			'Reduce churn by 25-40% with AI predictions*',
			'Save 10+ hours/week on manual billing tasks*',
			'Increase revenue by 15-30% with advanced billing*'
		],
		cta: 'Start 14-Day Free Trial',
		ctaLink: '#',
		accentColor: 'emerald',
		popular: true,
		popularText: 'Chosen by 70% of our customers'
	},
	{
		name: 'PROFESSIONAL',
		price: '$199',
		billing: 'per year',
		badge: null,
		bestFor: 'Growing Businesses & Multi-Site Owners',
		tagline: 'Scale your subscription empire across multiple sites',
		description:
			'Everything in Starter, plus the ability to manage subscriptions across 5 different websites. Perfect for growing businesses with multiple brands or client sites.',
		features: [
			'Everything in STARTER, PLUS:',
			'5 Site Licenses',
			'Unlimited Team Members',
			'Priority Support (12-24 Hour Response)',
			'Live Chat Support',
			'Priority Onboarding & Setup Assistance',
			'Advanced Analytics Dashboard',
			'Enhanced Security Features',
			'White-Label Options (Remove Recurio Branding)'
		],
		license: [
			'5 Site Licenses',
			'1 Year of Updates',
			'Priority Support (Email + Live Chat)',
			'Premium Documentation & Video Tutorials',
			'12-24 Hour Response Time',
			'Dedicated Onboarding Specialist',
			'30-Day Money-Back Guarantee',
			'14-Day Free Trial (No Credit Card)'
		],
		perfectFor: [
			'Agencies managing multiple client sites',
			'Businesses with multiple brands',
			'Entrepreneurs with product portfolios',
			'Serious subscription businesses'
		],
		valueProposition: 'Save $295/year vs. buying 5 separate Starter licenses ($495 total)',
		cta: 'Start 14-Day Free Trial',
		ctaLink: '#',
		accentColor: 'blue',
		popular: false
	},
	{
		name: 'AGENCY',
		price: '$399',
		billing: 'per year',
		badge: 'BEST VALUE',
		bestFor: 'Agencies & Enterprises',
		tagline: 'Unlimited power for agencies and high-volume businesses',
		description:
			'Our most comprehensive plan for agencies, developers, and enterprises. Manage up to 50 client sites with VIP support, advanced features, and maximum flexibility.',
		features: [
			'Everything in PROFESSIONAL, PLUS:',
			'50 Site Licenses',
			'VIP Support (Priority Queue)',
			'Priority Phone & Video Call Support',
			'4-12 Hour Response Time',
			'Dedicated Account Manager',
			'Custom Feature Requests Consideration',
			'Advanced Training Sessions',
			'Quarterly Business Reviews',
			'Migration Assistance',
			'Full White-Label Capabilities',
			'Custom Branding Options',
			'Advanced Reporting & Analytics',
			'Enterprise Security Features'
		],
		license: [
			'50 Site Licenses',
			'1 Year of Updates',
			'VIP Support (Email, Chat, Phone, Video)',
			'Complete Documentation Suite',
			'4-12 Hour Response Time',
			'Dedicated Account Manager',
			'Quarterly Strategy Calls',
			'30-Day Money-Back Guarantee',
			'14-Day Free Trial (No Credit Card)'
		],
		perfectFor: [
			'Digital Agencies',
			'SaaS Development Companies',
			'Enterprise E-commerce Businesses',
			'Multi-Brand Corporations',
			'Development Teams'
		],
		valueProposition:
			'Save $4,551/year vs. buying 50 Starter licenses ($4,950 total). That is over 91% savings!',
		enterpriseNote: 'Need more than 50 sites? Contact us for custom enterprise pricing.',
		cta: 'Start 14-Day Free Trial',
		ctaLink: '#',
		accentColor: 'amber',
		popular: false
	}
];

export const proFeatures = [
	{
		icon: 'calendar',
		title: 'Daily & Weekly Billing Periods',
		description:
			'Charge customers on daily or weekly cycles for high-frequency services like meal deliveries, daily content, or weekly coaching.',
		roi: 'Charge premium for weekly services, increase cash flow with daily billing',
		value: 'Perfect for subscription boxes, meal plans, fitness programs, and coaching services'
	},
	{
		icon: 'refresh',
		title: 'Smart Dunning Management',
		description:
			'Automatically retry failed payments with intelligent scheduling. Recover 40-70% of failed payments that would otherwise be lost.',
		roi: 'Recover $40-70 for every $100 in failed payments*',
		example:
			'$10,000/month x 5% failure = $500 failed. 60% recovery = $300/month saved = $3,600/year',
		features: [
			'Automatic retry on failure',
			'Progressive retry intervals (1, 3, 7 days)',
			'Smart scheduling optimization',
			'Automatic dunning emails'
		]
	},
	{
		icon: 'mail',
		title: 'Advanced Email Campaigns (7 Types)',
		description:
			'Beyond basic transactional emails, Pro includes 7 advanced campaigns designed to maximize customer lifetime value and reduce churn.',
		roi: '1000 customers x $50/month = $50K MRR. 10% churn reduction = $5K MRR saved = $60K ARR*',
		campaigns: [
			'Trial Ending Reminders (3-email sequence: 7, 3, 1 days)',
			'Renewal Reminders (14, 7, 3 days before)',
			'Payment Failed Recovery (3-attempt sequence)',
			'Re-engagement for Paused Subscriptions',
			'Win-back for Cancelled Customers',
			'Upgrade Incentive Emails',
			'Customer Milestone Celebrations'
		]
	},
	{
		icon: 'bar-chart',
		title: 'Revenue Forecasting & Projections',
		description: 'Predict future revenue with MRR/ARR projections based on historical data, growth trends, and churn rates.',
		roi: 'Show investors projected growth, plan resources based on data',
		features: [
			'MRR and ARR projections',
			'Growth trend analysis',
			'Churn impact modeling',
			'Scenario planning tools',
			'Visual projection charts'
		]
	},
	{
		icon: 'brain',
		title: 'AI-Powered Churn Prediction',
		description:
			'Machine learning model analyzes 15+ subscription and engagement signals to calculate churn probability for every customer.',
		roi: 'Reduce churn by 25-40% with proactive intervention*',
		example: '1000 customers x $50 x 10% churn = $5K lost/month. 30% reduction = $1.5K saved/month = $18K/year',
		howItWorks: [
			'Churn probability score (0-1)',
			'At-risk customer dashboard',
			'Automated intervention triggers',
			'Retention campaign suggestions'
		]
	},
	{
		icon: 'arrow-up',
		title: 'Plan Upgrades & Downgrades',
		description:
			'Allow customers to upgrade or downgrade subscription plans mid-cycle with automatic proration calculations.',
		roi: '20-30% of customers upgrade when given easy options*',
		features: ['Automatic proration math', 'Instant plan switching', 'Credit/charge prorated amounts', 'Seamless customer experience']
	},
	{
		icon: 'users',
		title: 'Team Collaboration Tools',
		description:
			'Allow your team to collaborate on subscription management with role-based permissions and activity logs.',
		plans: ['Starter: 3 team members', 'Professional: Unlimited team members', 'Agency: Unlimited + advanced roles'],
		features: ['User roles (Admin, Manager, Support)', 'Activity audit logs', 'Team notifications', 'Collaborative notes']
	},
	{
		icon: 'link',
		title: 'Webhook Integrations',
		description:
			'Connect Recurio to thousands of apps via webhooks. Trigger actions in Zapier, Make.com, Slack, CRM systems, and more.',
		roi: 'Replace Zapier costs ($20-50/month), eliminate manual data entry',
		useCases: [
			'Send new subscriptions to CRM',
			'Notify Slack on cancellations',
			'Update Google Sheets with revenue',
			'Trigger custom automations'
		],
		features: ['15+ webhook events', 'HMAC signature verification', 'Retry logic for failed webhooks', 'Real-time delivery']
	}
];

export const faqs = [
	{
		question: 'Do I need a credit card for the free trial?',
		answer:
			"No! Our 14-day free trial for Starter, Professional, and Agency plans requires no credit card. Just download the plugin, activate your trial, and explore all premium features risk-free. You'll only be charged if you decide to continue after the trial ends."
	},
	{
		question: 'What happens after my trial ends?',
		answer:
			"After your 14-day trial, you can choose to purchase a license to continue using PRO features. If you don't purchase, your PRO features will be disabled. No data is lost and you can purchase anytime to re-enable PRO features."
	},
	{
		question: 'Can I upgrade or downgrade my plan later?',
		answer:
			'Absolutely! You can upgrade from Starter to Professional or Agency at any time. We will prorate the difference and apply it to your new plan. Downgrades take effect at your next renewal date. Contact support@wprecurio.com for assistance.'
	},
	{
		question: 'What payment methods do you accept?',
		answer:
			'We accept all major credit cards (Visa, Mastercard, American Express, Discover) via Stripe, and PayPal. All payments are secure and PCI-compliant.'
	},
	{
		question: 'Is there a money-back guarantee?',
		answer:
			"Yes! All paid plans include a 30-day money-back guarantee. If you're not satisfied for any reason within 30 days of purchase, contact us for a full refund - no questions asked."
	},
	{
		question: 'What happens when my license expires after 1 year?',
		answer:
			"After 1 year, you can choose to renew your license at the same price to continue receiving updates and support. If you don't renew, your plugin will continue working with all features you've already activated, but you won't receive new updates, security patches, or support. You can renew anytime."
	},
	{
		question: 'Can I use my license on multiple sites?',
		answer:
			'Starter: 1 site only | Professional: Up to 5 sites | Agency: Up to 50 sites. Each license can only be activated on the number of sites specified in your plan. Need more? Upgrade to a higher tier or contact us for custom enterprise pricing.'
	},
	{
		question: 'Can I transfer my license to a different domain?',
		answer:
			'Yes! You can transfer your license to a different domain at any time. Simply deactivate the license from your old site and activate it on your new site. If you need help, our support team can assist you.'
	},
	{
		question: 'Are there any hidden fees or additional costs?',
		answer:
			'No! The price you see is the price you pay. There are no setup fees, no hidden costs, and no surprises. The only additional cost would be if you choose to renew your license after 1 year (optional).'
	},
	{
		question: "What's included in \"support\"?",
		answer:
			'Starter: Priority email support with 24-48 hour response time, premium documentation | Professional: Email + live chat support with 12-24 hour response, onboarding assistance, video tutorials | Agency: VIP support with 4-12 hour response, email + chat + phone + video calls, dedicated account manager, quarterly strategy sessions'
	},
	{
		question: 'What happens to my data if I cancel?',
		answer:
			'All your subscription data, customer information, and settings remain in your WordPress database. If you cancel your paid plan, you can re-upgrade anytime to regain access to PRO features.'
	},
	{
		question: 'How do updates work?',
		answer:
			'Updates are delivered directly through your WordPress dashboard, just like any other plugin. Paid users receive updates for 1 year from purchase date. After 1 year, you can renew to continue receiving updates.'
	}
];
