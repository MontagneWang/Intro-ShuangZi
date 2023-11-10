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
        await delay(1000);

        // 文本框动画 向右移动
        text.value!.classList.add("textMove");
        await delay(1200);

        // 人物属性文本动画 向上滑动显示
        document.querySelectorAll(".li .text .el-card").forEach((item, index) => {
          let delayTime = index * 70;
          (item as HTMLElement).style.animationDelay = `${delayTime}ms`;
          item.classList.remove("hide");
          item.classList.add("animate__animated", "animate__flipInX");
        });
        await delay(10);

        // fixme 不知道为什么出来的特别晚，可能和 global.scss 中定义的方法有关？
        // 显示时间线背景板
        timeline.value!.classList.add("animate__animated", "animate__fadeIn");
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

      // region 以前的实现方法
      // setTimeout(function () {
      //   text.value!.classList.add("textMove");
      //   setTimeout(function () {
      //     document
      //       .querySelectorAll(".text .el-card")
      //       .forEach((item, index) => {
      //         const delay = index * 50; // 计算每个元素的延迟时间
      //         (item as HTMLElement).style.animationDelay = `${delay}ms`; // 设置 animation-delay 属性
      //         item.classList.remove("hide");
      //         item.classList.add("animate__animated", "animate__fadeInUp");
      //       });
      //     setTimeout(function () {
      //       timeline.value!.classList.add("fade-in");
      //       setTimeout(function () {
      //         document
      //           .querySelectorAll(".li .el-timeline-item")
      //           .forEach((item, index) => {
      //             const delay = index * 500 + 2000; // 计算每个元素的延迟时间
      //             (item as HTMLElement).style.animationDelay = `${delay}ms`; // 设置 animation-delay 属性
      //             item.classList.remove("hide");
      //             item.classList.add(
      //               "animate__animated",
      //               "animate__fadeInUp"
      //             );
      //           });
      //       }, 100);
      //     }, 200);
      //   }, 500);
      // }, 1000);
      // endregion
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
    <div ref="li" class="character li">
      <!--<img alt="" src="../static/qili.png">-->
      <img
        alt="起礼"
        src="https://article.biliimg.com/bfs/article/e41acee7c137303a9743f04fc263a749999518c3.png@1e_1c.webp"
      />
      <div class="name">起 <span style="color: #ff0099">礼</span></div>
      <!-- <div ref="text" class="text">
        <div>&nbsp;<b>·</b>&nbsp;身高：140cm</div>
        <div>&nbsp;<b>·</b>&nbsp;体重：30kg</div>
        <div>&nbsp;<b>·</b>&nbsp;性别：女</div>
        <div>&nbsp;<b>·</b>&nbsp;年龄：<span class="blur">保密</span></div>
        <div>&nbsp;<b>·</b>&nbsp;生日：7月13日</div>
        <div>&nbsp;<b>·</b>&nbsp;代表物：凤凰</div>
        <div>
          &nbsp;<b>·</b>&nbsp;代表色：<span style="color: #ff0099"
            >#FF0099</span
          >
        </div>
        <div>&nbsp;<b>·</b>&nbsp;性格：活泼开朗，喜欢瞎折腾</div>
        <div>&nbsp;<b>·</b>&nbsp;声源：悠茗月尘</div>
        <div>
          &nbsp;<b>·</b>&nbsp;文字形象：发色外白内粉，有四条长发和一个侧马尾，绿瞳
        </div>
        <div>&nbsp;<b>·</b>&nbsp;人设画师：ideolo/酥妃</div>
      </div> -->
      <div ref="text" class="text">
        <el-card
          style="
            margin-bottom: 0.15em;
            background-image: linear-gradient(
              20deg,
              #ffffffcc 0%,
              #ffffffcc 75%,
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
          年龄：<span class="blur">保密</span>
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
          代表色：<span style="color: #ff0099">#FF0099</span>
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
            font-size: 1.05rem;
            background-image: linear-gradient(
              20deg,
              #ff0099aa 0%,
              #ffffffcc 20%,
              #ffffffcc 100%
            );
            background-size: 100% 100%;
            background-repeat: no-repeat;
          "
          body-style="padding:0.5em;"
          shadow="hover"
        >
          形象：发色外白内粉，有四条长发和一个侧马尾，绿瞳<br />性格：活泼开朗，喜欢瞎折腾
        </el-card>
      </div>
    </div>
    <div ref="timeline" class="timeline">
      <el-timeline>
        <el-timeline-item
          icon="FolderChecked"
          placement="top"
          timestamp="2016 年 3 月 19 日"
          type="primary"
        >
          起氏双子立项
        </el-timeline-item>
        <el-timeline-item
          icon="user"
          placement="top"
          timestamp="2016 年 6 月 18 日"
          type="warning"
        >
          双子立绘确定
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
              之后陆续更新了 Utau cvvc
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
          center
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
                title="点击前往单音阶声库下载地址"
                >1.0版</a
              >
              声库、<a
                href="https://pan.baidu.com/s/18LWNKq5hxL4P_xTp7Xv0Qg?pwd=ggv7"
                target="_blank"
                title="点击前往三音阶声库下载地址"
                >三音阶</a
              >
              声库
            </p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// @media screen and (min-width: 1280px) {
// 	.content {
// 		.name {
// 			font-size: 2.5em !important;
// 			left: 18% !important;
// 		}

// 		.text {
// 			left: 2.5vw !important;
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
    .name {
      font-size: 2.5em !important;
      left: 20% !important;
    }

    .text {
			top: 1vh !important;
      left: 4vw !important;
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

@media screen and (min-width: 1536px) {
  .content {
    .name {
      font-size: 3em !important;
      left: 20% !important;
    }

    .text {
      left: 4vw !important;
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
      left: 4vw !important;
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
  .content {
    .name {
      font-size: 5.5em !important;
      left: 20% !important;
    }

    .text {
      left: 3vw !important;
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
          width: 90% !important;
          margin: 0 auto !important;
          --el-card-padding: 20px 50px !important;
        }
      }
    }
  }
}

.blur {
  filter: blur(3.5px);
  transition: all 0.75s;
}

.blur:hover {
  transition: all 0.75s;
  filter: none;
}

a {
  text-decoration: none;
  /*正常的未被访问过的链接*/
  &:link {
    color: #ff0099;
  }

  &:hover {
    color: #99ff00;
  }

  /* 正在点击的链接*/
  &:visited {
    color: #ff0099;
  }

  &:hover:visited {
    color: #99ff00;
  }
}

.hide {
  opacity: 0;
}

.content {
  height: 100vh;
  position: relative;
  overflow-x: hidden;

  .move {
    transition: all 1s;
    opacity: 1 !important;
		// 修改人物运动结束位置
    right: 65.5vw !important;
  }

  .textMove {
    transition: all 1s;
    opacity: 1 !important;
    transform: translateX(18.5vw) !important;
  }

  .character {
    height: 85vh;
    max-width: 30vw;
    position: absolute;
    bottom: 4vh;
		// 注意，人物是从右往左滑动的，所以这里不能改成 left 属性，如果想改动位置需要修改动画结束的位置
		right: 2vw;
    opacity: 0;

    &.li {
      transition: all 1s;

      .text {
        position: absolute;
        top: -1.5vh;
        left: 2vw;
        text-align: left;
        font-size: 1.1em;
        //border: #ff0099 2px solid;
        //border-radius: 10px;
        // border: none; /* 去掉所有边框 */
        padding: 3%;
        margin-top: 2%;
        opacity: 0;
        width: 72%;
        transition: all 1s;
        border-top-right-radius: 10px;
        border-top: 1.5px solid #ff0099;
        border-right: 1.5px solid #ff0099;
        //animation-delay: 2000ms !important;

        div {
          // border-bottom: #ff009970 1.5px solid;
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
        left: 14%;
        top: 2%;
        padding: 12px 7px 18px 8px;
        border: 2px outset rgba(255, 0, 153, 0.5);
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
    animation-delay: 2000ms;

    .el-timeline {
      margin-left: -15% !important;
      width: 100%;
      --el-timeline-node-size-large: 18px;
      --el-text-color-secondary: #fff;
    }

    //
    //.el-timeline-item {
    //	width: 75%;
    //}
  }
}
</style>
