<script>
	import { base } from '$app/paths';

	const logo = `${base}/logo.png`;

	const features = [
		{
			id: 'https-capture',
			icon: '🔒',
			title: '擷取 HTTP/HTTPS 請求',
			video: 'https_capture.mp4',
			screenshots: [
				{
					image: 'https_capture_1.png',
					items: [
						'capture 流量證書設置按鈕',
						'監聽本機地址和端口',
						'啟動監聽按鈕',
						'根據 url 過濾',
						'清空所有記錄'
					]
				},
				{
					image: 'https_capture_2.png',
					items: []
				},
				{
					image: 'https_capture_3.png',
					items: [
						'Copy 證書內容，可以將內容手動保存為 pem 檔案',
						'Save 證書內容，保存到本機 pem 檔案',
						'開啟 http 服務，通過局域網訪問 URL 下載證書（需要在同一個局域網內），iOS 手機會下載 mobilecofig 檔案，其他設備下載 pem 檔案。'
					]
				},
				{
					image: 'https_capture_4.png',
					items: [
						'局域網連接，訪問下載證書',
						'掃描二維碼下載證書到手機（局域網）'
					]
				}
			]
		},
		{
			id: 'iphone-install',
			icon: '📱',
			title: 'iPhone Mobileconfig 安裝',
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
			title: 'HTTP 請求和 API 管理',
			screenshots: [
				{
					image: 'http_client_1.png',
					items: [
						'創建 Top Level Folder',
						'創建 Request item',
						'創建 Sub group folder',
						'Modify Folder',
						'Delete item'
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
			title: 'JSON 格式化',
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
			title: '二維碼生成和讀取',
			screenshots: [
				{
					image: 'qrcode_1.png',
					items: []
				},
				{
					image: 'qrcode_2.png',
					items: ['Copy from clipboard']
				}
			]
		},
		{
			id: 'image',
			icon: '🖼️',
			title: '圖片壓縮',
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
			title: '時間格式轉換',
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
	<title>Devak - 開發工具集合</title>
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
				你的數據永遠不會離開你的機器。保持敏感代碼、密鑰和項目的安全——離線並在你的控制之下。
			</p>
			<div class="mt-10 flex justify-center gap-4">
				<a
					href="#features"
					class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/30"
				>
					探索功能
				</a>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<main id="features" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
		<h2 class="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
			應用功能
		</h2>
		<p class="text-center text-slate-600 dark:text-slate-400 mb-12 text-lg">
			強大而實用的開發工具，提升你的工作效率
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
			<p class="text-lg mb-4">Devak - 安全、離線、由你掌控</p>
			<p class="text-sm mb-4">讓開發工作更高效、更便捷</p>
			<p class="text-sm">
				聯絡我們:
				<a href="mailto:pochonlee@gmail.com" class="text-blue-400 hover:text-blue-300 transition-colors"
					>pochonlee@gmail.com</a
				>
			</p>
		</div>
	</footer>
</div>
