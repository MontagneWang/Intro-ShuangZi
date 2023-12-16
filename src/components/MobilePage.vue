<script lang="ts" setup>
import { onMounted, ref } from "vue";
import createObserver, { delay } from "../utils/observer";

let [mask, text, text2, text3] = [
  ref<HTMLDivElement | null>(null),
  ref<HTMLDivElement | null>(null),
  ref<HTMLDivElement | null>(null),
  ref<HTMLDivElement | null>(null),
];

onMounted(() => {
  // 随机更改图片位置，起礼和起复随机出现
  let backgroundPosition = Math.random() >= 0.5 ? "left" : "right";
  let element = document.querySelector(".mobile-container") as HTMLElement;
  element.style.background =
    "url('https://article.biliimg.com/bfs/new_dyn/83898a52606bbd43acdb4fc7394e438f1402305269.jpg@1e_1c.webp') no-repeat center " +
    backgroundPosition;
  element.style.backgroundSize = "cover";

  createObserver(mask.value as HTMLDivElement, async () => {
    await delay(1000);
    mask.value!.classList.add("fade-in");
    await delay(1000);
    text.value!.classList.add("animate__animated", "animate__fadeInLeft");
    await delay(700);
    text2.value!.classList.add("animate__animated", "animate__fadeInLeft");
    await delay(700);
    text3.value!.classList.add("animate__animated", "animate__fadeInLeft");
  });
});
</script>

<template>
  <!-- 竖排文字 向上滑入 -->
  <div ref="mask" class="mask"></div>
  <div class="mobile-container">
    <div class="content">
      <div class="text">
        <p ref="text">「万分抱歉</p>
        <p ref="text2">
          &emsp;站点目前仅支持<span style="letter-spacing: 0">&#8239;</span
          ><span style="text-decoration: underline">电脑端</span
          ><span style="letter-spacing: 0">&#8239;</span>访问
        </p>
        <p ref="text3">
          &emsp;希望以后能为您带来更好的阅读体验<span style="letter-spacing: 0"
            >&#8239;</span
          >」
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mask {
  opacity: 0;
  width: 84vw;
  height: 88vh;
  position: fixed;
  left: 8vw;
  top: 6vh;
  background-color: #ffffffa0;
  border-radius: 6vw;
}
.mobile-container {
  background: url("https://article.biliimg.com/bfs/new_dyn/83898a52606bbd43acdb4fc7394e438f1402305269.jpg@1e_1c.webp")
    no-repeat center right;
  background-size: cover;

  writing-mode: vertical-rl;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .text {
      z-index: 1;
      display: block;
      font-size: 7.5vw;
      font-weight: bold;
      letter-spacing: 1.25vw;
      p {
        opacity: 0;
      }
    }
  }
}
</style>
