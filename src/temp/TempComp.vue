<script lang="ts" setup>
// document.querySelectorAll('.el-timeline-item__node--normal').forEach((item) => {
// 	item.classList.add('el-timeline-item__node--large')
// })
// document.querySelectorAll('.el-timeline-item').forEach((item, index) => {
// 	item.classList.add('hide')
// })

// fu.value!.classList.add("fade-in");
// text.value!.classList.add("textMove");
// document.querySelectorAll(".text .el-card").forEach((item, index) => {
//   let delayTime = index * 70;
//   (item as HTMLElement).style.animationDelay = `${delayTime}ms`;
//   item.classList.remove("hide");
//   item.classList.add("animate__animated", "animate__flipInX");
// });
// timeline2.value!.classList.add("fade-in");
// document
//   .querySelectorAll(".fu .el-timeline-item")
//   .forEach((item, index) => {
//     const delay = index * 500 + 2000; // 计算每个元素的延迟时间
//     (item as HTMLElement).style.animationDelay = `${delay}ms`; // 设置 animation-delay 属性
//     item.classList.remove("hide");
//     item.classList.add("animate__animated", "animate__fadeInUp");
//   });

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
</script>
// 询问屏幕分辨率
<!-- <script
  type="text/javascript"
  src="https://stats.screenresolution.org/site-report.js?siteid=1612"
  language="javascript"
></script> -->
<template>
  <!--<iframe border="0" frameborder="no" height=86 marginheight="0"-->
  <!--        marginwidth="0" src="//music.163.com/outchain/player?type=2&id=1957143939&auto=0&height=66"-->
  <!--        style="box-shadow: none!important;margin-left:-8px"-->
  <!--        width=86></iframe>-->

  <!-- <div ref="text" class="text">
				<div>&nbsp;<b>·</b>&nbsp;身高：142cm</div>
				<div>&nbsp;<b>·</b>&nbsp;体重：31kg</div>
				<div>&nbsp;<b>·</b>&nbsp;性别：男</div>
				<div>&nbsp;<b>·</b>&nbsp;年龄：12 <span class="blur">其实已经{{ age }}岁了</span></div>
				<div>&nbsp;<b>·</b>&nbsp;生日：7月13日</div>
				<div>&nbsp;<b>·</b>&nbsp;代表物：笛子</div>
				<div>&nbsp;<b>·</b>&nbsp;代表色：<span style="color: #99FF00">#99FF00</span></div>
				<div>&nbsp;<b>·</b>&nbsp;性格：孤僻寡言</div>
				<div>&nbsp;<b>·</b>&nbsp;声源：手指</div>
				<div>&nbsp;<b>·</b>&nbsp;文字形象：黑发带墨绿挑染，左侧有个小麻花辫，右侧有三角耳饰，四条眉毛，红瞳。</div>
				<div>&nbsp;<b>·</b>&nbsp;人设画师：ideolo/酥妃</div>
			</div> -->

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

  <!--<div class="blur">-->
  <!--	<p>本来是打算之后着手 SEO 收录，使其被搜索引擎收录，成为一个真正可访问的站点。</p>-->
  <!--	<p>不过有朋友提醒了我，这样一来就太正式了，好像有些许越俎代庖的意味。</p>-->
  <!--	<p>我也想了一下，作为双子的听众，确实做到这一步也差不多了。</p>-->
  <!--	<p>之后就让这个页面静候到访于此的有缘人吧。</p>-->
  <!--</div>-->
</template>

<style lang="scss" scoped></style>
