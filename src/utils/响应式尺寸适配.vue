<template>
	<div id="screen"
	     :style="{
      width: `${style.width}px`,
      height: `${style.height}px`,
      transform: `${style.transform}`
		}">
		<!--todo 这里可以更改为一个组件，然后插入-->
		<div class="box">
			
		</div>
	</div>
</template>

<script lang="ts" setup>

import {onBeforeUnmount, onMounted, reactive} from "vue";

let style = reactive({
	width: 1920,
	height: 1080,
	transform: 'scaleY(1) scaleX(1) translate(-50%, -50%)'
})

let getScale = () => {
	const w = window.innerWidth / style.width
	const h = window.innerHeight / style.height
	return {x: w, y: h}
}
let setScale = () => {
	const scale = getScale()
	style.transform = `scaleY(${scale.y}) scaleX(${scale.x}) translate(-50%, -50%)`
}
onMounted(() => {
	setScale()
	window.addEventListener('resize', setScale)
})

onBeforeUnmount(() => {
	window.removeEventListener('resize', setScale)
})
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}

#screen {
	z-index: 100;
	transform-origin: 0 0;
	position: fixed;
	left: 50%;
	top: 50%;
	/*transition: 0.3s;*/
}

.box {
	width: 100%;
	height: 100%;
}
</style>