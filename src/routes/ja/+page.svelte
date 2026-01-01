<script>
	import { base } from '$app/paths';

	const logo = `${base}/logo.png`;

	const features = [
		{
			id: 'https-capture',
			icon: '🔒',
			title: 'HTTP/HTTPSリクエストキャプチャ',
			video: 'https_capture.mp4',
			screenshots: [
				{
					image: 'https_capture_1.png',
					items: [
						'トラフィック証明書設定ボタン',
						'ローカルアドレスとポートでリッスン',
						'リッスン開始ボタン',
						'URLでフィルタリング',
						'すべての記録をクリア'
					]
				},
				{
					image: 'https_capture_2.png',
					items: []
				},
				{
					image: 'https_capture_3.png',
					items: [
						'証明書の内容をコピー、手動で pem ファイルとして保存可能',
						'証明書の内容を保存、ローカル pem ファイルに保存',
						'HTTP サービスを開始、LAN 経由で URL にアクセスして証明書をダウンロード（同じ LAN 内にある必要があります）、iOS デバイスは mobileconfig ファイルをダウンロード、その他のデバイスは pem ファイルをダウンロード'
					]
				},
				{
					image: 'https_capture_4.png',
					items: [
						'LAN 接続、証明書へのアクセスとダウンロード',
						'QR コードをスキャンして携帯電話に証明書をダウンロード（LAN）'
					]
				}
			]
		},
		{
			id: 'http-client',
			icon: '🌐',
			title: 'HTTP リクエストと API 管理',
			screenshots: [
				{
					image: 'http_client_1.png',
					items: [
						'トップレベルフォルダを作成',
						'リクエストアイテムを作成',
						'サブグループフォルダを作成',
						'フォルダを変更',
						'アイテムを削除'
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
			title: 'JSON フォーマット',
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
			title: 'QR コード生成・読み取り',
			screenshots: [
				{
					image: 'qrcode_1.png',
					items: []
				},
				{
					image: 'qrcode_2.png',
					items: ['クリップボードからコピー']
				}
			]
		},
		{
			id: 'image',
			icon: '🖼️',
			title: '画像圧縮',
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
			title: '時間フォーマット変換',
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
	<title>Devak - 開発ツールコレクション</title>
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
				あなたのデータはあなたのマシンから離れることはありません。機密コード、キー、プロジェクトを安全に保つ — オフラインであなたの管理下で。
			</p>
			<div class="mt-10 flex justify-center gap-4">
				<a
					href="#features"
					class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/30"
				>
					機能を見る
				</a>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<main id="features" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
		<h2 class="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
			アプリケーション機能
		</h2>
		<p class="text-center text-slate-600 dark:text-slate-400 mb-12 text-lg">
			生産性を向上させる強力で実用的な開発ツール
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
									class="w-full h-auto border-b border-slate-200 dark:border-slate-700"
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
			<p class="text-lg mb-4">Devak - 安全、オフライン、あなたの管理下</p>
			<p class="text-sm">開発作業をより効率的で便利に</p>
		</div>
	</footer>
</div>
