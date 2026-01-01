<script>
	import { page } from '$app/stores';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';

	// Base path from build config
	const BASE_PATH = '/deva-support';

	const languages = [
		{ code: 'en', name: 'English', flag: '🇺🇸' },
		{ code: 'zh-cn', name: '简体中文', flag: '🇨🇳' },
		{ code: 'zh-tw', name: '繁體中文', flag: '🇹🇼' },
		{ code: 'fr', name: 'Français', flag: '🇫🇷' },
		{ code: 'ru', name: 'Русский', flag: '🇷🇺' },
		{ code: 'es', name: 'Español', flag: '🇪🇸' },
		{ code: 'ko', name: '한국어', flag: '🇰🇷' },
		{ code: 'ja', name: '日本語', flag: '🇯🇵' },
		{ code: 'pt', name: 'Português', flag: '🇧🇷' }
	];

	let isOpen = $state(false);

	// Get current language from URL path
	let currentLang = $state('en');

	$effect(() => {
		const pathParts = $page.url.pathname.split('/').filter(Boolean);
		currentLang = pathParts[0] || 'en';
	});

	function changeLanguage(langCode) {
		window.location.href = `${BASE_PATH}/${langCode}`;
	}

	function getCurrentLanguage() {
		return languages.find((l) => l.code === currentLang) || languages[0];
	}
</script>

<div class="relative">
	<button
		onclick={() => (isOpen = !isOpen)}
		class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700"
		aria-label="Change language"
	>
		<span class="text-xl">{getCurrentLanguage().flag}</span>
		<span class="text-sm font-medium text-slate-700 dark:text-slate-300 hidden sm:inline"
			>{getCurrentLanguage().name}</span
		>
		<svg
			class="w-4 h-4 text-slate-500 transition-transform {isOpen ? 'rotate-180' : ''}"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	</button>

	{#if isOpen}
		<div
			class="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 z-50 overflow-hidden"
			transition:fly={{ y: -10, duration: 200 }}
			onclick_outside={() => (isOpen = false)}
		>
			<div class="py-2 max-h-96 overflow-y-auto">
				{#each languages as lang (lang.code)}
					<button
						onclick={() => changeLanguage(lang.code)}
						class="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors {currentLang === lang.code
							? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
							: 'text-slate-700 dark:text-slate-300'}"
						animate:flip
					>
						<span class="text-2xl">{lang.flag}</span>
						<span class="font-medium">{lang.name}</span>
						{#if currentLang === lang.code}
							<svg class="w-5 h-5 ml-auto" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						{/if}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>
