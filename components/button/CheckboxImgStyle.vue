<script setup lang="ts">
defineProps({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  value: {
    default: "",
    type: [String, Number],
  },
  img_path: {
    default: "",
    type: String,
  },
});
</script>
<template>
  <div>
    <input :id="id" type="checkbox" class="btn-check-custom" />
    <label :for="id" class="btn btn-style p-0 rounded position-relative">
      <div class="position-absolute bottom-0 w-100 p-1">
        <div class="title text-center rounded">
          <slot></slot>
        </div>
      </div>
      <div
        class="icon-checked position-absolute top-50 start-50 translate-middle"
      >
        <font-awesome-icon
          icon="fa-solid fa-circle-check"
          class="text-primary"
        />
      </div>
      <img :src="img_path" :alt="name" class="img-fluid rounded img-preview" />
    </label>
  </div>
</template>
<style scoped lang="scss">
.btn-style {
  overflow: hidden;
  height: 160px;
  width: 100%;
}
.img-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.title {
  color: var(--bs-dark);
  background-color: rgba(var(--bs-white-rgb), 0.9);
  width: 100%;
}

.btn-check-custom {
  &:not(:checked) {
    + .btn-style {
      border-color: transparent;
      .icon-checked {
        opacity: 0;
      }
    }
  }
  &:checked {
    + .btn-style {
      border-color: var(--bs-primary) !important;
      .title {
        background-color: rgba(var(--bs-primary-rgb), 0.9);
      }
      .icon-checked {
        opacity: 1;
      }
    }
  }
}
</style>
