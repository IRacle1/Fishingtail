<script setup lang="ts">

const props = defineProps({
  text: String,
  color: String,
});

</script>

<template>
  <span :style="'color: ' + color">{{ text }}</span>
</template>
