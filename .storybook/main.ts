import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import { fileURLToPath } from "url";
import { mergeConfig, type UserConfig } from "vite";

const storybookDir = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  staticDirs: ["../public"],
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [{
    name: "@storybook/addon-docs",
    options: {
      mdxPluginOptions: {
        mdxCompileOptions: {
          providerImportSource: "@storybook/addon-docs/mdx-react-shim",
        },
      },
    },
  }, "@storybook/addon-a11y", "@storybook/addon-vitest"],
  async viteFinal(config: UserConfig) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@": path.resolve(storybookDir, "../src"),
        },
      },
    });
  },
};

export default config;
