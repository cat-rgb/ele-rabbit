import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import electron from "vite-plugin-electron";
import electronRender from "vite-plugin-electron-renderer";
import AutoImport from "unplugin-auto-import";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log(command, mode);
  return {
    plugins: [
      // AutoImport({
      //   imports: ["vue", "vue-router"],
      //   dts: "src/auto-imports.d.ts", // 如果需要类型声明
      // }),
      vue(),
      electron({
        entry: "electron/main.ts",
      }),
      electronRender(),
    ],
    server: {
      hmr: {
        host: "localhost", // 确保 HMR 可以在 Electron 中工作
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      extensions: [".js", ".ts", ".vue"],
    },
  };
});
