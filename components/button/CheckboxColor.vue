<script setup>
const model = defineModel();
const emit = defineEmits(["update:modelValue", "change"]);

const props = defineProps({
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
  color: {
    default: "#000",
    type: String,
  },
  borderColor: {
    default: "",
    type: String,
  },
  type: {
    default: "",
    type: String,
  },
});

const add_more_style = reactive({
  background: "",
  borderColor: "",
});

onMounted(() => {
  addMoreStyle();
});

const moreStyle = computed(() => {
  return add_more_style;
});

const addMoreStyle = () => {
  add_more_style.background = props.color;
  if (props.borderColor) add_more_style.borderColor = props.borderColor;
};
</script>
<template>
  <div>
    <input
      :name="name"
      :id="id"
      type="checkbox"
      class="btn-check-custom"
      :true-value="value"
      false-value=""
    />
    <label :for="id" class="btn btn-color" :style="moreStyle">
      <div class="icon-checked">
        <font-awesome-icon icon="fa-solid fa-check" class="text-white" />
      </div>
      <div class="color-name-type">{{ type }}</div>
    </label>
  </div>
</template>

<style scoped lang="scss">
.btn {
  &.btn-color {
    position: relative;
    border-width: 2px;
    border-color: var(--bs-primary);
    border-style: solid;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    .icon-checked {
      font-size: 12px;
      background-color: var(--bs-primary);
      width: 16px;
      height: 16px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: opacity 0.1s;
      z-index: 100;
    }
    .color-name-type {
      font-size: 0.75rem;
      font-weight: 300;
      color: var(--bs-white);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

.btn-check-custom {
  &:not(:checked) {
    + .btn-color {
      border-color: transparent;
      .icon-checked {
        opacity: 0;
      }
    }
  }
  &:checked {
    + .btn-color {
      border-color: var(--bs-primary) !important;
      .icon-checked {
        opacity: 1;
      }
    }
  }
}
</style>
