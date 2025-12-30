const Settings = 'settings';
const RefreshCw = 'refresh';
const TrendingUp = 'trending';
const Heart = 'heart';
const Zap = 'zap';
const CheckCircle = 'check';
const X = 'x';
const Lock = 'lock';
const CreditCard = 'card';
const Users = 'users';
const Mail = 'mail';
const BarChart3 = 'chart';
const Bell = 'bell';
const Globe = 'globe';
const Database = 'database';
const Shield = 'shield';
const Clock = 'clock';
const Calendar = 'calendar';
const ArrowRight = 'arrow-right';
const ChevronDown = 'chevron-down';
const FileText = 'file';
const Rocket = 'rocket';
const Target = 'target';
const DollarSign = 'dollar';
const Activity = 'activity';
const Award = 'award';

export const iconSvg = (type, className) => {
	if (type === 'settings') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V22a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82A1.65 1.65 0 0 0 2 12a2 2 0 1 1 0-4 1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 7.91 2 2 2 0 1 1 12 2a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82A1.65 1.65 0 0 0 22 12a2 2 0 1 1 0 4 1.65 1.65 0 0 0-1.51 1z"/></svg>`;
	}
	if (type === 'refresh') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>`;
	}
	if (type === 'trending') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 17 6-6 4 4 7-7"/><path d="M21 7v6h-6"/></svg>`;
	}
	if (type === 'heart') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/></svg>`;
	}
	if (type === 'zap') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>`;
	}
	if (type === 'check') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;
	}
	if (type === 'x') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
	}
	if (type === 'lock') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;
	}
	if (type === 'card') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`;
	}
	if (type === 'users') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 11a4 4 0 1 0-8 0"/><path d="M4 20v-1a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v1"/><circle cx="12" cy="7" r="3"/></svg>`;
	}
	if (type === 'mail') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6 12 13 2 6"/></svg>`;
	}
	if (type === 'chart') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`;
	}
	if (type === 'bell') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`;
	}
	if (type === 'globe') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;
	}
	if (type === 'database') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/></svg>`;
	}
	if (type === 'shield') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;
	}
	if (type === 'clock') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`;
	}
	if (type === 'calendar') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`;
	}
	if (type === 'arrow-right') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>`;
	}
	if (type === 'chevron-down') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`;
	}
	if (type === 'file') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>`;
	}
	if (type === 'rocket') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13a9 9 0 0 1 9-9h7v7a9 9 0 0 1-9 9H4v-7z"/><circle cx="15" cy="9" r="2"/><path d="M6 19v3H3"/></svg>`;
	}
	if (type === 'target') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`;
	}
	if (type === 'dollar') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6"/></svg>`;
	}
	if (type === 'activity') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`;
	}
	if (type === 'award') {
		return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.5 14.5 17 22l-5-3-5 3 1.5-7.5"/></svg>`;
	}
	return `<svg viewBox="0 0 24 24" class="${className}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>`;
};

export const categories = [
	{ id: 'all', label: 'All Features', icon: Zap },
	{ id: 'management', label: 'Subscription Management', icon: Settings },
	{ id: 'billing', label: 'Payment & Billing', icon: CreditCard },
	{ id: 'customer', label: 'Customer Experience', icon: Heart },
	{ id: 'analytics', label: 'Analytics & Reporting', icon: BarChart3 },
	{ id: 'automation', label: 'Automation', icon: RefreshCw },
	{ id: 'integrations', label: 'Integrations', icon: Globe },
];

export const freeFeatures = [
	{
		id: 'subscription-management',
		category: 'management',
		icon: Settings,
		title: 'Complete Subscription Management',
		tagline: 'Manage Every Subscription Detail from One Powerful Dashboard',
		description: 'Create, update, pause, resume, and cancel subscriptions with full control over every detail including billing cycles, customer information, and payment methods.',
		benefits: [
			'10x faster than competitors with Vue.js interface',
			'Zero page reloads for instant updates',
			'Bulk operations for hundreds of subscriptions',
			'Complete audit trail with event logging',
		],
		features: [
			'Create/update subscriptions manually',
			'Search and filter by status, product, customer',
			'Pause/resume with automatic date recalculation',
			'Bulk pause, resume, cancel, or delete',
			'Export subscription data to CSV',
		],
		gradient: 'from-[#093865] to-[#0B4A7D]',
	},
	{
		id: 'flexible-billing',
		category: 'billing',
		icon: Calendar,
		title: 'Flexible Billing Periods & Intervals',
		tagline: 'Monthly and Yearly Billing That Adapts to Your Business',
		description: 'Configure subscription products with flexible monthly or yearly billing cycles, customizable intervals, and intelligent date calculations.',
		benefits: [
			'Monthly and yearly billing periods included',
			'Custom intervals (every 2 months, etc.)',
			'Trial period support (days, weeks, months)',
			'Automatic timezone-aware scheduling',
		],
		features: [
			'Monthly and Yearly billing periods (FREE)',
			'Custom billing intervals',
			'Trial periods (0-90 days/weeks/months)',
			'Sign-up fee configuration',
			'Unlimited or limited subscription length',
		],
		gradient: 'from-[#13B8A6] to-[#0D9488]',
	},
	{
		id: 'email-notifications',
		category: 'customer',
		icon: Mail,
		title: 'Automated Email Notification System',
		tagline: 'Keep Customers Informed with 8 Automated Email Notifications',
		description: 'Comprehensive email notification system that automatically sends professional HTML emails for every major subscription event.',
		benefits: [
			'Reduce involuntary churn by 15-25%',
			'Keep customers informed automatically',
			'Customizable sender details',
			'Reduce support tickets significantly',
		],
		features: [
			'Welcome email for new subscriptions',
			'Payment receipt and failure notifications',
			'Renewal reminders (1-30 days before)',
			'Subscription paused/resumed/cancelled emails',
			'Subscription expired notifications',
			'Custom from name and email',
			'Individual on/off toggles',
			'Responsive HTML templates',
		],
		gradient: 'from-[#90D144] to-[#7BC135]',
	},
	{
		id: 'customer-portal',
		category: 'customer',
		icon: Users,
		title: 'Self-Service Customer Portal',
		tagline: 'Empower Customers to Manage Their Own Subscriptions',
		description: 'Beautiful, responsive customer portal that integrates seamlessly with WooCommerce My Account or works as a standalone page.',
		benefits: [
			'Reduce support tickets by 60-80%',
			'24/7 customer self-service',
			'Easy pause prevents cancellations',
			'Professional interface improves satisfaction',
		],
		features: [
			'View all subscriptions and details',
			'Pause/resume subscriptions instantly',
			'Cancel subscriptions (immediate or end-of-period)',
			'View complete payment history',
			'Update billing and shipping addresses',
			'Change payment methods',
			'Standalone page or WooCommerce integration',
		],
		gradient: 'from-[#093865] to-[#13B8A6]',
	},
	{
		id: 'analytics-dashboard',
		category: 'analytics',
		icon: BarChart3,
		title: 'Real-Time Analytics Dashboard',
		tagline: 'Beautiful Analytics That Show Exactly How Your Business Is Growing',
		description: 'Comprehensive analytics dashboard with real-time KPIs, interactive charts, and customer segmentation insights.',
		benefits: [
			'Data-driven decisions in real-time',
			'Visualize revenue trends instantly',
			'Identify at-risk customers early',
			'Investor-ready KPIs and charts',
		],
		features: [
			'MRR, ARR, ARPU, LTV metrics',
			'Churn rate and growth rate tracking',
			'Interactive revenue trend charts',
			'Customer segmentation (New, Active, At Risk, Churned)',
			'Subscription growth tracking',
			'Real-time updates with every change',
		],
		gradient: 'from-[#90D144] to-[#13B8A6]',
	},
	{
		id: 'revenue-tracking',
		category: 'analytics',
		icon: DollarSign,
		title: 'Revenue Analytics & Goal Tracking',
		tagline: 'Track Every Dollar with Comprehensive Revenue Analytics',
		description: 'Deep revenue insights with transaction-level detail, product performance analysis, payment method breakdowns, and customizable revenue goals.',
		benefits: [
			'Complete revenue visibility',
			'Set and track growth targets',
			'Identify top-performing products',
			'Understand payment preferences',
		],
		features: [
			'Total revenue with growth indicators',
			'Transaction count and average value',
			'Product revenue breakdown charts',
			'Payment method distribution',
			'Custom revenue goals (Daily/Weekly/Monthly/Quarterly/Yearly)',
			'Automatic progress tracking',
			'Complete transaction history',
			'Export to CSV',
		],
		gradient: 'from-[#093865] to-[#0B4A7D]',
	},
	{
		id: 'cohort-analysis',
		category: 'analytics',
		icon: Activity,
		title: 'Cohort Analysis & Retention Tracking',
		tagline: 'Understand Customer Retention with Cohort-Based Analytics',
		description: 'Powerful cohort analysis tools that group customers by signup month and track retention, revenue, and subscription counts over time.',
		benefits: [
			'Identify best-retained customer groups',
			'Track lifetime revenue by cohort',
			'Spot improving/declining trends',
			'Adjust marketing based on performance',
		],
		features: [
			'Monthly cohort grouping',
			'Retention rate percentage tracking',
			'Revenue per cohort analysis',
			'Active subscriptions per cohort',
			'Visual heatmap representation',
			'Export cohort data',
		],
		gradient: 'from-[#13B8A6] to-[#0D9488]',
	},
	{
		id: 'automated-billing',
		category: 'billing',
		icon: RefreshCw,
		title: 'Automated Payment Processing',
		tagline: 'Never Miss a Payment with Automated Billing',
		description: 'Intelligent automated billing system that processes recurring payments through integrated payment gateways with payment tokenization and retry logic.',
		benefits: [
			'Recover 30-40% of failed payments',
			'Eliminate manual payment processing',
			'Predictable automated revenue',
			'Seamless hassle-free renewals',
		],
		features: [
			'Stripe, PayPal, and any tokenization-capable gateway',
			'Automatic payment processing on renewal dates',
			'Payment token storage and management',
			'Renewal order creation and tracking',
			'1 retry attempt with 3-day interval (FREE)',
			'Payment failure email notifications',
			'Scheduled processing via WordPress Cron',
		],
		gradient: 'from-[#90D144] to-[#7BC135]',
	},
	{
		id: 'trial-periods',
		category: 'billing',
		icon: Clock,
		title: 'Trial Periods & Sign-Up Fees',
		tagline: 'Acquire More Customers with Flexible Trial Periods',
		description: 'Offer trial periods in days, weeks, or months to reduce friction for new customers, and charge optional one-time sign-up fees.',
		benefits: [
			'Trials increase conversions by 20-40%',
			'Sign-up fees offset onboarding costs',
			'Customers test before committing',
			'Trial converters have higher retention',
		],
		features: [
			'Set trial length (0-90 units)',
			'Trial units: days, weeks, or months',
			'Automatic trial end date calculation',
			'No payment during trial period',
			'Auto-conversion to paid after trial',
			'One-time sign-up fees',
			'Double-charge prevention system',
		],
		gradient: 'from-[#093865] to-[#13B8A6]',
	},
	{
		id: 'woocommerce-integration',
		category: 'integrations',
		icon: Globe,
		title: 'WooCommerce Integration',
		tagline: 'Seamlessly Integrated with WooCommerce',
		description: 'Deep WooCommerce integration that makes any product a subscription with zero friction. Subscription settings appear directly in the product editor.',
		benefits: [
			'Convert products in seconds',
			'Works within existing workflows',
			'Zero learning curve',
			'Orders and subscriptions stay in sync',
		],
		features: [
			'Custom "Subscription" tab in product editor',
			'Enable/disable subscriptions per product',
			'Bulk edit subscription toggle',
			'Automatic subscription creation on order completion',
			'Order metadata prevents duplicates',
			'Subscription lifecycle linked to orders',
		],
		gradient: 'from-[#90D144] to-[#13B8A6]',
	},
	{
		id: 'event-logging',
		category: 'management',
		icon: FileText,
		title: 'Subscription Event Logging',
		tagline: 'Complete Audit Trail of Every Subscription Action',
		description: 'Comprehensive event logging system that records every subscription lifecycle event, payment transaction, and status change.',
		benefits: [
			'Complete subscription history instantly',
			'Easy debugging through event timeline',
			'Audit trail for compliance',
			'Historical data for analysis',
		],
		features: [
			'Created, updated, paused, resumed events',
			'Cancelled and completed tracking',
			'Payment processed and failed logs',
			'Event timestamps and metadata',
			'Chronological timeline view',
		],
		gradient: 'from-[#093865] to-[#0B4A7D]',
	},
	{
		id: 'customer-analytics',
		category: 'analytics',
		icon: Target,
		title: 'Customer Analytics & Segmentation',
		tagline: 'Know Your Customers with Automatic Segmentation',
		description: 'Automatic calculation and storage of customer-level analytics including total subscriptions, lifetime revenue, churn risk, and segment classification.',
		benefits: [
			'Identify VIP customers for special treatment',
			'Proactively reach at-risk customers',
			'Target campaigns by customer value',
			'Data-driven retention strategies',
		],
		features: [
			'Total and active subscriptions per customer',
			'Lifetime revenue tracking',
			'Average order value calculation',
			'Churn probability score (0-1)',
			'Customer LTV calculation',
			'Automatic segmentation (New, Active, At Risk, Churned)',
			'Search and filter by metrics',
		],
		gradient: 'from-[#13B8A6] to-[#0D9488]',
	},
	{
		id: 'bulk-operations',
		category: 'management',
		icon: Zap,
		title: 'Bulk Operations',
		tagline: 'Manage Multiple Subscriptions with One Click',
		description: 'Efficiently manage subscriptions at scale with bulk operations. Select multiple subscriptions and perform actions simultaneously.',
		benefits: [
			'Update 100 subscriptions in seconds',
			'Seasonal management made easy',
			'Remove test subscriptions quickly',
			'Scale management without scaling staff',
		],
		features: [
			'Pause multiple subscriptions',
			'Resume multiple subscriptions',
			'Cancel multiple subscriptions',
			'Delete multiple subscriptions',
			'Multi-select with checkboxes',
			'Confirmation dialogs prevent accidents',
			'AJAX processing with progress indicators',
		],
		gradient: 'from-[#90D144] to-[#7BC135]',
	},
	{
		id: 'export-reporting',
		category: 'analytics',
		icon: FileText,
		title: 'Export & Reporting',
		tagline: 'Export Your Data Anytime in Perfect CSV Format',
		description: 'Export subscription data, revenue transactions, and customer lists to CSV format with proper encoding and formatting for cross-platform compatibility.',
		benefits: [
			'Use data in Excel, Google Sheets, or BI tools',
			'Create custom reports and presentations',
			'Full access to your business data',
			'Export for tax, legal, or audit requirements',
		],
		features: [
			'Export subscriptions list to CSV',
			'Export revenue transactions to CSV',
			'Export customer analytics to CSV',
			'UTF-8 BOM for Excel compatibility',
			'Cross-platform line break handling',
			'Standard date formatting',
		],
		gradient: 'from-[#093865] to-[#13B8A6]',
	},
	{
		id: 'payment-gateways',
		category: 'billing',
		icon: CreditCard,
		title: 'Payment Gateway Integration',
		tagline: 'Works with Stripe, PayPal, and Any Tokenization-Capable Gateway',
		description: 'Flexible payment gateway integration that supports any WooCommerce payment gateway with tokenization capabilities.',
		benefits: [
			'Use your preferred payment processor',
			'System recommends compatible gateways',
			'Tokenization ensures PCI compliance',
			'Offer multiple payment options',
		],
		features: [
			'Stripe - Full tokenization support',
			'PayPal - Billing agreements',
			'Square, Authorize.net, and more',
			'Automatic capability detection',
			'Offline gateway exclusion',
			'Visual compatibility indicators',
			'Gateway filtering in checkout',
		],
		gradient: 'from-[#90D144] to-[#13B8A6]',
	},
	{
		id: 'settings-management',
		category: 'management',
		icon: Settings,
		title: 'Settings Management with Auto-Save',
		tagline: 'Configure Everything from One Powerful Settings Page',
		description: 'Centralized settings management with automatic saving, change detection, and organized sections for all configuration options.',
		benefits: [
			'Changes saved automatically',
			'Discard changes if needed',
			'Organized grouped settings',
			'Visual success/error feedback',
		],
		features: [
			'General settings (portal, endpoints)',
			'Billing settings (periods, retry logic)',
			'Email settings (8 notification toggles)',
			'Payment method selection',
			'Auto-save on change',
			'Change detection system',
		],
		gradient: 'from-[#093865] to-[#0B4A7D]',
	},
	{
		id: 'rest-api',
		category: 'integrations',
		icon: Globe,
		title: 'REST API for Developers',
		tagline: 'Full-Featured REST API for Custom Integrations',
		description: 'Comprehensive REST API with 30+ endpoints covering subscriptions, customers, products, analytics, revenue, and settings.',
		benefits: [
			'Build custom integrations and mobile apps',
			'Connect to BI tools like Tableau',
			'Trigger external workflows',
			'Build custom white-label interfaces',
		],
		features: [
			'30+ REST API endpoints',
			'Subscriptions CRUD and actions',
			'Customer and analytics endpoints',
			'Revenue and goals management',
			'Settings configuration',
			'WordPress REST API authentication',
			'JSON responses',
			'Self-documenting schema',
		],
		gradient: 'from-[#13B8A6] to-[#0D9488]',
	},
	{
		id: 'changelog-updates',
		category: 'management',
		icon: Bell,
		title: 'Changelog & Update Notifications',
		tagline: 'Stay Informed with Version-Tracked Changelogs',
		description: 'Built-in changelog notification system with version tracking and user-specific read/unread status.',
		benefits: [
			'Know immediately when plugin updates',
			'Discover new features you might miss',
			'See exactly what changed',
			'Understand bug fixes and improvements',
		],
		features: [
			'Version tracking system',
			'User-specific read/unread status',
			'Notification bell with unread count',
			'Changelog drawer in admin',
			'Automatic new version detection',
			'Categorized changes (Features, Fixes, Improvements)',
		],
		gradient: 'from-[#90D144] to-[#7BC135]',
	},
];

export const proFeatures = [

    {
      id: 'advanced-billing-periods',
      category: 'billing',
      icon: Calendar,
      title: 'Advanced Billing Periods',
      tagline: 'Daily, Weekly, and Quarterly Billing for Every Business Model',
      description: 'Unlock three additional billing periods (Daily, Weekly, Quarterly) to match any business model.',
      roi: 'Market Expansion: Serve industries requiring non-monthly billing',
      benefits: [
        'Daily billing for cloud services',
        'Weekly billing for meal kits, newspapers',
        'Quarterly billing for business software',
        'Unlimited custom intervals'
      ],
      features: [
        'Daily billing period',
        'Weekly billing period',
        'Quarterly billing period',
        'All FREE features included',
        'Timezone-aware scheduling'
      ],
      gradient: 'from-[#7C3AED] to-[#A78BFA]',
      savings: 'Charge premium for weekly services, increase cash flow with daily billing'
    },
    {
      id: 'smart-dunning',
      category: 'billing',
      icon: RefreshCw,
      title: 'Smart Dunning & Payment Retry',
      tagline: 'Recover Up to 70% of Failed Payments with Intelligent Retry Logic',
      description: 'Advanced dunning management with configurable retry attempts (2-5), custom intervals (1-7 days), and multi-email recovery campaigns.',
      roi: 'Recover $40-70 for every $100 in failed payments',
      benefits: [
        '2-5 retry attempts (vs FREE: 1)',
        '1-7 day custom intervals',
        'Smart retry scheduling',
        'Progressive retry intervals'
      ],
      features: [
        'Configurable 2-5 retry attempts',
        'Custom 1-7 day intervals',
        'Smart scheduling (avoid weekends for B2B)',
        'Failed payment analytics',
        'Multi-email dunning campaign',
        'Dunning email customization'
      ],
      gradient: 'from-[#EC4899] to-[#F472B6]',
      savings: '$10,000/month x 5% failure = $500 failed. 60% recovery = $300/month saved = $3,600/year'
    },
    {
      id: 'email-campaigns',
      category: 'customer',
      icon: Mail,
      title: 'Advanced Email Automation Campaigns',
      tagline: '7 Sophisticated Email Campaigns That Increase LTV by 30%',
      description: 'Beyond basic transactional emails, Pro includes 7 advanced email campaigns designed to maximize customer lifetime value and reduce churn.',
      roi: 'Increase customer lifetime value by 20-30%',
      benefits: [
        'Smart Dunning Series',
        'Trial Ending Reminders (3-email)',
        'Win-Back Campaigns',
        'Card Expiration Alerts'
      ],
      features: [
        'Smart dunning multi-email sequence',
        'Trial ending reminders (7, 3, 1 days)',
        'Subscription expiration warnings',
        'Win-back campaigns (30, 60, 90 days)',
        'Card expiration alerts (60, 30, 14 days)',
        'Pause reminders',
        'Anniversary celebration emails'
      ],
      gradient: 'from-[#F59E0B] to-[#FBBF24]',
      savings: '1000 customers x $50/month = $50K MRR. 10% churn reduction = $5K MRR saved = $60K ARR'
    },
    {
      id: 'revenue-forecasting',
      category: 'analytics',
      icon: TrendingUp,
      title: 'Revenue Forecasting & Predictions',
      tagline: 'AI-Powered Revenue Predictions with 85% Accuracy',
      description: 'Advanced machine learning algorithms analyze historical data to predict future revenue with remarkable accuracy.',
      roi: 'Plan hiring, inventory, and expenses with confidence',
      benefits: [
        '3, 6, and 12-month forecasts',
        'MRR and ARR projections',
        'Confidence intervals',
        'Seasonal pattern detection'
      ],
      features: [
        '3-month, 6-month, 12-month forecasts',
        'MRR and ARR projections',
        'Optimistic/realistic/pessimistic scenarios',
        'Trend analysis (acceleration/deceleration)',
        'Seasonal pattern detection',
        'Visual forecast charts',
        'Machine learning ensemble methods'
      ],
      gradient: 'from-[#10B981] to-[#34D399]',
      savings: 'Show investors projected growth, plan resources based on data'
    },
    {
      id: 'churn-prediction',
      category: 'analytics',
      icon: Target,
      title: 'Churn Prediction & At-Risk Identification',
      tagline: 'Predict Which Customers Will Cancel with 82% Accuracy',
      description: 'Machine learning model analyzes 15+ subscription and engagement signals to calculate churn probability for every customer.',
      roi: 'Reduce churn by 25-40% with proactive intervention',
      benefits: [
        '82% prediction accuracy',
        'Churn score for every customer',
        'At-risk customer dashboard',
        'Automated high-risk alerts'
      ],
      features: [
        'Churn probability score (0-1)',
        'At-risk customer dashboard',
        'Automated alerts for high-risk customers',
        'Churn trend analysis',
        'Segment-specific churn rates',
        'Retention strategy recommendations',
        'Risk scoring (Low, Medium, High, Critical)'
      ],
      gradient: 'from-[#EF4444] to-[#F87171]',
      savings: '1000 customers x $50 x 10% churn = $5K lost/month. 30% reduction = $1.5K saved/month = $18K/year'
    },
    {
      id: 'subscription-upgrades',
      category: 'management',
      icon: Award,
      title: 'Subscription Upgrades & Downgrades with Proration',
      tagline: 'Let Customers Change Plans Anytime with Automatic Proration',
      description: 'Allow customers to upgrade or downgrade subscription plans mid-cycle with automatic proration calculations.',
      roi: 'Increased ARPU through frictionless upselling',
      benefits: [
        'Instant plan upgrades',
        'Immediate or end-of-cycle downgrades',
        'Automatic proration math',
        'Plan change history tracking'
      ],
      features: [
        'Upgrade to higher-tier plans instantly',
        'Downgrade options (immediate or end-of-cycle)',
        'Automatic proration calculations',
        'Credit unused time from old plan',
        'Charge prorated new plan amount',
        'Plan change history tracking',
        'Upgrade incentives (discount first month)',
        'Downgrade surveys for feedback'
      ],
      gradient: 'from-[#8B5CF6] to-[#A78BFA]',
      savings: 'Easy upselling increases revenue per customer, downgrades prevent cancellations'
    },
    {
      id: 'custom-reports',
      category: 'analytics',
      icon: BarChart3,
      title: 'Custom Report Builder',
      tagline: 'Build Any Report You Need with Drag-and-Drop Simplicity',
      description: 'Visual report builder that lets you create custom reports with any combination of metrics, filters, and visualizations.',
      roi: 'Replace expensive BI tools ($70/user/month)',
      benefits: [
        'Drag-and-drop metric selection',
        'Visual query builder (no SQL)',
        'Multiple visualization types',
        'Save and reuse reports'
      ],
      features: [
        'Drag-and-drop metric selection',
        'Visual query builder',
        'Date range selection with presets',
        'Filter by any subscription field',
        'Bar charts, line graphs, pie charts, tables',
        'Save custom reports for reuse',
        'Schedule automated report emails',
        'Export to PDF, Excel, CSV'
      ],
      gradient: 'from-[#06B6D4] to-[#22D3EE]',
      savings: '$70/month x 5 users = $350/month vs Pro. Savings: $4,200/year'
    },
    {
      id: 'webhooks',
      category: 'integrations',
      icon: Rocket,
      title: 'Webhooks & External Integrations',
      tagline: 'Connect Recurio to Your Entire Tech Stack',
      description: 'Trigger webhooks on any subscription event to integrate with Zapier, Make, Slack, CRMs, and custom apps.',
      roi: 'Eliminate manual data entry, automate entire workflow',
      benefits: [
        'Connect to 1000+ apps via Zapier',
        'Real-time system sync',
        'Total workflow automation',
        'Enterprise-grade security'
      ],
      features: [
        'Unlimited webhooks',
        'Trigger on 20+ subscription events',
        'Payload customization',
        'Retry logic for failed deliveries',
        'Webhook delivery logs and debugging',
        'HMAC signature security',
        'Pre-built templates (Zapier, Make, Slack, HubSpot)',
        'Custom app integration'
      ],
      gradient: 'from-[#F97316] to-[#FB923C]',
      savings: 'Replace Zapier costs ($20-50/month), eliminate manual data entry'
    }
];
