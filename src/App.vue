<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
	<div class="bg">
		<h1>
			你好！这里是
			<a href="https://space.bilibili.com/193181849"
			   target="_blank">
				<img alt="起氏双子"
				     src="./assets/Logo.png"
				     title="assets/Logo.png">
			</a>
			的介绍页面
		</h1>
		<h2>不过还在努力开发中……</h2>
		<br/>
		<div>如果您是官方且需要回收该域名，可以通过 <a href="mailto:ling.vc@foxmail.com" target="_blank" title="邮箱：ling.vc@foxmail.com">邮箱</a>
			联系到我，我会将当前域名转入到您所提供的域名注册商
		</div>
		<br/>
		<div>如果您是纯路人，我想请您听听这首音乐</div>
		<br/>
		<iframe border="0" frameborder="no" height=100
		        marginheight="0" marginwidth="0" src="//music.163.com/outchain/player?type=2&id=1957143939&auto=0&height=66"
		        width=430></iframe>
		<div class="time">页面最后修改日期：2023-04-15</div>
	</div>
</template>

<style scoped>
html * {
	font-family: LXGW WenKai Lite, serif !important;
}

img {
	height: 1em;
	margin: 0;
	transform: translateY(0.15em);
}

.time {
	text-align: right;
}

</style>
