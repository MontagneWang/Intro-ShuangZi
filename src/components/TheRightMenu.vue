<script lang="ts" setup>
import {onMounted} from "vue";
import Modal from '../utils/ToastComp.vue'
import {ref} from 'vue'
// toast
const showModal = ref(false)

let rightMenu = ref<HTMLDivElement | null>(null)

// 全局变量，整个圆盘的半径 radius
const radius = 110;
onMounted(() => {
	const items = document.querySelectorAll('.eachItem') as unknown as HTMLElement[];
	const zIndex = window.getComputedStyle(rightMenu.value!).getPropertyValue('z-index');
	// @ts-ignore
	let zIndexTimer: string | number | NodeJS.Timeout | undefined
	// 设置每个元素位置
	items.forEach((item, index) => {
		item.style.left = `${(50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / items.length) * index * Math.PI)).toFixed(4)}%`;
		item.style.top = `${(50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / items.length) * index * Math.PI)).toFixed(4)}%`;
	});
	// （左键其他区域关闭菜单）如果[不是右键点击]或者[点击的元素不是右键菜单的子元素]，则关闭菜单
	window.addEventListener('mousedown', e => {
		if (e.which !== 3
				&& rightMenu.value!.classList.contains("active")
				&& !isDescendant(rightMenu.value as HTMLElement, e.target as HTMLElement)) {
			closeRightMenu()
		}
	});
	// 右键点击，若已有 active 类，则关闭 rightMenu，否则打开 rightMenu
	window.addEventListener('contextmenu', e => {
		// ctrl + 右键，呼出原版菜单
		if (e.ctrlKey) {
			return
		}
		e.preventDefault();
		rightMenu.value!.classList.contains("active") ?
				closeRightMenu() : showRightMenu(e);
	})

	// 关闭右键菜单，z-index 取反 防止无法点击页面
	function closeRightMenu() {
		rightMenu.value!.classList.remove("active");
		clearTimeout(zIndexTimer)
		zIndexTimer = setTimeout(()=>{
			rightMenu.value!.style.zIndex = `-${zIndex}`
		},400)
	}

	// 显示右键菜单
	function showRightMenu(e: MouseEvent) {
		clearTimeout(zIndexTimer)
		let top = e.clientY - radius;
		let left = e.clientX - radius;
		// 设置 rightMenu 的位置并显示，z-index 取反为正
		rightMenu.value!.style.zIndex = zIndex
		rightMenu.value!.style.top = top + 'px';
		rightMenu.value!.style.left = left + 'px';
		rightMenu.value!.style.display = 'block';
		rightMenu.value!.style.opacity = String(0);
		rightMenu.value!.style.transition = 'opacity 0.5s';
		// 使用requestAnimationFrame触发动画
		requestAnimationFrame(() => {
			rightMenu.value!.style.opacity = String(1);
			rightMenu.value!.classList.add("active");
			rightMenu.value!.style.display = "block";
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
})


</script>

<template>
	<Teleport to="body">
		<!-- 使用这个 modal 组件，传入 prop -->
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

	<div ref="rightMenu" class="rightMenu circleMenu">
		<div id="rightCircle" ref="rightCircle"  class="circle">
			<div :style="{height:radius*2+'px',width:radius*2+'px'}" class="item">
				<a class="eachItem" href="https://space.bilibili.com/193181849" target="_blank"></a>
				<a class="eachItem" href="https://weibo.com/7670516154" target="_blank"></a>
				<a class="eachItem" href="https://www.bilibili.com/read/cv16388511" target="_blank"></a>
				<!--加群改为 toast 提醒，展示两个群号-->
				<a class="eachItem" href="/" target="_blank" @click.prevent="showModal = true"></a>
				<a class="eachItem" href="https://space.bilibili.com/193181849/video" target="_blank"></a>
				<a class="eachItem" href="mailto:ling.vc@foxmail.com" target="_blank"></a>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>

.rightMenu {
	margin: 0;
	padding: 0;
	display: none;
	position: fixed;
	z-index: 999;

	.circle {
		//height: 200px;
		//width: 200px;
		margin: 0 auto;
		position: relative;
	}

	.item {
		//height: 200px;
		//width: 200px;
		position: relative;
		border-radius: 50%;
		opacity: 0;
		-webkit-transform-origin: 50% 50%;
		-moz-transform-origin: 50% 50%;
		transform-origin: 50% 50%;
		-webkit-transform: scale(0.1) rotate(-270deg);
		-moz-transform: scale(0.1) rotate(-270deg);
		-transform: scale(0.1) rotate(-270deg);
		-webkit-transition: all 0.4s ease-out;
		-moz-transition: all 0.4s ease-out;
		transition: all 0.4s ease-out;
	}
}

.active .item {
	opacity: 1;
	-webkit-transform: scale(1) rotate(0);
	-moz-transform: scale(1) rotate(0);
	-transform: scale(1) rotate(0);
}

$eachItemHeight: 60px;
.eachItem {
	border-radius: 50%;
	color: #eeeeee;
	display: block;
	width: $eachItemHeight;
	height: $eachItemHeight;
	line-height: $eachItemHeight;
	// 避免使用除法
	margin-left: -($eachItemHeight*0.5 + 1px);
	margin-top: -($eachItemHeight*0.5 + 1px);
	background-size: $eachItemHeight;
	position: absolute;
	text-align: center;
	//box-shadow: inset 0 0 $eachItemHeight #ffffff30;
	//-webkit-box-shadow: inset 0 0 $eachItemHeight #ffffff30;
	//-moz-box-shadow: inset 0 0 $eachItemHeight #ffffff30;
	transition: all 0.5s;
	overflow: hidden;


	&:nth-child(2n-1) {
		border: 1.5px #FF0099 solid;
	}

	&:nth-child(2n) {
		border: 1.5px #99FF00 solid;
	}

	// 放大且变亮
	&:hover {
		z-index: 1000;
		transition: all 0.5s;
		//box-shadow: inset 0 0 $eachItemHeight*1.5 #ffffff00;
		//-webkit-box-shadow: inset 0 0 $eachItemHeight*1.5 #ffffff00;
		//-moz-box-shadow: inset 0 0 $eachItemHeight*1.5 #ffffff00;
		width: $eachItemHeight*1.6;
		height: $eachItemHeight*1.6;
		line-height: $eachItemHeight*1.6;
		// 避免使用除法
		margin-left: -($eachItemHeight*0.8 + 1px);
		margin-top: -($eachItemHeight*0.8 + 1px);
		background-size: $eachItemHeight*1.6;
	}

	&:hover::before {
		opacity: 1;
	}

	// 白色透密遮罩
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #ffffff70;
		opacity: 0;
		transition: opacity 0.5s ease;
	}

	// 说明文字
	&::before {
		content: "占位\A文字";
		white-space: pre;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		line-height: 1;
		font-size: 1.8em;
		opacity: 0;
		transition: opacity 0.5s ease;
		display: flex; /* 添加flex布局 */
		justify-content: center; /* 水平居中 */
		align-items: center; /* 垂直居中 */
		color: #000;
	}

	&:nth-child(1)::before {
		content: "B站\A账号";
		color: #ff0099;
	}

	&:nth-child(2)::before {
		content: "微博\A账号";
		color: #99FF00;
		background-color: #00000070;
	}

	&:nth-child(3)::before {
		content: "官方\A百科";
		color: #ff0099;
	}

	&:nth-child(4)::before {
		content: "加入\A Q群";
		color: #99FF00;
		background-color: #00000070;
	}

	&:nth-child(5)::before {
		content: "双子\A作品";
		color: #ff0099;
	}

	&:nth-child(6)::before {
		content: "反馈\A Bug";
		color: #99FF00;
		background-color: #00000070;
	}
}

.item a {
	background-size: cover;

	&:nth-of-type(1) {
		background-image: url("https://article.biliimg.com/bfs/article/5456879a3ea125f5fdb6e1fd7f7e380d3e83dab1.jpg@1e_1c.webp");
		//background-image: url("../../static/Icon/1.jpg");
	}

	&:nth-of-type(2) {
		background-image: url("https://article.biliimg.com/bfs/article/6beb9223cabc578bf4478f342e6288cd6f6d3d6e.jpg@1e_1c.webp");
		//background-image: url("../../static/Icon/3.jpg");
	}

	&:nth-of-type(3) {
		background-image: url("https://article.biliimg.com/bfs/article/6f647cb01240601158f33c9bb265ba52b902ddea.jpg@1e_1c.webp");
		//background-image: url("../../static/Icon/5.jpg");
	}

	&:nth-of-type(4) {
		background-image: url("https://article.biliimg.com/bfs/article/5fe5a42f956d08fc5455c8321c3f758fa1e1aba4.jpg@1e_1c.webp");
		//background-image: url("../../static/Icon/welcomejpg.jpg");
	}

	&:nth-of-type(5) {
		background-image: url("https://article.biliimg.com/bfs/article/07a346ab03789c65ec95b40846dfacb90d1d220e.jpg@1e_1c.webp");
		//background-image: url("../../static/Icon/2.jpg");
	}

	&:nth-of-type(6) {
		background-image: url("https://article.biliimg.com/bfs/article/48e203f62461899c8b4070907576005cd2944db9.jpg@1e_1c.webp");
		//background-image: url("../../static/Icon/4.jpg");
	}
}





</style>
