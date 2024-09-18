<script lang="ts" setup>
defineProps({
  title: {
    default: "",
    type: String,
  },
});
</script>

<template>
  <button type="button" class="btn btn-outline-primary">
    <slot></slot>
  </button>
</template>

<style></style>
