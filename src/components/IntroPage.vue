<script lang="ts" setup>
import {onMounted} from "vue";
import IntroPageFirst from "./IntroPageFirst.vue";
import TempComp from "../temp/TempComp.vue";

let options = {}

onMounted(() => {
	// 隐藏签名 + 报错
	(document.querySelector('.fp-watermark') as HTMLElement).style.display = 'none'
	// todo 解锁
	console.clear()
})
</script>

<template>
	<div class="full-page">
		<full-page ref="fullpage" :options="options">
			<div class="section">
				<intro-page-first/>
			</div>
			<div class="section">
				<temp-comp/>
			</div>
			<!--<div class="section">-->
			<!--	<button class="prev" @click="$refs.fullpage.api.moveSectionUp()">-->
			<!--		Prev-->
			<!--	</button>-->
			<!--	Section 3-->
			<!--</div>-->
		</full-page>
	</div>
</template>

<style lang="scss" scoped>
.full-page {
	text-align: center;
}
</style>
