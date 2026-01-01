<script>
	import { base } from '$app/paths';

	const logo = `${base}/logo.png`;

	const features = [
		{
			id: 'https-capture',
			icon: '🔒',
			title: 'Captura de Requisições HTTP/HTTPS',
			video: 'https_capture.mp4',
			screenshots: [
				{
					image: 'https_capture_1.png',
					items: [
						'Botão de configurações de certificado de captura de tráfego',
						'Ouvir no endereço e porta locais',
						'Botão iniciar escuta',
						'Filtrar por URL',
						'Limpar todos os registros'
					]
				},
				{
					image: 'https_capture_2.png',
					items: []
				},
				{
					image: 'https_capture_3.png',
					items: [
						'Copiar conteúdo do certificado, pode salvar manualmente como arquivo PEM',
						'Salvar conteúdo do certificado, salvar em arquivo PEM local',
						'Iniciar serviço HTTP, acessar URL via LAN para baixar certificado (deve estar na mesma LAN), dispositivos iOS baixarão arquivo mobileconfig, outros dispositivos baixarão arquivo PEM'
					]
				},
				{
					image: 'https_capture_4.png',
					items: [
						'Conexão LAN, acesso para baixar certificado',
						'Escanear QR code para baixar certificado no celular (LAN)'
					]
				}
			]
		},
		{
			id: 'http-client',
			icon: '🌐',
			title: 'Requisição HTTP e Gestão API',
			screenshots: [
				{
					image: 'http_client_1.png',
					items: [
						'Criar pasta de nível superior',
						'Criar item de requisição',
						'Criar subpasta',
						'Modificar pasta',
						'Excluir item'
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
			title: 'Formatação JSON',
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
			title: 'Geração e Leitura de QR Code',
			screenshots: [
				{
					image: 'qrcode_1.png',
					items: []
				},
				{
					image: 'qrcode_2.png',
					items: ['Copiar da área de transferência']
				}
			]
		},
		{
			id: 'image',
			icon: '🖼️',
			title: 'Compressão de Imagens',
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
			title: 'Conversão de Formato de Tempo',
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
	<title>Devak - Coleção de Ferramentas de Desenvolvimento</title>
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
				Seus dados nunca deixam sua máquina. Mantenha seu código sensível, chaves e projetos seguros — offline e sob seu controle.
			</p>
			<div class="mt-10 flex justify-center gap-4">
				<a
					href="#features"
					class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/30"
				>
					Explorar Funcionalidades
				</a>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<main id="features" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
		<h2 class="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
			Funcionalidades do Aplicativo
		</h2>
		<p class="text-center text-slate-600 dark:text-slate-400 mb-12 text-lg">
			Ferramentas de desenvolvimento poderosas e práticas para aumentar sua produtividade
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
			<p class="text-lg mb-4">Devak - Seguro, Offline, Sob Seu Controle</p>
			<p class="text-sm">Tornando o desenvolvimento mais eficiente e conveniente</p>
		</div>
	</footer>
</div>
