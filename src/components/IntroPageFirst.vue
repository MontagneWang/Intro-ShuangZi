<script lang="ts" setup>
import { onMounted, ref } from "vue";
import createObserver, { delay } from "../utils/observer";

let [logo, fu, li, nameLi, nameFu, intro] = [
  ref<HTMLDivElement | null>(null),
  ref<HTMLDivElement | null>(null),
  ref<HTMLDivElement | null>(null),
  ref<HTMLDivElement | null>(null),
  ref<HTMLDivElement | null>(null),
  ref<HTMLDivElement | null>(null),
];

onMounted(() => {
  createObserver(logo.value as HTMLDivElement, async () => {
    await delay(750);
    logo.value!.classList.add("fade-in");
    await delay(500);
    fu.value!.classList.add("slide-from-left");
    li.value!.classList.add("slide-from-right");
    await delay(1500);
    nameLi.value!.classList.add("fade-in");
    nameFu.value!.classList.add("fade-in");
    await delay(1000);
    intro.value!.classList.add("fade-in");
  });
});
</script>

<template>
  <div class="content">
    <div class="container">
      <div ref="fu" class="character fu">
        <img
          alt="起复"
          src="https://article.biliimg.com/bfs/article/ce971427853edff10f6c81718ac4ae0ceff0cd41.png@1e_1c.webp"
        />
        <div ref="nameFu" class="name fu">
          起 <span style="color: #99ff00">复</span>
        </div>
      </div>

      <main class="main">
        <div ref="logo" class="logo">
          <a
            href="https://space.bilibili.com/193181849"
            target="_blank"
            title="点击前往 起氏双子 官方"
          >
            <img
              alt="logo"
              src="https://article.biliimg.com/bfs/article/fb8ddc21ba9a464df32a226acdef3ad740c8bff5.png@1e_1c.webp"
            />
          </a>
        </div>

        <div ref="intro" class="intro">
          <h2>
            欢迎光临，这里是『<a
              href="https://space.bilibili.com/193181849"
              target="_blank"
              title="点击前往 起氏双子 官方"
              class="link"
            >
              <span>起</span>
              <span>氏</span>
              <span>双</span>
              <span>子</span> </a
            >』的介绍页面~
          </h2>
          <h3>
            『起氏双子』是 <span class="text-underline qifu">起复</span> 与
            <span class="text-underline qili">起礼</span> 的合称
          </h3>
          <p>二人是以「歌声合成软件」为基础的「中文声库」与「虚拟形象」</p>
          <p>
            <span class="text-underline qili">起礼</span>与<span
              class="text-underline qifu"
              >起复</span
            >是双胞胎，其中<span class="text-underline qili">起礼</span
            >是姐姐，<span class="text-underline qifu">起复</span>是弟弟
          </p>
          <p>名字源于论语中的克己复礼，设计灵感源于「箫韶九成 凤凰来仪」</p>
          <p>如果您是第一次了解到『起氏双子』，不妨边听这首歌边浏览本站</p>
          <br />
          <iframe
            border="0"
            title="要将等待换成什么"
            frameborder="no"
            marginheight="0"
            marginwidth="0"
            src="//music.163.com/outchain/player?type=2&id=1957143939&auto=0&height=66"
            style="width: 30vw; height: 10vh; margin-left: -0.5vw"
          ></iframe>
        </div>
      </main>

      <div ref="li" class="character li">
        <img
          alt="起礼"
          src="https://article.biliimg.com/bfs/article/e41acee7c137303a9743f04fc263a749999518c3.png@1e_1c.webp"
        />
        <div ref="nameLi" class="name li">
          起 <span style="color: #ff0099">礼</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  &:link,
  &:visited {
    span:nth-child(1),
    span:nth-child(3) {
      color: #ff0099;
    }

    span:nth-child(2),
    span:nth-child(4) {
      color: #99ff00;
    }
  }

  &:hover {
    span:nth-child(1),
    span:nth-child(3) {
      color: #99ff00;
    }

    span:nth-child(2),
    span:nth-child(4) {
      color: #ff0099;
    }
  }
}
.link {
  @include underline(#99ff00, #ff0099);

  &:hover {
    @include underline(#ff0099, #99ff00);
  }
}
.qifu {
  @include underline(#99ff00, #99ff00);
}
.qili {
  @include underline(#ff0099, #ff0099);
}
.content .container {
  width: 100vw;
  position: relative;
  top: 7%;
  left: 2.5%;

  .character {
    height: 92%;
    opacity: 0;
    position: relative;
    //max-width: 30vw;

    &.fu {
      .name {
        @include name;
        opacity: 0;
        right: 14%;
        top: 30%;
        border: 0.25vw inset rgba(153, 255, 0, 0.7);
      }
    }
    &.li {
      .name {
        @include name;
        opacity: 0;
        left: 15%;
        top: 3%;
        border: 0.25vw outset rgba(255, 0, 153, 0.7);
      }
    }
  }
  .main {
    width: 40vw;
    max-width: 40vw;
    height: 80vh;

    .logo {
      opacity: 0;
      transform: translateY(-4vh);
      height: 15vh;
      text-align: center;
    }

    .intro {
      font-size: 1.2vw;
      max-height: 49vh;
      min-height: 49vh;
      margin: 4vh 0;
      padding: 0% 4%;
      opacity: 0;
      overflow: hidden;
      border-radius: 0.7vw;
      border: #ff0099 0.25vw solid;
      border-bottom-color: #99ff00;
      border-left-color: #99ff00;
      background-color: rgba(0, 0, 0, 0.15);

      p:last-of-type {
        margin-bottom: -1rem;
      }
    }
  }
}
</style>
