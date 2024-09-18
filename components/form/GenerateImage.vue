<script lang="ts" setup>
import { useGenerateImgStore } from "@/stores/generateImg";

const generateStore = useGenerateImgStore();

const form = reactive({
  size: "vertical",
});

const current_page = ref(1);
const per_page = ref(9);
const colorNewList = ref<any>([]);

const getColorList = computed(() => {
  return colorNewList.value;
});

watch(generateStore.getImgstylePageList, (newValue) => {
  console.log(newValue);
});

generateStore.imgPagination(current_page.value, per_page.value);

onMounted(() => {
  formatData();
});

const formatData = () => {
  const lucky = generateStore.colorList.filter((item) => item.type === "มงคล");
  const badluck = generateStore.colorList.filter(
    (item) => item.type === "กาลกิณี"
  );
  const notype = generateStore.colorList.filter((item) => item.type === "");
  const merge = lucky.concat(notype, badluck);
  colorNewList.value = merge;
};

const onClickMore = () => {
  per_page.value = per_page.value + 3;
  generateStore.imgPagination(current_page.value, per_page.value);
};
</script>
<template>
  <form>
    <LayoutContainerGeneral>
      <div class="d-flex flex-column gap-2">
        <TextTitleGeneral> ขนาด </TextTitleGeneral>
        <div class="row g-0 gap-2 text-center">
          <template v-for="(item, index) in generateStore.sizeList">
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
          <template v-for="(item, index) in getColorList" :key="index">
            <div class="col text-start text-lg-center">
              <ButtonCheckboxColor v-bind="item"></ButtonCheckboxColor>
            </div>
          </template>
        </div>
      </div>
      <div class="d-flex flex-column gap-2">
        <TextTitleGeneral> สไตล์ภาพ </TextTitleGeneral>
        <div class="row row-cols-3 row-cols-lg-5 g-1">
          <template
            v-for="(item, index) in generateStore.getImgstylePageList"
            :key="index"
          >
            <div class="col">
              <ButtonCheckboxImgStyle v-bind="item">
                {{ item.title }}
              </ButtonCheckboxImgStyle>
            </div>
          </template>
        </div>
        <div class="text-center">
          <button
            @click="onClickMore"
            type="button"
            class="btn text-primary border-0"
          >
            โหลดเพิ่ม
          </button>
        </div>
      </div>
    </LayoutContainerGeneral>
  </form>
</template>

<style></style>
