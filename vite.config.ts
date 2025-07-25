// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [react()],
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	server: {
		port: 4004,
	},
});

// export default defineConfig({
// 	plugins: [react()],
// 	server: {
// 		proxy: {
// 			'/product': 'http://localhost:3003',
// 		},
// 	},
// });
