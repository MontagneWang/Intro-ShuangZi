<script lang="ts" setup>
import { onMounted, ref } from "vue";

let fu = ref<HTMLDivElement | null>(null);
let text = ref<HTMLDivElement | null>(null);
let timeline2 = ref<HTMLDivElement | null>(null);

onMounted(() => {
  document.querySelectorAll(".text .el-card").forEach((item, index) => {
    item.classList.add("hide");
  });
  // 判断元素是否在视窗内
  let observer2 = new IntersectionObserver((entries2) => {
    entries2.forEach(async (entry) => {
      // 元素出现在视窗内
      if (entry.isIntersecting) {
        // 通过在添加	animation-delay 实现延迟，而不是 setTimeOut（会存在系统与性能误差）
        const delay = (ms: number) =>
          new Promise((resolve) => setTimeout(resolve, ms));

        // 人物动画 显示
        await delay(500);
        fu.value!.classList.remove("hide");
        fu.value!.classList.add("animate__animated", "animate__fadeIn");
        await delay(1000);

        // 文本框动画 向右移动
        text.value!.classList.add("textMove");
        await delay(1000);

        // 人物属性文本动画 向上滑动显示
        document
          .querySelectorAll(".fu .text .el-card")
          .forEach((item, index) => {
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
      }
    });
  });

  observer2.observe(fu.value as HTMLDivElement);
});

let now = new Date();
let year = now.getFullYear();
let age = ref(5005 + year - 2022);
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
          年龄：12 <span class="blur">其实已经{{ age }}岁了</span>
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
            /* font-size: 0.95rem; */
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
          形象：红瞳，黑发带墨绿挑染。左侧有个小麻花辫，右侧有三角耳饰。
        </el-card>
      </div>

      <div ref="timeline2" class="timeline">
        <el-timeline>
          <el-timeline-item
            icon="mic"
            placement="top"
            timestamp="2021 年 7 月 13 日"
            type="primary"
          >
            双子四周年，生贺曲《交彗 Comets Meet》发布
          </el-timeline-item>
          <el-timeline-item
            icon="Promotion"
            placement="top"
            timestamp="2022 年 5 月 1 日"
            type="success"
          >
            <el-card>
              <h3>
                🎉 起氏双子 Ace 声库发布&emsp;<a
                  href="https://www.bilibili.com/video/BV1wL4y1c7J8"
                  target="_blank"
                  title="点击前往 B 站"
                  >🎧试听曲</a
                >
              </h3>
              <!--<p>『要将等待换成什么　我早就数不清楚了</p>-->
              <!--<p>&emsp;但愿你走向我那个时刻　一切都没改变过』</p>-->
              <p>
                声库依托 Ace Studio 平台，您可以在
                <a
                  href="https://ace-studio.timedomain.cn/#download_home"
                  target="_blank"
                  title="点击前往单音阶声库下载地址"
                  >此处</a
                >
                下载
              </p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item
            icon="mic"
            placement="top"
            timestamp="2022 年 7 月 13 日"
            type="primary"
          >
            双子五周年，《如果仅靠谎言将我的世界照亮》发布
          </el-timeline-item>
          <el-timeline-item
            icon="Management"
            placement="top"
            timestamp="2022 年 9 月 2 日"
            type="danger"
          >
            设定集《万灵梦书》发售，您可在
            <a
              href="https://gf.bilibili.com/item/detail/1105040028"
              target="_blank"
              title="点击前往 B 站工房"
              >此处</a
            >
            获取小说版
          </el-timeline-item>
          <el-timeline-item
            icon="mic"
            placement="top"
            timestamp="2023 年 7 月 13 日"
            type="primary"
          >
            起氏双子六岁啦，生贺曲《神子》发布
          </el-timeline-item>
          <el-timeline-item
            icon="Promotion"
            placement="top"
            timestamp="「但愿你走向我那个时刻，一切都没改变过」"
            type="success"
          >
            <!--  -->
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
          font-size: 1.1rem !important;
          --el-card-padding: 0.8rem 2rem !important;
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
  @include hyperlink(#99ff00, #ff0099);
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
      left: -4.5%;
      .name {
        position: absolute;
        writing-mode: vertical-rl;
        font-size: 2.5em;
        left: 16%;
        top: 4%;
        padding: 12px 7px 18px 8px;
        border: 2px inset rgba(153, 255, 0, 0.7);
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.15);
        z-index: -1;
      }
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
    border-top: 1.5px solid #99ff00;
    border-right: 1.5px solid #99ff00;

    transition-delay: 500ms;
    .el-card {
      --el-card-bg-color: rgba(0, 0, 0, 0.1) !important;
      border: 1px solid rgba(0, 0, 0, 0.15);
      margin-bottom: 0.25rem !important;
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
    animation-delay: 1500ms;

    .el-timeline-item__timestamp {
      color: #ff0099 !important;
    }

    .el-timeline {
      width: 92%;
        margin: 3.5% auto;
      --el-text-color-secondary: #fff;
      --el-fill-color-blank: rgba(255, 255, 255, 0.15);
      .el-card {
        width: 92%;
        font-size: 0.9rem;
      }
      .el-timeline-item {
        font-size: 1.1rem;
        --el-text-color-primary: #000;
      }
    }
  }
}
</style>
