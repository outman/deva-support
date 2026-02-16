<script>
	import { base } from '$app/paths';

	const logo = `${base}/logo.png`;

	const features = [
		{
			id: 'https-capture',
			icon: '🔒',
			title: 'Перехват HTTP/HTTPS Запросов',
			video: 'https_capture.mp4',
			screenshots: [
				{
					image: 'https_capture_1.png',
					items: [
						'Кнопка настроек сертификата перехвата трафика',
						'Прослушивать локальный адрес и порт',
						'Кнопка запуска прослушивания',
						'Фильтровать по URL',
						'Очистить все записи'
					]
				},
				{
					image: 'https_capture_2.png',
					items: []
				},
				{
					image: 'https_capture_3.png',
					items: [
						'Копировать содержимое сертификата, можно вручную сохранить как PEM файл',
						'Сохранить содержимое сертификата, сохранить в локальный PEM файл',
						'Запустить HTTP сервис, получить доступ к URL через LAN для загрузки сертификата (должен быть в той же LAN), устройства iOS загрузят mobileconfig файл, другие устройства загрузят PEM файл'
					]
				},
				{
					image: 'https_capture_4.png',
					items: [
						'LAN подключение, доступ для загрузки сертификата',
						'Сканировать QR код для загрузки сертификата на мобильный (LAN)'
					]
				}
			]
		},
		{
			id: 'iphone-install',
			icon: '📱',
			title: 'Установка iPhone Mobileconfig',
			screenshots: [
				{
					image: 'iphone_1@1x.png',
					items: [],
					padding: true
				},
				{
					image: 'iphone_2@1x.png',
					items: [],
					padding: true
				},
				{
					image: 'iphone_3@1x.png',
					items: [],
					padding: true
				},
				{
					image: 'iphone_4@1x.png',
					items: [],
					padding: true
				}
			]
		},
		{
			id: 'http-client',
			icon: '🌐',
			title: 'HTTP Запрос и Управление API',
			screenshots: [
				{
					image: 'http_client_1.png',
					items: [
						'Создать папку верхнего уровня',
						'Создать элемент запроса',
						'Создать подпапку',
						'Изменить папку',
						'Удалить элемент'
					]
				},
				{
					image: 'http_client_2.png',
					items: []
				}
			]
		},
		{
			id: 'json',
			icon: '{}',
			title: 'Форматирование JSON',
			screenshots: [
				{
					image: 'json_1.png',
					items: []
				}
			]
		},
		{
			id: 'qrcode',
			icon: '📱',
			title: 'Генерация и Чтение QR-кода',
			screenshots: [
				{
					image: 'qrcode_1.png',
					items: []
				},
				{
					image: 'qrcode_2.png',
					items: ['Копировать из буфера обмена']
				}
			]
		},
		{
			id: 'image',
			icon: '🖼️',
			title: 'Сжатие Изображений',
			screenshots: [
				{
					image: 'image_compress_1.png',
					items: []
				}
			]
		},
		{
			id: 'time',
			icon: '⏰',
			title: 'Конвертация Формата Времени',
			screenshots: [
				{
					image: 'time_1.png',
					items: []
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Devak - Коллекция Инструментов Разработчика</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
	<!-- Hero Section -->
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

			<h1 class="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Devak</h1>
			<p class="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 max-w-3xl mx-auto">
				Ваши данные никогда не покидают вашу машину. Держите чувствительный код, ключи и проекты в безопасности — офлайн и под вашим контролем.
			</p>
			<div class="mt-10 flex justify-center gap-4">
				<a
					href="https://apps.apple.com/us/app/devak/id6757244261?mt=12"
					target="_blank"
					rel="noopener"
					class="px-8 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-medium rounded-lg transition-colors shadow-lg flex items-center gap-2"
				>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
						<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
					</svg>
					Скачать
				</a>
				<a
					href="#features"
					class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/30"
				>
					Изучить Функции
				</a>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<main id="features" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
		<h2 class="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
			Функции Приложения
		</h2>
		<p class="text-center text-slate-600 dark:text-slate-400 mb-12 text-lg">
			Мощные и практичные инструменты разработки для повышения вашей продуктивности
		</p>

		<div class="space-y-20">
			{#each features as feature}
				<section id={feature.id} class="scroll-mt-20">
					<div class="flex items-center gap-4 mb-8">
						<div class="text-4xl">{feature.icon}</div>
						<h3 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
							{feature.title}
						</h3>
					</div>

					<!-- Video -->
					{#if feature.video}
						<div class="mb-6 rounded-2xl overflow-hidden shadow-xl">
							<video
								src="{base}/{feature.video}"
								controls
								class="w-full"
								autoplay
								muted
								loop
							></video>
						</div>
					{/if}

					<div class="space-y-6">
						{#each feature.screenshots as screenshot}
							<div
								class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
							>
								<img
									src="{base}/{screenshot.image}"
									alt="{feature.title}"
									class="w-full h-auto {screenshot.padding ? 'p-4' : 'border-b border-slate-200 dark:border-slate-700'}"
								/>
								{#if screenshot.items.length > 0}
									<div class="p-6">
										<ol class="space-y-3">
											{#each screenshot.items as item, index}
												<li class="flex items-start gap-3 text-slate-600 dark:text-slate-300">
													<span
														class="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold"
													>
														{index + 1}
													</span>
													<span class="pt-0.5">{item}</span>
												</li>
											{/each}
										</ol>
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</section>
			{/each}
		</div>
	</main>

	<!-- Footer -->
	<footer class="bg-slate-900 text-slate-400 py-12 mt-20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<p class="text-lg mb-4">Devak - Безопасно, Офлайн, Под Вашим Контролем</p>
			<p class="text-sm mb-4">Делать разработку более эффективной и удобной</p>
			<p class="text-sm">
				Контакты:
				<a href="mailto:pochonlee@gmail.com" class="text-blue-400 hover:text-blue-300 transition-colors"
					>pochonlee@gmail.com</a
				>
			</p>
		</div>
	</footer>
</div>
