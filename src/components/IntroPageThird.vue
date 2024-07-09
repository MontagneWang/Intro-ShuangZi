<script lang="ts" setup>
import { onMounted, ref } from "vue";
import createObserver, { delay } from "../utils/observer";

let [fu, text, timeline2] = [
  ref<HTMLDivElement | null>(null),
  ref<HTMLDivElement | null>(null),
  ref<HTMLDivElement | null>(null),
];
let now = new Date();
let year = now.getFullYear();
let age = ref(5005 + year - 2022);

function countdown(targetDate: string) {
  const now = new Date().getTime();
  const target = new Date(targetDate).getTime();
  const timeDifference = target - now;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  return `${days} 天 ${hours} 小时`;
}

const targetDate = "2024-07-13T12:00:00";
setTimeout(() => {
  console.log(countdown(targetDate));
}, 1000);

onMounted(() => {
  document.querySelectorAll(".text .el-card").forEach(item => {
    item.classList.add("hide");
  });
  createObserver(fu.value as HTMLDivElement, async () => {
    // 人物动画 显示
    await delay(500);
    fu.value!.classList.remove("hide");
    fu.value!.classList.add("animate__animated", "animate__fadeIn");
    await delay(1000);
    // 文本框动画 向右移动
    text.value!.classList.add("textMove");
    await delay(1000);
    // 人物属性文本动画 向上滑动显示
    document.querySelectorAll(".fu .text .el-card").forEach((item, index) => {
      let delayTime = index * 70;
      (item as HTMLElement).style.animationDelay = `${delayTime}ms`;
      item.classList.remove("hide");
      item.classList.add("animate__animated", "animate__flipInX");
    });
    await delay(200);
    // 显示时间线背景板
    timeline2.value!.classList.add("fade-in");
    await delay(1000);
    // 显示每项时间线 计算每个元素的延迟时间，设置 animation-delay 属性
    document
      .querySelectorAll(".fu .el-timeline-item")
      .forEach((item, index) => {
        const delay = index * 500 + 2000; // 计算每个元素的延迟时间
        (item as HTMLElement).style.animationDelay = `${delay}ms`; // 设置 animation-delay 属性
        item.classList.remove("hide");
        item.classList.add("animate__animated", "animate__fadeInUp");
      });
  });
});
</script>

<template>
  <div class="content fu">
    <div class="container">
      <div ref="fu" class="character fu hide">
        <img
          alt="起复"
          src="https://article.biliimg.com/bfs/article/ce971427853edff10f6c81718ac4ae0ceff0cd41.png@1e_1c.webp"
        />
        <div class="name fu">起 <span style="color: #99ff00">复</span></div>
      </div>

      <div ref="text" class="text">
        <el-card
          style="
            margin-bottom: 0.15em;
            background-image: linear-gradient(
              20deg,
              transparent 0%,
              transparent 75%,
              #99ff00aa 100%
            );
            background-size: 100% 75%;
            background-repeat: no-repeat;
          "
          body-style="padding:0.5em;"
          shadow="hover"
        >
          身高：142cm
        </el-card>
        <el-card
          style="margin-bottom: 0.15em"
          body-style="padding:0.5em;"
          shadow="hover"
        >
          体重：31kg
        </el-card>
        <el-card
          style="margin-bottom: 0.15em"
          body-style="padding:0.5em;"
          shadow="hover"
        >
          性别：男
        </el-card>
        <el-card
          style="margin-bottom: 0.15em"
          body-style="padding:0.5em;"
          shadow="hover"
        >
          年龄：<span class="blur"
            ><del>{{ age }} 岁</del></span
          >
        </el-card>
        <el-card
          style="margin-bottom: 0.15em"
          body-style="padding:0.5em;"
          shadow="hover"
        >
          生日：7月13日
        </el-card>
        <el-card
          style="margin-bottom: 0.15em"
          body-style="padding:0.5em;"
          shadow="hover"
        >
          代表物：笛子
        </el-card>
        <el-card
          style="margin-bottom: 0.15em"
          body-style="padding:0.5em;"
          shadow="hover"
        >
          代表色：<span style="color: #99ff00">■ #99FF00</span>
        </el-card>
        <el-card
          style="margin-bottom: 0.15em"
          body-style="padding:0.5em;"
          shadow="hover"
        >
          声源：这是一根手指
        </el-card>
        <el-card
          style="margin-bottom: 0.15em"
          body-style="padding:0.5em;"
          shadow="hover"
        >
          人设画师：ideolo/酥妃
        </el-card>
        <el-card
          style="
            margin-bottom: 0.15em;
            /* font-size: 0.95vw; */
            background-image: linear-gradient(
              20deg,
              #99ff00aa 0%,
              transparent 20%,
              transparent 100%
            );
            background-size: 100% 100%;
            background-repeat: no-repeat;
          "
          body-style="padding:0.5em;"
          shadow="hover"
        >
          形象：红瞳，黑发带墨绿挑染；有个小麻花辫和三角耳饰，四条眉毛
        </el-card>
      </div>

      <div ref="timeline2" class="timeline">
        <el-timeline>
          <el-timeline-item
            icon="Mic"
            placement="top"
            color="#99ff00cc"
            timestamp="&numsp;2022 年 5 月 1 日"
            type="success"
          >
            <template #dot>
              <el-icon
                color="#99ff00"
                class="avatar"
                style="width: 2vw; height: 2vw; font-size: 1.6vw; top: -0.3vw"
              >
                <Mic />
              </el-icon>
            </template>
            <el-card>
              <h3>
                🎉 起氏双子 Ace 声库发布&ensp;🎧<a
                  href="https://www.bilibili.com/video/BV1wL4y1c7J8"
                  class="fu-underline"
                  target="_blank"
                  title="点击前往 B 站"
                  >试听曲</a
                >
              </h3>
              <p>
                声库依托 Ace Studio 平台，您可以在
                <a
                  href="https://ace-studio.timedomain.cn/#download_home"
                  target="_blank"
                  class="fu-underline"
                  title="点击前往单音阶声库下载地址"
                  >此处</a
                >
                下载
              </p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item
            icon="Promotion"
            placement="top"
            color="#99ff00cc"
            timestamp="&numsp;2022 年 7 月 13 日"
            type="primary"
          >
            <template #dot>
              <el-icon color="#99ff00" class="avatar">
                <Promotion />
              </el-icon>
            </template>
            <div class="single-line">
              &numsp;五周年生贺曲「<a
                href="https://www.bilibili.com/video/BV1YW4y1U71A"
                class="fu-underline"
                target="_blank"
                title="点击前往 B 站"
                >如果仅靠谎言将我的世界照亮</a
              >」发布
            </div>
          </el-timeline-item>
          <el-timeline-item
            icon="Management"
            placement="top"
            color="#99ff00cc"
            timestamp="&numsp;2022 年 9 月 2 日"
            type="danger"
          >
            <template #dot>
              <el-icon color="#99ff00" class="avatar">
                <Management />
              </el-icon>
            </template>
            <div class="single-line">
              &numsp;设定集《<a
                href="https://t.bilibili.com/701249077290991617"
                class="fu-underline"
                target="_blank"
                title="点击前往 B 站"
                >万灵梦书</a
              >》发售，您可在
              <a
                href="https://gf.bilibili.com/item/detail/1105040028"
                target="_blank"
                class="fu-underline"
                title="点击前往 B 站工房"
                >此处</a
              >
              获取小说版
            </div>
          </el-timeline-item>
          <el-timeline-item
            icon="Promotion"
            placement="top"
            color="#99ff00cc"
            timestamp="&numsp;2023 年 7 月 13 日"
            type="primary"
          >
            <template #dot>
              <el-icon color="#99ff00" class="avatar">
                <Promotion />
              </el-icon>
            </template>
            <div class="single-line">
              &numsp;起氏双子六周年，生贺曲「<a
                href="https://www.bilibili.com/video/BV16V4y1h7Lw"
                class="fu-underline"
                target="_blank"
                title="点击前往 B 站"
                >神子</a
              >」发布
            </div>
          </el-timeline-item>

          <!-- todo 时间戳显示 -->
          <template v-if="Date.now() > 1720872000000">
            <el-timeline-item
              icon="Promotion"
              placement="top"
              color="#99ff00cc"
              timestamp="&numsp;2024 年 7 月 13 日"
              type="primary"
            >
              <template #dot>
                <el-icon color="#99ff00" class="avatar">
                  <Promotion />
                </el-icon>
              </template>
              <div class="single-line">
                <!-- todo 链接 -->
                &numsp;双子七岁啦，生贺曲「<a
                  href="https://space.bilibili.com/193181849/video"
                  class="fu-underline"
                  target="_blank"
                  title="点击前往 B 站"
                  >百年的珍珠和一日的花</a
                >」发布
              </div>
            </el-timeline-item>
            <el-timeline-item
              icon="Promotion"
              placement="top"
              color="#99ff00cc"
            >
              <template #dot>
                <el-icon color="#99ff00" class="avatar">
                  <Present />
                </el-icon>
              </template>
              <!-- todo 链接 -->
              <div style="margin-top: -0.4em">
                &numsp;起氏双子首套动态&numsp;<a
                  href="https://www.bilibili.com/opus/950612593720950790"
                  class="fu-underline"
                  target="_blank"
                  title="点击前往 B 站"
                  >个性装扮</a
                >&numsp;上线 B 站
              </div>
            </el-timeline-item>
          </template>
          <template v-else>
            <el-timeline-item
              icon="Promotion"
              placement="top"
              color="#99ff00cc"
              :timestamp="'「距离双子七周年生日还有 ' + countdown(targetDate) + ' 」'"
            >
              <template #dot>
                <el-icon color="#99ff00" class="avatar">
                  <MoonNight />
                </el-icon>
              </template>
            </el-timeline-item>
          </template>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 1280px) {
  .el-timeline-item {
    padding-bottom: 0.8vw !important;
    .single-line {
      margin-top: 0.8vw !important;
    }
  }
}
.fu-underline {
  @include underline(#99ff00, #99ff00);

  &:hover {
    @include underline(#ff0099, #ff0099);
  }
}

a {
  @include hyperlink(#99ff00, #ff0099);
}

.avatar {
  border: 0.2vw solid #99ff00;
  background-color: #00000077;
  border-radius: 50%;
  width: 1.6vw;
  height: 1.6vw;
  top: -0.2vw;
  left: calc(100% - 150% + 5px);
  font-size: 1.1vw;
  position: relative;
}

.character {
  opacity: 0;
  position: relative;
  left: -4.5%;
  .name {
    @include name;
    left: 18%;
    top: 4%;
    border: 0.2vw inset rgba(153, 255, 0, 0.7);
  }
}

.text {
  @include text(#99ff00);
}

.timeline {
  @include timeline;
  animation-delay: 1500ms;

  .el-timeline {
    --el-fill-color-blank: rgba(255, 255, 255, 0.15);
  }
}
</style>
