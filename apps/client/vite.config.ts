import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	envDir: "/app",
	server: {
		port: 3000,
		host: "0.0.0.0",
	},
	plugins: [
		vue(),

		AutoImport({
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/,
				/\.vue\?vue/, // .vue
				/\.md$/, // .md
			],

			dts: "./src/types/auto-imports.d.ts",

			dirs: ["./src/util"],

			imports: ["vue", "vue-router"],
		}),
	],
});
