<script lang="ts" setup>
import { onMounted, ref } from "vue";
import PageContainer from "./components/PageContainer.vue";
import TheRightMenu from "./components/TheRightMenu.vue";
import MobilePage from "./components/MobilePage.vue";

// 随机返回一个字符串
function randomChoose(str1: string, str2: string) {
  if (Math.random() >= 0.5) {
    return str1;
  } else {
    return str2;
  }
}
// 标题切换
let t: number | ReturnType<typeof setTimeout> | undefined;
let title: string | undefined;
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    if (document.title !== "欢迎回来") {
      title = document.title;
    }
    document.title = randomChoose(
      "起氏双子团团团团团团转",
      "起氏双子萌萌萌萌萌萌哒"
    );
    clearTimeout(t);
  }
  // 可以直接 else if
  if (document.visibilityState === "visible") {
    document.title = "欢迎回来✧(≖ ◡ ≖✿)";
    if (title === undefined) {
      title = "这里是起氏双子~";
    }
    t = setTimeout(function () {
      document.title = title as string;
    }, 1000);
  }
});

// 控制台输出
document.addEventListener("keydown", e => {
  if (
    e.code === "F12" ||
    ((e.code === "KeyJ" || e.code === "KeyI") &&
      (e.ctrlKey || e.metaKey) &&
      (e.shiftKey || e.altKey))
  ) {
    console.clear();
    console.log(
      ` %c「要将等待换成什么 我早就数不清楚了」\n%c「但愿你走向我那个时刻 一切都没改变过」`,
      `color: #99FF00; font-size: 16px;margin: 10px 0 5px 0 ;`,
      "color: #FF0099; font-size: 16px;margin: 5px 0 15px 0 ;"
    );
  }
});
onMounted(() => {
  console.clear();
  console.log(
    ` %c「要将等待换成什么 我早就数不清楚了」\n%c「但愿你走向我那个时刻 一切都没改变过」`,
    `color: #99FF00; font-size: 16px;margin: 10px 0 5px 0 ;`,
    "color: #FF0099; font-size: 16px;margin: 5px 0 15px 0 ;"
  );
});

// 移动端跳转
let width = ref(window.innerWidth);
window.addEventListener("resize", () => {
  width.value = window.innerWidth;
});
</script>

<template>
  <mobile-page v-if="width <= 768" />
  <template v-else>
    <page-container />
    <the-right-menu />
  </template>
</template>

<style lang="scss">
html * {
  font-family: 'LXGW WenKai', LXGW WenKai Lite, serif !important;
}
// 在最外层设置背景而不是在 full-page 设置，修复快速滚动时空白问题
body {
  background: url("https://article.biliimg.com/bfs/article/b0cc0ad497f90d10258b5ff9ef82de7247a47114.jpg@1e_1c.webp")
    no-repeat fixed bottom;
  background-size: cover;
}
</style>
