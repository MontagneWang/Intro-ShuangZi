<script lang="ts" setup>
import { onMounted, ref } from "vue";

let li = ref<HTMLDivElement | null>(null);
let text = ref<HTMLDivElement | null>(null);
let timeline = ref<HTMLDivElement | null>(null);

onMounted(() => {
  document.querySelectorAll(".el-timeline-item").forEach((item, index) => {
    item.classList.add("hide");
  });
  document.querySelectorAll(".text .el-card").forEach((item, index) => {
    item.classList.add("hide");
  });
  // 判断元素是否在视窗内
  let observer = new IntersectionObserver((entries) => {
    entries.forEach(async (entry) => {
      /**
       * 当元素出现在视窗内时触发
       * 使用 异步 与 Promise 来解决 setTimeout 的嵌套问题
       * 通过在添加	animation-delay 实现延迟，而不是 setTimeOut（会存在系统与性能误差）
       */
      if (entry.isIntersecting) {
        const delay = (ms: number) =>
          new Promise((resolve) => setTimeout(resolve, ms));
        // 人物动画 向左移动
        li.value!.classList.add("move");
        await delay(1300);

        // 文本框动画 向右移动
        text.value!.classList.add("textMove");
        await delay(1000);

        // 人物介绍文本动画 逐行展示
        document
          .querySelectorAll(".li .text .el-card")
          .forEach((item, index) => {
            let delayTime = index * 70;
            (item as HTMLElement).style.animationDelay = `${delayTime}ms`;
            item.classList.remove("hide");
            item.classList.add("animate__animated", "animate__flipInX");
          });
        await delay(10);
        // 显示时间线背景板
        // timeline.value!.classList.add("animate__animated", "animate__fadeIn");
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
      }
    });
  });

  observer.observe(li.value as HTMLDivElement);

  document
    .querySelectorAll(".el-timeline-item__node--normal")
    .forEach((item) => {
      item.classList.add("el-timeline-item__node--large");
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
          年龄：<span class="blur">秘密</span>
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
          形象：绿瞳，发色外白内粉。有四条长发与一条侧马尾。
        </el-card>
      </div>

      <div ref="timeline" class="timeline">
        <el-timeline>
          <el-timeline-item
            icon="FolderChecked"
            placement="top"
            timestamp="2016 年 3 月 19 日"
            type="primary"
            style="font-weight: bold"
          >
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
            icon="Promotion"
            placement="top"
            timestamp="2018 年 1 月 6 日"
            type="success"
          >
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
            icon="Promotion"
            placement="top"
            timestamp="2019 年 7 月 13 日"
            type="success"
          >
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
            icon="mic"
            placement="top"
            timestamp="2020 年 7 月 13 日"
            type="primary"
          >
            双子三周年，生贺曲《不揽清风不望月》发布
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 1280px) {
  .content {
    .name {
      font-size: 2.5em !important;
      left: 16% !important;
    }
    .text {
      width: 18vw !important;
      font-size: 1rem !important;
    }
    .timeline {
      .el-timeline {
        --el-font-size-small: 1rem !important;
        --el-timeline-node-size-large: 1.2rem !important;
        .el-card {
          font-size: 1rem !important;
          --el-card-padding: 0.5rem 1.3rem !important;
        }
        .el-timeline-item {
          font-size: 1.2rem !important;
        }
      }
    }
  }
}

@media screen and (min-width: 1536px) {
  .content {
    .name {
      font-size: 3rem !important;
      left: 16% !important;
    }

    .text {
      width: 19vw !important;
      font-size: 1.2rem !important;
    }

    .timeline {
      .el-timeline {
        font-size: 1rem !important;
        --el-font-size-small: 1.3rem !important;
        --el-timeline-node-size-large: 1.5rem !important;

        .el-card {
          font-size: 1.2rem !important;
          --el-card-padding: 1rem 2rem !important;
        }
        .el-timeline-item {
          font-size: 1.5rem !important;
        }
      }
    }
  }
}

@media screen and (min-width: 1920px) {
  .content {
    .name {
      font-size: 4rem !important;
      left: 17% !important;
      top: 5% !important;
    }
    .text {
      width: 20vw !important;
      font-size: 1.7rem !important;
    }
    .timeline {
      .el-timeline {
        font-size: 1.8rem !important;
        --el-font-size-small: 1.8rem !important;
        --el-timeline-node-size-large: 2rem !important;

        .el-card {
          --el-card-padding: 0.75rem 2.5rem !important;
        }
      }
    }
  }
}

@media screen and (min-width: 2560px) {
  .content {
    .name {
      font-size: 6rem !important;
      left: 17% !important;
      top: 4.5% !important;
    }
    .text {
      margin-left: -13.5% !important;
      width: 18vw !important;
      font-size: 2.3rem !important;
    }
    .timeline {
      .el-timeline {
        font-size: 2.4rem !important;
        --el-font-size-small: 2.4rem !important;
        --el-timeline-node-size-large: 3rem !important;
        .el-card {
          --el-card-padding: 1.75rem 3.5rem !important;
          width: 100% !important;
          font-size: 2.5rem !important;
        }
        .el-timeline-item {
          font-size: 2.5rem !important;
        }
      }
    }
  }
}

a {
  @include hyperlink(#ff0099, #99ff00);
}
.content {
  height: 100vh;
  overflow: hidden;
  .container {
    width: 84vw;
    height: 88vh;
    margin: 6vh auto;
    text-align: left;
    display: flex;
    .character {
      opacity: 0;
      position: relative;
      left: -3%;
      .name {
        position: absolute;
        writing-mode: vertical-rl;
        font-size: 2.5em;
        left: 16%;
        top: 4%;
        padding: 12px 7px 18px 8px;
        border: 2px outset rgba(255, 0, 153, 0.7);
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.15);
        z-index: -1;
      }
    }
    .text {
      opacity: 0;
      overflow: hidden;

      width: 14.5em;
      max-width: 20vw;

      margin: 4% 1.6% 4.5% -13%;
      padding: 1.5% 1.4%;

      border-top-right-radius: 10px;
      border-top: 1.5px solid #ff0099;
      border-right: 1.5px solid #ff0099;
      .el-card {
        --el-card-bg-color: rgba(0, 0, 0, 0.1) !important;
        border: 1px solid rgba(0, 0, 0, 0.15);
        margin-bottom: 0.25rem !important;
        font-size: 1.3rem;
      }
    }
    .timeline {
      overflow: hidden;
      margin: 2%;
      margin-left: 0;
      flex-grow: 1; // 占满剩余空间

      background-color: #00000040;
      border-radius: 10px;
      opacity: 0;
      animation-delay: 2000ms;
      .el-timeline {
        width: 92%;
        margin: 3.5% auto;
        --el-text-color-secondary: #fff;
        --el-fill-color-blank: rgba(255, 255, 255, 0.5);
        .el-card {
          width: 92%;
          font-size: 1rem;
        }
        .el-timeline-item {
          font-size: 1.1rem;
          --el-text-color-primary: #000;
        }
      }
    }
  }
}
</style>
