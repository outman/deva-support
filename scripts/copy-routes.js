import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const buildDir = 'build';
const languages = ['en', 'zh-cn', 'zh-tw', 'ja', 'ko', 'fr', 'ru', 'es', 'pt'];
const additionalRoutes = ['privacy'];

// Create language route directories and copy index.html
languages.forEach(lang => {
	const langDir = join(buildDir, lang);

	// Create directory if it doesn't exist
	if (!existsSync(langDir)) {
		mkdirSync(langDir, { recursive: true });
	}

	// Copy index.html to the language directory
	const sourceIndex = join(buildDir, 'index.html');
	const targetIndex = join(langDir, 'index.html');
	copyFileSync(sourceIndex, targetIndex);

	console.log(`Created route: /${lang}`);
});

// Create additional route directories and copy index.html
additionalRoutes.forEach(route => {
	const routeDir = join(buildDir, route);

	// Create directory if it doesn't exist
	if (!existsSync(routeDir)) {
		mkdirSync(routeDir, { recursive: true });
	}

	// Copy index.html to the route directory
	const sourceIndex = join(buildDir, 'index.html');
	const targetIndex = join(routeDir, 'index.html');
	copyFileSync(sourceIndex, targetIndex);

	console.log(`Created route: /${route}`);
});

console.log('All routes created successfully!');
