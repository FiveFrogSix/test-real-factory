import { defineStore } from "pinia";
export const useGenerateImgStore = defineStore("generateImgStore", () => {
  const sizeList = ref([
    {
      id: 1,
      title: "แนวตั้ง",
      icon: ["fas", "grip-vertical"],
      name: "vertical",
      default: "vertical",
    },
    {
      id: 2,
      title: "แนวนอน",
      icon: ["fas", "grip-horizontal"],
      name: "horizontal",
      default: "horizontal",
    },
    {
      id: 3,
      title: "จตุรัส",
      icon: ["far", "square"],
      name: "square",
      default: "square",
    },
  ]);

  const colorList = ref([
    {
      id: "pickColor1",
      type: "มงคล",
      name: "pickColor",
      color: "#0000FF",
      borderColor: "",
    },
    {
      id: "pickColor2",
      type: "",
      name: "pickColor",
      color: "#008000",
      borderColor: "",
    },
    {
      id: "pickColor3",
      type: "มงคล",
      name: "pickColor",
      color: "#FFA500",
      borderColor: "",
    },
    {
      id: "pickColor4",
      type: "",
      name: "pickColor",
      color: "#800080",
      borderColor: "",
    },
    {
      id: "pickColor5",
      type: "มงคล",
      name: "pickColor",
      color: "#FFC0CB",
      borderColor: "",
    },
    {
      id: "pickColor6",
      type: "มงคล",
      name: "pickColor",
      color: "#FFFF00",
      borderColor: "",
    },
    {
      id: "pickColor7",
      type: "",
      name: "pickColor",
      color: "#A52A2A",
      borderColor: "",
    },
    {
      id: "pickColor8",
      type: "",
      name: "pickColor",
      color: "#808080",
      borderColor: "",
    },
    {
      id: "pickColor9",
      type: "",
      name: "pickColor",
      color: "#000000",
      borderColor: "",
    },
    {
      id: "pickColor10",
      type: "",
      name: "pickColor",
      color: "#FFFFFF",
      borderColor: "#000",
    },
    {
      id: "pickColor11",
      type: "มงคล",
      name: "pickColor",
      color: "#ADD8E6",
      borderColor: "",
    },
    {
      id: "pickColor12",
      type: "",
      name: "pickColor",
      color: "#90EE90",
      borderColor: "",
    },
    {
      id: "pickColor13",
      type: "",
      name: "pickColor",
      color: "#4B0082",
      borderColor: "",
    },
    {
      id: "pickColor14",
      type: "กาลกิณี",
      name: "pickColor",
      color: "#FF0000",
      borderColor: "",
    },
    {
      id: "pickColor15",
      type: "",
      name: "pickColor",
      color: "#FFD700",
      borderColor: "",
    },
    {
      id: "pickColor16",
      type: "",
      name: "pickColor",
      color: "#C0C0C0",
      borderColor: "",
    },
  ]);

  return { sizeList, colorList };
});
