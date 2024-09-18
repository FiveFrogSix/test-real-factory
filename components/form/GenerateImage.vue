<script lang="ts" setup>
const form = reactive({
  size: "vertical",
});
</script>
<template>
  <form>
    <LayoutContainerGeneral>
      <TextTitleGeneral> ขนาด </TextTitleGeneral>
      <div class="row g-0 gap-2 text-center">
        <div class="col">
          <ButtonRadioOrent
            id="vertical"
            name="sizeImg"
            v-model="form.size"
            value="vertical"
          >
            แนวตั้ง
          </ButtonRadioOrent>
        </div>

        <div class="col">
          <ButtonRadioOrent
            id="horizontal"
            name="sizeImg"
            v-model="form.size"
            value="horizontal"
          >
            แนวนอน
          </ButtonRadioOrent>
        </div>
        <div class="col">
          <ButtonRadioOrent
            id="square"
            name="sizeImg"
            v-model="form.size"
            value="square"
          >
            จตุรัส
          </ButtonRadioOrent>
        </div>
      </div>
    </LayoutContainerGeneral>
  </form>
</template>

<style></style>
