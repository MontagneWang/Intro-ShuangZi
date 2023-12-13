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
        await delay(300);

        // 文本框动画 向右移动
        text.value!.classList.add("textMove");
        await delay(1300);

        // 人物属性文本动画 向上滑动显示
        document
          .querySelectorAll(".fu .text .el-card")
          .forEach((item, index) => {
            let delayTime = index * 70;
            (item as HTMLElement).style.animationDelay = `${delayTime}ms`;
            item.classList.remove("hide");
            item.classList.add("animate__animated", "animate__flipInX");
          });
        await delay(100);

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
    <div ref="fu" class="character fu hide">
      <img
        alt="起复"
        src="https://article.biliimg.com/bfs/article/ce971427853edff10f6c81718ac4ae0ceff0cd41.png@1e_1c.webp"
      />
      <div class="name fu">起 <span style="color: #99ff00">复</span></div>

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
          形象：红瞳，黑发带墨绿挑染<br />&emsp;&emsp;&emsp;左侧有个小麻花辫<br />&emsp;&emsp;&emsp;右侧有三角耳饰
        </el-card>
      </div>
    </div>
    <div ref="timeline2" class="timeline">
      <el-timeline>
        <el-timeline-item
          icon="mic"
          placement="top"
          timestamp="2020 年 7 月 13 日"
          type="primary"
        >
          双子三周年，生贺曲《不揽清风不望月》发布
        </el-timeline-item>
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
            <h3>🎉 起氏双子 ACE 声库发布</h3>
            <!--<p>『要将等待换成什么　我早就数不清楚了</p>-->
            <!--<p>&emsp;但愿你走向我那个时刻　一切都没改变过』</p>-->
            <p>
              Ace 声库依托于 Ace Studio 平台，您可以在
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
          双子五周年，生贺曲《如果仅靠谎言将我的世界照亮》发布
        </el-timeline-item>
        <el-timeline-item
          icon="Management"
          placement="top"
          timestamp="2022 年 9 月 2 日"
          type="danger"
        >
          起氏双子设定集《万灵梦歌》发售
        </el-timeline-item>
        <el-timeline-item
          icon="mic"
          placement="top"
          timestamp="2023 年 7 月 13 日"
          type="primary"
        >
          起氏双子六岁啦，生贺曲《神子》发布
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// @media screen and (min-width: 1280px) {
// 	.content {
// 		.fu {
// 			left: 3.5vw !important;
// 		}

// 		.name {
// 			font-size: 2.5em !important;
// 			left: 20% !important;
// 		}

// 		.text {
// 			left: 3.5vw !important;
// 			top: -2vh !important;
// 			width: 20vw !important;
// 			font-size: 1.3em !important;
// 		}

// 		.timeline {
// 			.el-timeline {
// 				font-size: 1em !important;
// 				--el-font-size-small: 1em !important;
// 				padding-left: 9%;
// 				--el-timeline-node-size-large: 1em !important;

// 				.el-card {
// 					--el-card-padding: 20px 35px !important;
// 				}
// 			}
// 		}
// 	}
// }
@media screen and (min-width: 1366px) {
  .content {
    .fu {
      left: 3vw !important;
    }

    .name {
      font-size: 2.5em !important;
      left: 20% !important;
    }

    .text {
      top: -1vh !important;
      left: 4.5vw !important;
      width: 20vw !important;
      font-size: 1.4em !important;
    }

    .timeline {
      .el-timeline {
        font-size: 1.1em !important;
        --el-font-size-small: 1em !important;
        padding-left: 9%;
        --el-timeline-node-size-large: 1em !important;

        .el-card {
          --el-card-padding: 20px 35px !important;
        }
      }
    }
  }
}

@media screen and (min-width: 1440px) {
  iframe {
    position: absolute;
    top: 14%;
    right: 2% !important;
  }
  .content {
    .name {
      font-size: 3em !important;
      left: 20% !important;
    }

    .text {
      left: 3vw !important;
      width: 20vw !important;
      font-size: 1.6em !important;
    }

    .timeline {
      .el-timeline {
        font-size: 1.2em !important;
        --el-font-size-small: 1em !important;
        padding-left: 9%;
        --el-timeline-node-size-large: 1em !important;

        .el-card {
          --el-card-padding: 20px 35px !important;
        }
      }
    }
  }
}

@media screen and (min-width: 1536px) {
  .content {
    .name {
      font-size: 3em !important;
      left: 20% !important;
    }

    .text {
      top: 0.5vh !important;
      left: 4.5vw !important;
      width: 20vw !important;
      font-size: 1.6em !important;
    }

    .timeline {
      .el-timeline {
        font-size: 1.3em !important;
        --el-font-size-small: 1em !important;
        padding-left: 9%;
        --el-timeline-node-size-large: 1em !important;

        .el-card {
          --el-card-padding: 20px 35px !important;
        }
      }
    }
  }
}

@media screen and (min-width: 1920px) {
  .content {
    .name {
      font-size: 4em !important;
      left: 20% !important;
    }

    .text {
      left: 4.5vw !important;
      width: 20vw !important;
      font-size: 2.1em !important;
    }

    .timeline {
      .el-timeline {
        font-size: 1.8em !important;
        --el-font-size-small: 1em !important;
        padding-left: 9%;
        --el-timeline-node-size-large: 1em !important;

        .el-card {
          --el-card-padding: 20px 35px !important;
        }
      }
    }
  }
}

@media screen and (min-width: 2560px) {
  .blur {
    filter: blur(7px) !important;
  }
  .content {
    .name {
      font-size: 5.5em !important;
      left: 20% !important;
    }

    .text {
      top: -2vh !important;
      left: 4vw !important;
      width: 21vw !important;
      font-size: 3em !important;
    }

    .timeline {
      .el-timeline {
        font-size: 2.4em !important;
        --el-font-size-small: 1em !important;
        padding-left: 9%;
        --el-timeline-node-size-large: 1em !important;

        .el-card {
          margin: 0 auto !important;
          --el-card-padding: 20px 50px !important;
        }
      }
    }
  }
}

a {
  @include hyperlink(#99ff00,#ff0099);
}

iframe {
  position: absolute;
  bottom: 10%;
  right: 5%;
}

.blur {
  filter: blur(2px);
  transition: all 0.75s;
}

.blur:hover {
  transition: all 0.75s;
  filter: none;
}

.hide {
  opacity: 0;
}

.content {
  height: 100vh;
  position: relative;
  overflow-x: hidden;

  .textMove {
    transition: all 1s;
    opacity: 1 !important;
    transform: translateX(19.5vw) !important;
  }

  .character {
    height: 85vh;
    max-width: 30vw;
    position: absolute;
    bottom: 4vh;
    left: 5.5vw;
    //opacity: 0;

    &.fu {
      transition: all 1s;

      .text {
        position: absolute;
        top: -1vh;
        left: 2.5vw;
        text-align: left;
        font-size: 1.1em;
        //border: #ff0099 2px solid;
        //border-radius: 10px;
        padding: 3%;
        margin-top: 2%;
        opacity: 0;
        width: 72%;
        border-top-right-radius: 10px;
        border-top: 1.5px solid #99ff00;
        border-right: 1.5px solid #99ff00;

        transition: all 1s;
        transition-delay: 500ms;
        .el-card {
          --el-card-bg-color: rgba(0, 0, 0, 0.1) !important;
          border: 1px solid rgba(0, 0, 0, 0.15);
          margin-bottom: 0.25rem !important;
        }
        div {
          margin-bottom: 15px;
        }

        p:first-of-type {
          margin-top: 0;
        }

        p:last-of-type {
          margin-bottom: 0;
        }
      }

      .name {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.25);
        writing-mode: vertical-rl;
        font-size: 2.5em;
        left: 15%;
        top: 2%;
        padding: 12px 7px 18px 8px;
        border: 2px inset rgba(153, 255, 0, 0.5);
        border-radius: 5px;
        z-index: -1;
      }
    }

    img {
      height: 95%;
    }
  }

  .timeline {
    position: absolute;
    top: 15vh;
    right: 10vw;
    height: 80vh;
    width: 40vw;
    margin-top: -5vh;
    background-color: #00000040;
    border-radius: 10px;
    padding: 2.5% 0 0 4.5%;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: hidden;
    text-align: left;
    opacity: 0;
    animation-delay: 1500ms;

    .el-timeline {
      margin-left: -15% !important;
      width: 100%;
    }

    .el-timeline-item__timestamp {
      color: #ff0099 !important;
    }

    .el-timeline {
      --el-timeline-node-size-large: 18px !important;
      --el-text-color-secondary: #fff;
    }

    //
    //.el-timeline-item {
    //	width: 75%;
    //}
  }
}
</style>
