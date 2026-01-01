<script>
	import { browser } from '$app/environment';

	// Base path from build config
	const BASE_PATH = '/deva-support';

	// Redirect to browser language or default to English
	if (browser) {
		const browserLang = navigator.language || navigator.userLanguage;
		const langMap = {
			en: 'en',
			'zh-CN': 'zh-cn',
			'zh-TW': 'zh-tw',
			fr: 'fr',
			ru: 'ru',
			es: 'es',
			ko: 'ko',
			ja: 'ja',
			pt: 'pt'
		};

		const baseLang = browserLang.split('-')[0];
		let targetLang = 'en';

		if (langMap[browserLang]) {
			targetLang = langMap[browserLang];
		} else if (Object.values(langMap).includes(baseLang)) {
			targetLang = baseLang;
		}

		window.location.href = `${BASE_PATH}/${targetLang}`;
	}
</script>

<p>Redirecting...</p>
