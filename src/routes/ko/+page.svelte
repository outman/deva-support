<script>
	import { base } from '$app/paths';

	const logo = `${base}/logo.png`;

	const features = [
		{
			id: 'https-capture',
			icon: '🔒',
			title: 'HTTP/HTTPS 요청 캡처',
			screenshots: [
				{
					image: 'https_capture_1.png',
					items: [
						'트래픽 인증서 설정 버튼',
						'로컬 주소 및 포트 수신 대기',
						'수신 대기 시작 버튼',
						'URL로 필터링',
						'모든 기록 지우기'
					]
				},
				{
					image: 'https_capture_2.png',
					items: []
				},
				{
					image: 'https_capture_3.png',
					items: [
						'인증서 내용 복사, 수동으로 pem 파일로 저장 가능',
						'인증서 내용 저장, 로컬 pem 파일로 저장',
						'HTTP 서비스 시작, LAN을 통해 URL에 액세스하여 인증서 다운로드 (동일 LAN 내에 있어야 함), iOS 기기는 mobileconfig 파일 다운로드, 기타 기기는 pem 파일 다운로드'
					]
				},
				{
					image: 'https_capture_4.png',
					items: [
						'LAN 연결, 인증서 액세스 및 다운로드',
						'QR 코드를 스캔하여 모바일에 인증서 다운로드 (LAN)'
					]
				}
			]
		},
		{
			id: 'http-client',
			icon: '🌐',
			title: 'HTTP 요청 및 API 관리',
			screenshots: [
				{
					image: 'http_client_1.png',
					items: [
						'최상위 폴더 생성',
						'요청 항목 생성',
						'하위 그룹 폴더 생성',
						'폴더 수정',
						'항목 삭제'
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
			title: 'JSON 형식화',
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
			title: 'QR 코드 생성 및 읽기',
			screenshots: [
				{
					image: 'qrcode_1.png',
					items: []
				},
				{
					image: 'qrcode_2.png',
					items: ['클립보드에서 복사']
				}
			]
		},
		{
			id: 'image',
			icon: '🖼️',
			title: '이미지 압축',
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
			title: '시간 형식 변환',
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
	<title>Devak - 개발자 도구 모음</title>
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
				데이터는 사용자의 머신을 떠나지 않습니다. 민감한 코드, 키, 프로젝트를 안전하게 보호하세요 — 오프라인으로 사용자의 통제 하에.
			</p>
			<div class="mt-10 flex justify-center gap-4">
				<a
					href="#features"
					class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/30"
				>
					기능 살펴보기
				</a>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<main id="features" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
		<h2 class="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
			애플리케이션 기능
		</h2>
		<p class="text-center text-slate-600 dark:text-slate-400 mb-12 text-lg">
			생산성을 높여주는 강력하고 실용적인 개발 도구
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
			<p class="text-lg mb-4">Devak - 안전, 오프라인, 사용자 통제</p>
			<p class="text-sm">개발 작업을 더 효율적이고 편리하게</p>
		</div>
	</footer>
</div>
