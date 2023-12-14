<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Modal from "../utils/ToastComp.vue";

const showModal = ref(false);
let fu = ref<HTMLDivElement | null>(null);
let li = ref<HTMLDivElement | null>(null);

onMounted(() => {
  // 判断元素是否在视窗内
  let observer3 = new IntersectionObserver((entries3) => {
    entries3.forEach((entry) => {
      // 元素出现在视窗内
      if (entry.isIntersecting) {
        setTimeout(() => {
          fu.value!.classList.add("fade-in");
          li.value!.classList.add("fade-in");
        }, 400);
      }
    });
  });
  observer3.observe(fu.value as HTMLDivElement);
});
</script>

<template>
  <Teleport to="body">
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>关于本站</h3>
      </template>
      <template #body>
        <p>
          ⚠️ 请注意：本站点<span style="color: #ff0099">并非</span
          >官方站点，仅由爱好者创建，旨在为到访者提供「起氏双子」的相关信息与资源。
        </p>
        <p>
          本站点将尽力确保内容的准确性和时效性，但仍可能会出现有失偏颇的表述，这<span
            style="color: #ff0099"
            >并不代表</span
          >官方立场或意见。
        </p>
        <p>
          如果您需要反馈页面中存在的<span style="color: #ff0099">错误/错位</span
          >，可以通过右键菜单中的[<a
            href="mailto:ling.vc@foxmail.com"
            style="color: #ff0099"
            target="_blank"
            title="反馈Bug"
            >反馈Bug</a
          >]联系我，我会尽可能及时修正。
        </p>
        <p>
          如果您是<span style="color: #ff0099">官方</span
          >且需要回收该域名，可以通过[<a
            href="mailto:ling.vc@foxmail.com"
            style="color: #ff0099"
            target="_blank"
            title="邮箱：ling.vc@foxmail.com"
            >邮箱</a
          >]联系我，我会将当前域名转入到您所提供的域名注册商。
        </p>
      </template>
    </modal>
  </Teleport>

  <div class="content">
    <div class="outro">
      <h2>每一位虚拟歌手都因爱诞生，由爱成长</h2>
      <h2>我们将情感寄托于他们的歌声之中</h2>
      <h2>借由他们之口，唱出心中所思</h2>
      <h2>祝我们的双子越来越好，听众越来越多🎉</h2>
      <br />
      <br />
      <br />
      <br />
      <p>
        您可以通过<span style="color: #ff0099" tilte="尝试点击你的鼠标右键"
          >「右键菜单」</span
        >了解更多双子的信息
      </p>
      <p>
        也可以点击 [<span @click="showModal = !showModal" style="color: #ff0099"
          >此处</span
        >] 查看关于本站点的相关信息
      </p>
    </div>

    <div ref="fu" class="character fu">
      <img
        alt="起复"
        src="https://article.biliimg.com/bfs/article/ce971427853edff10f6c81718ac4ae0ceff0cd41.png@1e_1c.webp"
      />
    </div>

    <div ref="li" class="character li">
      <img
        alt="起礼"
        src="https://article.biliimg.com/bfs/article/e41acee7c137303a9743f04fc263a749999518c3.png@1e_1c.webp"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
// @media screen and (min-width: 1280px) {
// 	.content{
// 		font-size: 1.15em;
// 		.character {
// 			&.fu {
// 				left: -0.5vw!important;
// 			}

// 			&.li {
// 				right: 1vw!important;
// 			}
// 		}
// 	}
// }
@media screen and (min-width: 1366px) {
  .content {
    font-size: 1.25em;
    .character {
      &.fu {
        left: 0 !important;
      }

      &.li {
        right: 0 !important;
      }
    }
  }
}

@media screen and (min-width: 1440px) {
  .content {
    font-size: 1.45em;
    .character {
      &.fu {
        left: 0 !important;
      }

      &.li {
        right: 0 !important;
      }
    }
  }
}

@media screen and (min-width: 1536px) {
  .content {
    font-size: 1.4em;
    .character {
      &.fu {
        left: 5vw !important;
      }
      &.li {
        right: 5vw !important;
      }
    }
  }
}

@media screen and (min-width: 1920px) {
  .content {
    font-size: 1.75em;
    .character {
      &.fu {
        left: 0vw !important;
      }

      &.li {
        right: 1vw !important;
      }
    }
  }
}

@media screen and (min-width: 2560px) {
  .content {
    font-size: 2.3em;
    .character {
      &.fu {
        left: 0vw !important;
      }

      &.li {
        right: 1vw !important;
      }
    }
  }
}

a {
  text-decoration: none;
  color: #000;
}

.content {
  height: 100vh;
  position: relative;
  overflow: hidden;

  .outro {
    width: 50vw;
    margin: 33vh auto 24vh;
  }

  .character {
    opacity: 0;
    height: 85vh;
    position: absolute;
    bottom: 2vh;

    &.fu {
      opacity: 0;
      left: 4vw;
    }

    &.li {
      right: 5vw;
      opacity: 0;
    }

    img {
      height: 95%;
    }
  }
}
</style>
