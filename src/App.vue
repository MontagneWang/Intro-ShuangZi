<script lang="ts" setup>
import IntroPage from "./components/IntroPage.vue";
import TheRightMenu from "./components/TheRightMenu.vue";

if (window.innerWidth <= 768) {
	window.location.href = 'https://space.bilibili.com/193181849';
}

// 随机返回一个字符串
function randomChoose(str1: string, str2: string) {
	if (Math.random() >= 0.5) {
		return str1;
	} else {
		return str2;
	}
}
// 标题切换
let t: number | undefined
let title: string | undefined
document.addEventListener('visibilitychange', function () {
	if (document.visibilityState === 'hidden') {
		if (document.title !== '欢迎回来') {
			title = document.title
		}
		document.title = randomChoose('起氏双子团团团团团团转','起氏双子萌萌萌萌萌萌哒')
		clearTimeout(t)
	}
	// 可以直接 else if
	if (document.visibilityState === 'visible') {
		document.title = '欢迎回来✧(≖ ◡ ≖✿)'
		if (title === undefined) {
			title = '这里是起氏双子~'
		}
		t = setTimeout(function () {
			document.title = title as string
		}, 1000)
	}
})

// 控制台输出
document.addEventListener('keydown', e => {
	if (e.code === 'F12' || ((e.code === 'KeyJ' || e.code === 'KeyI') && (e.ctrlKey || e.metaKey) && (e.shiftKey || e.altKey))) {
		console.clear()
		console.log(` %c「要将等待换成什么 我早就数不清楚了」\n%c「但愿你走向我那个时刻 一切都没改变过」`,
				`color: #99FF00; font-size: 16px;margin: 10px 0 5px 0 ;`,
				'color: #FF0099; font-size: 16px;margin: 5px 0 15px 0 ;',
		);
	}
})


</script>

<template>
	<the-right-menu/>
	<intro-page/>
</template>

<style lang="scss">
html * {
	font-family: LXGW WenKai Lite, serif !important;
	//font-size: 2rem!important;
}

*{
	user-select: none;
}
</style>
