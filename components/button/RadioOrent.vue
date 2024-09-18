<script lang="ts" setup>
const model = defineModel();
const emit = defineEmits(["update:modelValue", "change"]);
const internalValue = ref(model.value);
const radio = ref();
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
});

watch(internalValue, (newValue) => {
  emit("update:modelValue", newValue);
});

watch(model, (newValue) => {
  internalValue.value = newValue;
});

const handlerChange = (event: Event) => {
  emit("change", event);
};
</script>

<template>
  <div>
    <input
      ref="radio"
      type="radio"
      class="btn-check"
      :name="name"
      :id="id"
      autocomplete="off"
      :value="value"
      v-model="internalValue"
      @change="handlerChange"
    />
    <label
      class="btn btn-lg btn-outline-primary btn-outline-primary-custom w-100"
      :for="id"
    >
      <slot></slot>
    </label>
  </div>
</template>
