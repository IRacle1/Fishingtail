<script setup lang="ts">
import { useData } from 'vitepress'
import { VPTeamMembers } from 'vitepress/theme-without-fonts'
import authors from '/authors.json'

const { lang, theme } = useData()
const validAuthors = 
</script>

<template>
  <div class="DocsAuthors">
    <h1 class="title">Команда</h1>
    <VPTeamMembers size="small" :members="authors" />
  </div>
</template>

<style scoped>
.DocsAuthors {
  padding: 20px 24px 0;
  text-align: center;
}

.title {
  letter-spacing: -0.4px;
  font-size: 18px;
  font-weight: 700;
  white-space: pre-wrap;
  margin-bottom: 20px;
}

@media (min-width: 640px) {
  .DocsAuthors {
    padding-top: 40px;
  }

  .title {
    font-size: 24px;
    margin-bottom: 40px;
  }
}

@media (min-width: 960px) {
  .DocsAuthors {
    padding-top: 60px;
  }

  .title {
    font-size: 32px;
    margin-bottom: 60px;
  }
}

@media (min-width: 1200px) {
  .DocsAuthors {
    padding-inline: 0;
  }
}
</style>