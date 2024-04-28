<script setup lang="ts">
import DefaultTheme from 'vitepress/theme-without-fonts'

import DocsAuthors from './DocsAuthors.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-bottom>
      <DocsAuthors />
    </template>
  </Layout>
</template>