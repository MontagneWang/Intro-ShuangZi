<script setup lang="ts">
import {onMounted} from "vue";
import IntroPageFirst from "./IntroPageFirst.vue";

let options = {}

onMounted(() => {
	// 隐藏签名 + 报错
	(document.querySelector('.fp-watermark') as HTMLElement).style.display = 'none'
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
				<h2>之后的介绍页还在努力开发中……</h2>
				<br/>
				<div>如果您是官方且需要回收该域名，可以通过 <a href="mailto:ling.vc@foxmail.com" target="_blank" title="邮箱：ling.vc@foxmail.com">邮箱</a>
					联系我，我会将当前域名转入到您所提供的域名注册商
				</div>
				<br/>
				<div>如果您是双子的听众，我想请您先「保密」，等页面开发完再来坐坐</div>
				<div><del>过多注视压力会严重影响开发效率😢</del></div>
				<br/>
				<div>如果您是纯路人，我想请您听听这首音乐</div>
				<br/>
				<iframe border="0" frameborder="no" height=100
				        marginheight="0" marginwidth="0"
				        src="//music.163.com/outchain/player?type=2&id=2017144891&auto=0&height=66"
				        width=430></iframe>
				<!--<button class="prev" @click="$refs.fullpage.api.moveSectionUp()">-->
				<!--	Prev-->
				<!--</button>-->
				<!--Section 2-->
				<!--<button class="next" @click="$refs.fullpage.api.moveSectionDown()">-->
				<!--	Next-->
				<!--</button>-->
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
.full-page{
	text-align: center;
}
</style>
