<script lang="ts" setup>
import { computed, onMounted, watch } from "vue";
import Modal from "../utils/ToastComp.vue";
import { ref } from "vue";

const showModal = ref(false);
let rightMenuContainer = ref<HTMLDivElement | null>(null);

// 设置整个菜单圆盘的半径 radius；并将小圆的直径存入浏览器根样式（以便 SCSS 调用）
// 1920÷12.8 = 150，此时小圆直径为 150*0.6 = 90;
let [menuRate, itemRate, offset] = [12.8, 0.6, 38]; // 设置大圆比例、小圆比例、小圆到圆心的偏移量
let radius = ref(window.innerWidth / menuRate);
document.documentElement.style.setProperty(
  "--item-diameter",
  `${radius.value * itemRate}px`
);

// 窗口缩放时 保持右键菜单尺寸大小不变
window.addEventListener("resize", () => {
  radius.value = window.innerWidth / menuRate;
  document.documentElement.style.setProperty(
    "--item-diameter",
    `${radius.value * itemRate}px`
  );
});

onMounted(() => {
  // 整个菜单圆盘元素
  let rightMenu = rightMenuContainer.value as HTMLElement;
  let zIndex = window.getComputedStyle(rightMenu).getPropertyValue("z-index");
  let zIndexTimer: ReturnType<typeof setTimeout> | number; // 关闭圆盘后设置 z-index 的计时器
  // 设置圆盘上每个 item 元素位置
  (document.querySelectorAll(".eachItem") as unknown as HTMLElement[]).forEach(
    (item, index) => {
      let angle = Math.PI * (-index / 3 - 0.5);
      item.style.left = `${50 - offset * Math.cos(angle)}%`;
      item.style.top = `${50 + offset * Math.sin(angle)}%`;
      /** angle = -0.5 * Math.PI - 2 * Math.PI * (1 / items.length) * index;
       * item.style.left = `${(50 - 35 * Math.cos(angle)).toFixed(4)}%`;
       * item.style.top = `${(50 + 35 * Math.sin(angle)).toFixed(4)}%`;
       *
       * 右键菜单圆盘 通过以下步骤来布局：
       * angle 代表每个 item 相对于圆盘中心的角度（以弧度为单位，例如 2π）
       * 计算每个 item 的 angle，代入三角函数来确定每个 item 在圆盘上的坐标
       * 从而将圆盘菜单的每个 item 均匀地分布在圆周上
       *
       * 0.5 * Math.PI 是 90 度的弧度值（1π = 180°）
       * 因为在极坐标系中，角度是从圆的最右侧（x轴）开始测量的，顺时针方向
       * -0.5 * Math.PI 实际上是将[起始点]设置到了圆盘的顶部（y轴）
       *
       * 2 * Math.PI * (1 / items.length) * index
       * ↑ 这句是计算当前项的角度位置（即相对于起始位置的偏移角度），其中：
       * 2 * Math.PI 是一个完整圆周的弧度（360°）
       * 1 / items.length 是每个项占据的圆的部分（如有 6 个项，则每个项占 1/6 圆）
       * 乘以 index 就得到了当前项的相对偏移量
       *
       * 计算出的 angle 是每个 item 的绝对角度位置
       * 通过 Math.cos(angle) 和 Math.sin(angle) 的三角函数
       * 可以将极坐标转换为笛卡尔坐标系（即屏幕上的 x 和 y 坐标）
       * 从而定位它们在圆盘上的确切位置
       * 50 - offset * Math.cos(angle) 计算了每个 item 的水平位置（left）
       * offset * Math.cos(angle) 是从中心点向左或向右的偏移量，单位是百分比
       * 其中 50% 是中心点（圆心的位置）
       * offset 代表的是圆盘菜单项距离圆心的百分比距离
       * 这个值决定了菜单项在圆盘上的半径大小
       * 因为百分比是相对于父容器的大小来计算的
       * offset 意味着每个 item 的中心会被放置在距离父容器中心点 offset% 宽度的位置
       * 如果没有任何偏移，菜单项将会被放置在父容器的中心
       * 通过从 50% 中 -/+ offset% 的水平和垂直偏移量，将每个 item 被定位在圆盘上
       * 形成一个以父容器中心为圆心，offset% 宽度为半径的圆环状布局
       * 因此，offset 可以根据设计需求进行调整，以改变菜单项围绕中心的距离（如35、38）
       */
    }
  );

  // 左键其他区域关闭菜单 如果[不是右键点击]or[点击的不是右键菜单的子元素]=>关闭菜单
  window.addEventListener("mousedown", e => {
    if (
      e.which !== 3 &&
      rightMenu.classList.contains("active") &&
      !isDescendant(rightMenu, e.target as HTMLElement)
    ) {
      closeRightMenu();
    }
  });

  // 右键开关菜单 若已有 active 类，则关闭 rightMenu，否则打开 rightMenu
  window.addEventListener("contextmenu", e => {
    // ctrl + 右键，呼出原版菜单
    if (e.ctrlKey) {
      return;
    }
    e.preventDefault();
    rightMenu.classList.contains("active")
      ? closeRightMenu()
      : showRightMenu(e);
  });

  // 关闭右键菜单 [z-index 取反，防止无法点击页面]
  function closeRightMenu() {
    rightMenu.classList.remove("active");
    clearTimeout(zIndexTimer);
    zIndexTimer = setTimeout(() => {
      rightMenu.style.zIndex = `-${zIndex}`;
    }, 400);
  }

  // 显示右键菜单
  function showRightMenu(e: MouseEvent) {
    clearTimeout(zIndexTimer);
    let top = e.clientY - radius.value;
    let left = e.clientX - radius.value;
    // 设置 rightMenu 的位置并显示，z-index 取反为正
    Object.assign(rightMenu.style, {
      zIndex: zIndex.toString(),
      top: `${top}px`,
      left: `${left}px`,
      display: "block",
      opacity: "0",
      transition: "opacity 0.5s",
    });
    // 使用 requestAnimationFrame 触发动画
    requestAnimationFrame(() => {
      Object.assign(rightMenu.style, {
        opacity: "1",
        display: "block",
      });
      rightMenu.classList.add("active");
    });
  }

  // 判断一个元素是否是另一个元素的后代元素
  function isDescendant(parent: ParentNode, child: HTMLElement): boolean {
    if (child.parentNode === parent) {
      return true;
    } else if (child.parentNode === null!) {
      return false;
    } else {
      return isDescendant(parent, child.parentNode as HTMLElement);
    }
  }
});
</script>

<template>
  <Teleport to="body">
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>欢迎加入『起氏双子』官方 QQ 群 ~</h3>
      </template>
      <template #body>
        <p>一群：234143343（起氏双子萌萌萌萌萌萌哒）</p>
        <p>二群：808408382（起氏双子团团团团团团转）</p>
      </template>
    </modal>
  </Teleport>

  <div ref="rightMenuContainer" class="rightMenu circleMenu">
    <div id="rightCircle" ref="rightCircle" class="circle">
      <div
        :style="{ height: radius * 2 + 'px', width: radius * 2 + 'px' }"
        class="item"
      >
        <a
          class="eachItem"
          href="https://space.bilibili.com/193181849"
          target="_blank"
        ></a>
        <a
          class="eachItem"
          href="https://weibo.com/7670516154"
          target="_blank"
        ></a>
        <a
          class="eachItem"
          href="https://www.bilibili.com/read/cv16388511"
          target="_blank"
        ></a>
        <a
          class="eachItem"
          href="/"
          target="_blank"
          @click.prevent="showModal = true"
        ></a>
        <a
          class="eachItem"
          href="https://space.bilibili.com/3494361480301170/dynamic"
          target="_blank"
        ></a>
        <a
          class="eachItem"
          href="mailto:ling.vc@foxmail.com"
          target="_blank"
        ></a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$bgUrl1: "https://article.biliimg.com/bfs/article/5456879a3ea125f5fdb6e1fd7f7e380d3e83dab1.jpg@1e_1c.webp";
$bgUrl2: "https://article.biliimg.com/bfs/article/6beb9223cabc578bf4478f342e6288cd6f6d3d6e.jpg@1e_1c.webp";
$bgUrl3: "https://article.biliimg.com/bfs/article/6f647cb01240601158f33c9bb265ba52b902ddea.jpg@1e_1c.webp";
$bgUrl4: "https://article.biliimg.com/bfs/article/5fe5a42f956d08fc5455c8321c3f758fa1e1aba4.jpg@1e_1c.webp";
$bgUrl5: "https://article.biliimg.com/bfs/article/07a346ab03789c65ec95b40846dfacb90d1d220e.jpg@1e_1c.webp";
$bgUrl6: "https://article.biliimg.com/bfs/article/48e203f62461899c8b4070907576005cd2944db9.jpg@1e_1c.webp";
$cont1: "B站\A账号";
$cont2: "微博\A账号";
$cont3: "官方\A百科";
$cont4: "加入\A Q群";
$cont5: "同人\A收集";
$cont6: "反馈\A Bug";
// 使用设置好的根样式 带有单位 ($eachHeight:90px;)
$eachHeight: var(--item-diameter);
.eachItem {
  border-radius: 50%;
  color: #eeeeee;
  display: block;
  position: absolute;
  text-align: center;
  transition: all 0.5s;
  overflow: hidden;
  width: $eachHeight;
  height: $eachHeight;
  margin-left: calc(-0.5 * $eachHeight);
  margin-top: calc(-0.5 * $eachHeight);
  // 避免使用除法
  &::before {
    width: 100%;
    height: 100%;
    line-height: 1;
    font-size: 2.3vw;
    opacity: 0;
    color: #000;
    background-color: #ffffff70;
    transition: opacity 0.5s ease;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center; // 水平居中
    align-items: center; // 垂直居中
    white-space: pre;
  }
  // 放大且变亮
  &:hover {
    z-index: 1000;
    transition: all 0.5s;
    width: calc(1.6 * $eachHeight);
    height: calc(1.6 * $eachHeight);
    margin-left: calc(-0.8 * $eachHeight);
    margin-top: calc(-0.8 * $eachHeight);
    background-size: calc(1.6 * $eachHeight);
    &::before {
      opacity: 1;
    }
  }
  // 边框颜色 + 文字颜色
  &:nth-child(2n-1) {
    border: 0.2vw #ff0099 solid;
    &::before {
      color: #ff0099;
    }
  }
  &:nth-child(2n) {
    border: 0.2vw #99ff00 solid;
    &::before {
      color: #99ff00;
      background-color: #00000070;
    }
  }
  // 每个 item 的文字内容
  $contents: $cont1, $cont2, $cont3, $cont4, $cont5, $cont6;
  @for $i from 1 through length($contents) {
    &:nth-child(#{$i})::before {
      content: nth($contents, $i); // content: $cont(i);
    }
  }
}
// .rightMenu.circleMenu => .circle => .item => a.eachItem
.rightMenu {
  margin: 0;
  padding: 0;
  display: none;
  position: fixed;
  z-index: 999;
  font-size: 1.3vw;
  .circle {
    margin: 0 auto;
    position: relative;
  }
  // 展示时动画
  &.active .item {
    opacity: 1;
    transform: scale(1) rotate(0);
    -transform: scale(1) rotate(0);
    -webkit-transform: scale(1) rotate(0);
    -moz-transform: scale(1) rotate(0);
  }
  .item {
    position: relative;
    border-radius: 50%;
    opacity: 0;
    transform-origin: 50% 50%;
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    transform: scale(0.1) rotate(-270deg);
    -transform: scale(0.1) rotate(-270deg);
    -webkit-transform: scale(0.1) rotate(-270deg);
    -moz-transform: scale(0.1) rotate(-270deg);
    transition: all 0.4s ease-out;
    -webkit-transition: all 0.4s ease-out;
    -moz-transition: all 0.4s ease-out;
  }
  // 设置每个 item 的背景 如果想要图片居中放大，把下方 a 样式放入上方 .item 类就行
  a {
    background-size: cover;
    $bgUrls: $bgUrl1, $bgUrl2, $bgUrl3, $bgUrl4, $bgUrl5, $bgUrl6;
    @for $i from 1 through length($bgUrls) {
      &:nth-of-type(#{$i}) {
        background-image: url(nth($bgUrls, $i)); // url($bgUrl(i))
      }
    }
  }
}
</style>
