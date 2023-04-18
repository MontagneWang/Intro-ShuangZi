<script lang="ts" setup>
import {onMounted} from "vue";
import IntroPageFirst from "./IntroPageFirst.vue";
import IntroPageSecond from "./IntroPageSecond.vue";
import TempComp from "../temp/TempComp.vue";

let options = {}

onMounted(() => {
	// 隐藏签名 + 报错
	(document.querySelector('.fp-watermark') as HTMLElement).style.display = 'none'
	console.clear()
})
</script>

<template>
	<div class="logo2">
		<!--<img alt="" src="../static/logo2.png">-->
		<img alt="" src="https://article.biliimg.com/bfs/article/039f61c59927cd7a98f656e46571f617c224ab4c.png">
	</div>
	<div class="full-page">
		<div class="mask"></div>
		<full-page ref="fullpage" :options="options">

			<div class="section">
				<intro-page-first/>
			</div>
			<!--<div class="section">-->
			<!--	<intro-page-second/>-->
			<!--</div>-->
			<div class="section">
				<temp-comp/>
				<!--<button class="prev" @click="$refs.fullpage.api.moveSectionUp()">-->
				<!--	Prev-->
				<!--</button>-->
			</div>
		</full-page>
	</div>
</template>

<style lang="scss" scoped>
.full-page {
	text-align: center;
	background: url("https://article.biliimg.com/bfs/article/1cfc75da378f55aa0a355da4dfc4426a44a74465.jpg") no-repeat fixed bottom;
	background-size: cover;
}

.mask {
	width: 84vw;
	height: 88vh;
	position: fixed;
	left: 8vw;
	top: 6vh;
	background-color: #ffffffa0;
	border-radius: 10px;
}

.logo2 {
	height: 15vh;
	top: 4vh;
	left: 4vh;
	position: fixed;
	z-index: 1;

	img {
		height: 100%;
	}
}

</style>
