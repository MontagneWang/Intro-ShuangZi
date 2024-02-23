import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // viteCompression({
    //   algorithm: "gzip",
    //   threshold: 102400,
    //   deleteOriginFile: true,
    // }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/global.scss';`,
      },
    },
  },
});
