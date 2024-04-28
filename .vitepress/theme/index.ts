import DefaultTheme from "vitepress/theme";
import type { Theme } from 'vitepress'
import "./custom.css";
import DocsLayout from "./components/DocsLayout.vue";

export default {
  extends: DefaultTheme,
  //Layout: DocsLayout,
} satisfies Theme
