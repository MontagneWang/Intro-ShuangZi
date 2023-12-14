<script lang="ts" setup>
import { onMounted, ref } from "vue";

let logo = ref<HTMLDivElement | null>(null);
let fu = ref<HTMLDivElement | null>(null);
let li = ref<HTMLDivElement | null>(null);

onMounted(() => {
  // 判断元素是否在视窗内
  let observer0 = new IntersectionObserver((entries0) => {
    entries0.forEach((entry) => {
      // 元素出现在视窗内
      if (entry.isIntersecting) {
        fu.value!.classList.add("slide-from-left");
        li.value!.classList.add("slide-from-right");
      }
    });
  });

  observer0.observe(logo.value as HTMLDivElement);
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
        <div class="name fu">起 <span style="color: #99ff00">复</span></div>
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

        <div class="intro">
          <h2>
            你好！这里是『<a
              href="https://space.bilibili.com/193181849"
              target="_blank"
              title="点击前往 起氏双子 官方"
              class="link"
            >
              <span>起</span>
              <span>氏</span>
              <span>双</span>
              <span>子</span> </a
            >』的介绍页面
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
          <p>如果您是第一次了解到『起氏双子』，不妨听听下面这首歌曲</p>
          <br />
          <iframe
            border="0"
            title="要将等待换成什么"
            frameborder="no"
            height="86"
            marginheight="0"
            marginwidth="0"
            src="//music.163.com/outchain/player?type=2&id=1957143939&auto=0&height=66"
            style="box-shadow: none !important; margin-left: -8px"
            width="450"
          ></iframe>
        </div>
      </main>

      <div ref="li" class="character li">
        <img
          alt="起礼"
          src="https://article.biliimg.com/bfs/article/e41acee7c137303a9743f04fc263a749999518c3.png@1e_1c.webp"
        />
        <div class="name li">起 <span style="color: #ff0099">礼</span></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// @media screen and (min-width: 1280px) {
// 	.fu .name {
// 		right: 14% !important;
// 		font-size: 2.5rem !important;
// 	}
// 	.li .name {
// 		left: 16% !important;
// 		top: 3% !important;
// 		font-size: 2.5rem !important;
// 	}
// 	.intro {
// 		width: 40vw !important;
// 		font-size: 1rem !important;
// 		padding: 1.5% 1.5% 1% !important; // 最下方为 1%
// 	}
// 	.logo {
// 		img {
// 			margin-top: 10vh !important;
// 		}
// 	}
// 	iframe {
// 		width: 25vw !important;
// 	}
// }
// @media screen and (min-width: 1366px) {
//   .fu .name {
//     right: 16% !important;
//     font-size: 3rem !important;
//   }
//   .li .name {
//     left: 16% !important;
//     top: 3% !important;
//     font-size: 3rem !important;
//   }
//   .intro {
//     width: 42vw !important;
//     font-size: 1.1rem !important;
//     padding: 1.5% 1.5% 1% !important; // 最下方为 1%
//   }
//   .logo {
//     img {
//       margin-top: 10vh !important;
//     }
//   }
//   iframe {
//     width: 25vw !important;
//   }
// }

// @media screen and (min-width: 1440px) {
//   .fu .name {
//     right: 18% !important;
//     font-size: 3rem !important;
//   }
//   .li .name {
//     left: 18% !important;
//     top: 5% !important;
//     font-size: 3rem !important;
//   }
//   .intro {
//     width: 35vw !important;
//     font-size: 1.1rem !important;
//     padding: 1.5% 1.5% 1% !important; // 最下方为 1%
//   }
//   .logo {
//     img {
//       margin-top: 10vh !important;
//     }
//   }
//   iframe {
//     width: 25vw !important;
//   }
// }

// @media screen and (min-width: 1500px) {
//   .fu .name {
//     right: 16% !important;
//     font-size: 3rem !important;
//   }
//   .li .name {
//     left: 16% !important;
//     top: 3% !important;
//     font-size: 3rem !important;
//   }
//   .intro {
//     width: 40vw !important;
//     font-size: 1.2rem !important;
//     padding: 1.5% 1.5% 1% !important; // 最下方为 1%
//   }
//   .logo {
//     img {
//       margin-top: 10vh !important;
//     }
//   }
//   iframe {
//     width: 25vw !important;
//   }
// }

// @media screen and (min-width: 1920px) {
//   .fu .name {
//     right: 18% !important;
//     font-size: 3.5rem !important;
//   }
//   .li .name {
//     left: 18% !important;
//     font-size: 3.5rem !important;
//   }
//   .intro {
//     width: 43vw !important;
//     font-size: 1.6rem !important;
//     padding: 1.5% 1.5% 1% !important; // 最下方为 1%
//   }
//   .logo {
//     img {
//       margin-top: 10vh !important;
//     }
//   }
//   iframe {
//     width: 30vw !important;
//   }
// }

// @media screen and (min-width: 2560px) {
//   .fu .name {
//     right: 18% !important;
//     font-size: 5rem !important;
//   }
//   .li .name {
//     left: 18% !important;
//     font-size: 5rem !important;
//   }
//   .intro {
//     margin-top: 16vh !important;
//     width: 42vw !important;
//     font-size: 2.3rem !important;
//     padding: 1.5% 1.5% 1% !important; // 最下方为 1%
//   }
//   .logo {
//     img {
//       margin-top: 10vh !important;
//     }
//   }
//   iframe {
//     width: 30vw !important;
//   }
// }

a {
  text-decoration: none;

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

.content {
  height: 100vh;
  overflow: hidden;
  .container {
    width: 100vw;
    height: 88vh;
    margin: 6vh auto;
    text-align: left;
    display: flex;
    position: relative;
    top: 7%;
    left: 2.5%;

    .character {
      height: 92%;
      position: relative;
      opacity: 0;
      //max-width: 30vw;

      &.fu {
        .name {
          @include name;
          right: 14%;
          top: 30%;
          border: 2px inset rgba(153, 255, 0, 0.7);
        }
      }
      &.li {
        .name {
          @include name;
          left: 15%;
          top: 3%;
          border: 2px outset rgba(255, 0, 153, 0.7);
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
        animation: fade-in 0.75s ease 0.5s forwards;
      }

      .intro {
        font-size: 1.2rem;
        max-height: 50vh;
        min-height: 50vh;
        margin: 3vh 0;
        padding: 0% 4%;
        opacity: 0;
        overflow: hidden;
        animation: fade-in 1s ease 3.5s forwards;
        border-radius: 7px;
        border: #ff0099 2px solid;
        border-bottom-color: #99ff00;
        border-left-color: #99ff00;
        background-color: rgba(0, 0, 0, 0.15);

        p:last-of-type {
          margin-bottom: -1rem;
        }
      }
    }
  }
}
</style>
