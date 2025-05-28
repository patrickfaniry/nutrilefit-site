// eslint.config.mjs
import pluginNext from "@next/eslint-plugin-next";

export default [
  {
    name: "next/core-web-vitals",
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs["core-web-vitals"].rules,
    },
  },
];
