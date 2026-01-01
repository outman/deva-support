<script>
	import { base } from '$app/paths';

	const logo = `${base}/logo.png`;
</script>

<svelte:head>
	<title>Privacy Policy - Devak</title>
	<meta name="description" content="Devak Privacy Policy - Your privacy matters to us. Learn how we protect your data and ensure your information stays secure." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
	<!-- Header Section -->
	<section class="relative overflow-hidden bg-white dark:bg-slate-900 shadow-sm">
		<div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
		<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
			<!-- Logo -->
			<div class="mb-8 flex justify-center">
				<img
					src={logo}
					alt="Devak Logo"
					class="w-20 h-20 rounded-2xl shadow-xl"
				/>
			</div>

			<h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Privacy Policy</h1>
			<p class="text-xl text-slate-600 dark:text-slate-300 mb-4 max-w-3xl mx-auto">
				Your privacy matters to us. Learn how we protect your data and ensure your information stays secure.
			</p>
			<p class="text-base text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">
				Last updated: Jan 1, 2026
			</p>
		</div>
	</section>

	<!-- Content Section -->
	<main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
		<div class="prose prose-lg dark:prose-invert max-w-none">
			<p class="text-lg text-slate-600 dark:text-slate-300 mb-8">
				We understand that privacy is a fundamental right, and we have designed our application with your privacy as a top priority. This privacy policy explains how we handle your data and what you can expect when using Devak.
			</p>

			<!-- No Data Collection -->
			<section class="mb-12">
				<h2 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
					<span class="text-3xl">🔒</span>
					No Data Collection
				</h2>
				<div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
					<p class="text-slate-600 dark:text-slate-300 mb-4">
						Devak operates entirely on your local device. We do not collect, store, or transmit any personal information, usage data, or analytics. Specifically:
					</p>
					<ul class="space-y-3 text-slate-600 dark:text-slate-300">
						<li class="flex items-start gap-3">
							<span class="text-blue-500 font-bold">•</span>
							<span>No personal information is collected or stored</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-blue-500 font-bold">•</span>
							<span>No usage analytics or tracking data is gathered</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-blue-500 font-bold">•</span>
							<span>No application logs or diagnostic information is transmitted</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-blue-500 font-bold">•</span>
							<span>No user preferences or settings are sent to external servers</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-blue-500 font-bold">•</span>
							<span>All application data remains on your local machine</span>
						</li>
					</ul>
					<p class="text-slate-600 dark:text-slate-300 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
						Everything you do with Devak stays on your device. We have no servers, no databases, and no way to access your information even if we wanted to.
					</p>
				</div>
			</section>

			<!-- No Data Sharing -->
			<section class="mb-12">
				<h2 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
					<span class="text-3xl">🛡️</span>
					No Data Sharing
				</h2>
				<div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
					<p class="text-slate-600 dark:text-slate-300 mb-4">
						Since we do not collect any data, there is nothing to share. Devak does not:
					</p>
					<ul class="space-y-3 text-slate-600 dark:text-slate-300">
						<li class="flex items-start gap-3">
							<span class="text-green-500 font-bold">•</span>
							<span>Share data with third parties</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-green-500 font-bold">•</span>
							<span>Sell user information to advertisers or data brokers</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-green-500 font-bold">•</span>
							<span>Use third-party analytics services</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-green-500 font-bold">•</span>
							<span>Integrate with advertising networks</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-green-500 font-bold">•</span>
							<span>Participate in any data sharing agreements</span>
						</li>
					</ul>
					<p class="text-slate-600 dark:text-slate-300 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
						Your privacy is protected by design. There is no data pipeline, no network requests, and no external communication beyond what is necessary for the application to function on your Mac.
					</p>
				</div>
			</section>

			<!-- Legal Compliance -->
			<section class="mb-12">
				<h2 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
					<span class="text-3xl">⚖️</span>
					Legal Compliance
				</h2>
				<div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
					<p class="text-slate-600 dark:text-slate-300 mb-6">
						Devak is designed to comply with major privacy regulations, including:
					</p>
					<div class="space-y-6">
						<div class="border-l-4 border-blue-500 pl-4">
							<h3 class="font-bold text-slate-900 dark:text-white text-lg mb-2">GDPR (General Data Protection Regulation)</h3>
							<p class="text-slate-600 dark:text-slate-300">
								As we do not collect or process personal data, Devak naturally complies with GDPR requirements.
							</p>
						</div>
						<div class="border-l-4 border-purple-500 pl-4">
							<h3 class="font-bold text-slate-900 dark:text-white text-lg mb-2">CCPA (California Consumer Privacy Act)</h3>
							<p class="text-slate-600 dark:text-slate-300">
								Since no personal information is collected, there is no data to disclose, delete, or opt-out of.
							</p>
						</div>
						<div class="border-l-4 border-green-500 pl-4">
							<h3 class="font-bold text-slate-900 dark:text-white text-lg mb-2">PIPEDA (Personal Information Protection and Electronic Documents Act)</h3>
							<p class="text-slate-600 dark:text-slate-300">
								Our zero-data-collection approach ensures compliance with Canadian privacy laws.
							</p>
						</div>
					</div>
					<p class="text-slate-600 dark:text-slate-300 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
						If you have any questions about our compliance with specific privacy regulations, please feel free to contact us using the information provided below.
					</p>
				</div>
			</section>

			<!-- Contact Information -->
			<section class="mb-12">
				<h2 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
					<span class="text-3xl">📧</span>
					Contact Information
				</h2>
				<div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
					<p class="text-slate-600 dark:text-slate-300 mb-4">
						If you have any questions, concerns, or requests regarding this privacy policy or how Devak handles your information, please contact us:
					</p>
					<div class="bg-slate-50 dark:bg-slate-700 rounded-xl p-6">
						<p class="text-slate-900 dark:text-white font-medium mb-2">Email:</p>
						<a
							href="mailto:pochonlee@gmail.com"
							class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-lg transition-colors"
						>
							pochonlee@gmail.com
						</a>
					</div>
					<p class="text-slate-600 dark:text-slate-300 mt-6">
						We will respond to your inquiries as soon as possible, typically within 48 hours.
					</p>
				</div>
			</section>
		</div>
	</main>

	<!-- Footer -->
	<footer class="bg-slate-900 text-slate-400 py-12 mt-20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<p class="text-lg mb-4">Devak - Secure, Offline, Under Your Control</p>
			<p class="text-sm mb-4">Making development work more efficient and convenient</p>
			<div class="flex justify-center gap-6 text-sm">
				<a href="/" class="text-blue-400 hover:text-blue-300 transition-colors">Home</a>
				<span class="text-slate-600">|</span>
				<a href="/privacy" class="text-blue-400 hover:text-blue-300 transition-colors">Privacy Policy</a>
			</div>
		</div>
	</footer>
</div>
