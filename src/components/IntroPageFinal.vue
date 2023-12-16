<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Modal from "../utils/ToastComp.vue";
import createObserver, { delay } from "../utils/observer";

const showModal = ref(false);

let [li, fu] = [
  ref<HTMLDivElement | null>(null),
  ref<HTMLDivElement | null>(null),
];

onMounted(() => {
  createObserver(fu.value as HTMLDivElement, async () => {
    await delay(500);
    fu.value!.classList.add("fade-in");
    li.value!.classList.add("fade-in");
  });
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
      <div class="more">
        <p>
          您可以通过<span style="color: #ff0099" tilte="尝试点击你的鼠标右键"
            >「右键菜单」</span
          >了解更多双子的信息
        </p>
        <p style="margin-top: -0.8vw;">
          也可以点击 [<span
            @click="showModal = !showModal"
            style="color: #ff0099"
            >此处</span
          >] 查看关于本站点的相关信息
        </p>
      </div>
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

a {
  color: #000;
}

.content {
  position: relative;

  .outro {
    margin: 29vh auto 0;
    font-size: 1.5vw;
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
