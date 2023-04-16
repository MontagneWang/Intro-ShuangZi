<script lang="ts" setup>
import IntroPage from "./components/IntroPage.vue";
import TheRightMenu from "./components/TheRightMenu.vue";

if (window.innerWidth <= 768) { // 768是一个常用的移动设备屏幕宽度阈值
	document.body.innerHTML = '<br><p>非常抱歉，页面暂时尚未适配移动端</p><br><p>还请移步至 PC 端访问</p>';
}
</script>

<template>
	<the-right-menu/>
	<intro-page/>
</template>

<style lang="scss" scoped>
html * {
	font-family: LXGW WenKai Lite, serif !important;
}

</style>
