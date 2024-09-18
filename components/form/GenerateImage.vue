<script lang="ts" setup>
import { useGenerateImgStore } from "@/stores/generateImg.ts";
const { sizeList, colorList } = useGenerateImgStore();
const form = reactive({
  size: "vertical",
});

const colorNewList = ref([]);

const getColorList = computed(() => {
  return colorNewList.value;
});

onBeforeMount(() => {
  formatData();
});

const formatData = () => {
  const lucky = colorList.filter((item) => item.type === "มงคล");
  const badluck = colorList.filter((item) => item.type === "กาลกิณี");
  const notype = colorList.filter((item) => item.type === "");
  const merge = lucky.concat(notype, badluck);
  colorNewList.value = merge;
};
</script>
<template>
  <form>
    <LayoutContainerGeneral>
      <div class="d-flex flex-column gap-2">
        <TextTitleGeneral> ขนาด </TextTitleGeneral>
        <div class="row g-0 gap-2 text-center">
          <template v-for="(item, index) in sizeList">
            <div class="col">
              <ButtonRadioOrent
                :id="item.name"
                name="sizeImg"
                v-model="form.size"
                :value="item.default"
              >
                <font-awesome-icon
                  :icon="item.icon"
                  class="align-middle text-primary"
                />
                <span class="ms-2">{{ item.title }}</span>
              </ButtonRadioOrent>
            </div>
          </template>
        </div>
      </div>
      <div class="d-flex flex-column gap-2">
        <TextTitleGeneral> โทนสี </TextTitleGeneral>
        <div class="row row-cols-lg-6 gap-3 g-0">
          <template v-for="(item, index) in getColorList">
            <div class="col text-start text-lg-center">
              <ButtonCheckboxColor v-bind="item"></ButtonCheckboxColor>
            </div>
          </template>
        </div>
      </div>
    </LayoutContainerGeneral>
  </form>
</template>

<style></style>
