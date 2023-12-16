<script lang="ts" setup>
import { onMounted, ref } from "vue";
import createObserver, { delay } from "../utils/observer";

let [li, text, timeline] = [
  ref<HTMLDivElement | null>(null),
  ref<HTMLDivElement | null>(null),
  ref<HTMLDivElement | null>(null),
];

onMounted(() => {
  document
    .querySelectorAll(".el-timeline-item, .text .el-card")
    .forEach(item => item.classList.add("hide"));

  document
    .querySelectorAll(".el-timeline-item__node--normal")
    .forEach(item => item.classList.add("el-timeline-item__node--large"));

  createObserver(li.value as HTMLDivElement, async () => {
    // 人物动画 向左移动
    li.value!.classList.add("move");
    await delay(1300);
    // 文本框动画 向右移动
    text.value!.classList.add("textMove");
    await delay(1000);
    // 人物介绍文本动画 逐行展示
    document.querySelectorAll(".li .text .el-card").forEach((item, index) => {
      let delayTime = index * 70;
      (item as HTMLElement).style.animationDelay = `${delayTime}ms`;
      item.classList.remove("hide");
      item.classList.add("animate__animated", "animate__flipInX");
    });
    await delay(10);
    // 显示时间线背景板
    timeline.value!.classList.add("fade-in");
    await delay(700);
    // 显示每项时间线 计算每个元素的延迟时间，设置 animation-delay 属性
    document
      .querySelectorAll(".li .el-timeline-item")
      .forEach((item, index) => {
        let delayTime = index * 500 + 2500;
        (item as HTMLElement).style.animationDelay = `${delayTime}ms`;
        item.classList.remove("hide");
        item.classList.add("animate__animated", "animate__fadeInUp");
      });
  });
});
</script>

<template>
  <div class="content li">
    <div class="container">
      <div ref="li" class="character li">
        <!--<img alt="" src="../static/qili.png">-->
        <img
          alt="起礼"
          src="https://article.biliimg.com/bfs/article/e41acee7c137303a9743f04fc263a749999518c3.png@1e_1c.webp"
        />
        <div class="name">起 <span style="color: #ff0099">礼</span></div>
      </div>

      <div ref="text" class="text">
        <el-card
          style="
            margin-bottom: 0.15em;
            background-image: linear-gradient(
              20deg,
              transparent 0%,
              transparent 75%,
              #ff0099aa 100%
            );
            background-size: 100% 75%;
            background-repeat: no-repeat;
          "
          body-style="padding:0.5em;"
          shadow="hover"
        >
          身高：140cm
        </el-card>
        <el-card
          style="margin-bottom: 0.15em"
          body-style="padding:0.5em;"
          shadow="hover"
        >
          体重：30kg
        </el-card>
        <el-card
          style="margin-bottom: 0.15em"
          body-style="padding:0.5em;"
          shadow="hover"
        >
          性别：女
        </el-card>
        <el-card
          style="margin-bottom: 0.15em"
          body-style="padding:0.5em;"
          shadow="hover"
        >
          年龄：<span class="blur">年龄是秘密</span>
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
          代表物：凤凰
        </el-card>
        <el-card
          style="margin-bottom: 0.15em"
          body-style="padding:0.5em;"
          shadow="hover"
        >
          代表色：<span style="color: #ff0099">■ #FF0099</span>
        </el-card>
        <el-card
          style="margin-bottom: 0.15em"
          body-style="padding:0.5em;"
          shadow="hover"
        >
          声源：悠茗月尘
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
            background-image: linear-gradient(
              20deg,
              #ff0099aa 0%,
              transparent 20%,
              transparent 100%
            );
            background-size: 100% 100%;
            background-repeat: no-repeat;
          "
          body-style="padding:0.5em;"
          shadow="hover"
        >
          形象：绿瞳，发色外白内粉；有四条长发与一条侧马尾
        </el-card>
      </div>

      <div ref="timeline" class="timeline">
        <el-timeline>
          <el-timeline-item
            icon="FolderChecked"
            placement="top"
            color="#ff0099"
            timestamp="2016 年 3 月 19 日"
            type="primary"
            style="font-weight: bold"
          >
            <template #dot>
              <el-icon color="#ff0099" class="avatar">
                <FolderChecked />
              </el-icon>
            </template>
            「<a
              href="https://space.bilibili.com/193181849"
              target="_blank"
              title="点击前往 B 站"
              >起氏双子</a
            >」立项 —— 官方负责人：<a
              href="https://space.bilibili.com/1961304"
              target="_blank"
              title="点击前往 B 站"
              >阿铃养鲸鱼</a
            >
          </el-timeline-item>

          <el-timeline-item
            icon="Mic"
            color="#ff0099"
            placement="top"
            timestamp="2018 年 1 月 6 日"
            type="success"
          >
            <template #dot>
              <el-icon
                color="#ff0099"
                class="avatar"
                style="
                  width: 2vw;
                  height: 2vw;
                  font-size: 1.6vw;
                  top: -0.3vw;
                "
              >
                <mic />
              </el-icon>
            </template>
            <el-card>
              <h3>🎉 起氏双子首个 Utau 声库发布</h3>
              <p>
                并在之后陆续更新了 Utau cvvc
                <a
                  href="https://pan.baidu.com/s/1Rwu-U5OixQyX5yHm5uh6_g?pwd=04tx"
                  target="_blank"
                  title="点击前往单音阶声库下载地址"
                  >单音阶</a
                >、<a
                  href="https://share.weiyun.com/5eC8EqP"
                  target="_blank"
                  title="点击前往三音阶声库下载地址"
                  >三音阶</a
                >
                声库
              </p>
            </el-card>
          </el-timeline-item>

          <el-timeline-item
            icon="mic"
            color="#ff0099"
            placement="top"
            timestamp="2019 年 7 月 13 日"
            type="success"
          >
            <template #dot>
              <el-icon
                color="#ff0099"
                class="avatar"
                style="
                  width: 2vw;
                  height: 2vw;
                  font-size: 1.6vw;
                  top: -0.3vw;
                "
              >
                <mic />
              </el-icon>
            </template>
            <el-card>
              <h3>🎉 起氏双子 DeepVocal 声库发布</h3>
              <p>
                DeepVocal 共更新了两版声库：<a
                  href="https://pan.baidu.com/s/1HDjBLn8HFJIu5lKLDXx6Gw?pwd=4bl1"
                  target="_blank"
                  title="点击前往 1.0 版声库下载地址"
                  >1.0版</a
                >、<a
                  href="https://pan.baidu.com/s/18LWNKq5hxL4P_xTp7Xv0Qg?pwd=ggv7"
                  target="_blank"
                  title="点击前往三音阶声库下载地址"
                  >三音阶</a
                >
                声库
              </p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item
            icon="Promotion"
            color="#ff0099"
            placement="top"
            timestamp="2020 年 7 月 13 日"
            type="primary"
          >
            <template #dot>
              <el-icon color="#ff0099" class="avatar">
                <Promotion />
              </el-icon>
            </template>
            双子三周年，生贺曲《不揽清风不望月》发布
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  @include hyperlink(#ff0099, #99ff00);
}
.avatar {
  border: 0.2vw solid #ff0099;
  background-color: #ffffff34;
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
  left: -3%;

  .name {
    @include name;
    left: 16%;
    top: 4%;
    border: 0.2vw outset rgba(255, 0, 153, 0.7);
  }
}

.text {
  @include text(#ff0099);
}

.timeline {
  @include timeline;
  animation-delay: 2000ms;

  .el-timeline {
    --el-fill-color-blank: rgba(255, 255, 255, 0.5);
  }
}
</style>
