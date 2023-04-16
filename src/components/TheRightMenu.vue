<script lang="ts" setup>
import {onMounted} from "vue";
import Modal from '../utils/ToastComp.vue'
import {ref} from 'vue'
// toast
const showModal = ref(false)

// 全局变量，整个圆盘的半径 radius
let radius = 110
onMounted(() => {
	// @ts-ignore
	$(document).ready(function () {
		// DOM 加载完毕后，绑定 rightMenu 插件到 html
		// @ts-ignore
		$('html').rightMenu({'menu': 'circleMenu'})
	});

	let Coords: { clientY: number; clickX: number; clientX: number; clickY?: number; screenX?: number; screenY?: number; }
	let items = document.querySelectorAll('.eachItem');
	for (let i = 0, l = items.length; i < l; i++) {
		// 计算eachItem元素的位置
		(items[i] as HTMLElement).style.left = (50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
		(items[i] as HTMLElement).style.top = (50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%"
	}

	// 定义 rightMenu 插件
	(function ($) {
		let rightMenu = {
			// 插件默认设置
			defaults: {click_to_close: true, stay_open: false}, init: function (options: any) {
				let o = options, $this = $(this);
				$this.each(function (i: any) {
					// @ts-ignore
					let $this = $(this), settings = $.extend({}, rightMenu.defaults, o), $menu = $('.' + settings.menu);
					// 鼠标按下事件
					$this.on('mousedown', function (e: { which: number; target: any; }) {
						// 如果 不是右键点击 或者 点击的元素不是 rightMenu 的子元素 ，且设置了 click_to_close，则关闭 rightMenu（左键点击其他区域关闭菜单）
						if (e.which !== 3 && $(e.target).parents('.rightMenu').length < 1 && settings.click_to_close) {
							$this.find('.rightMenu').stop(true, false).animate({opacity: 0}, {
								// 改长消失时间
								duration: 1000,
								queue: false,
								complete: function () {
									$(this).css('display', 'none').find('.active').removeClass('active').next().stop(true, true).slideUp('normal')
								}
							});
							$(".circle").removeClass("active");
							$(".rightMenu").delay(400).hide(0);
						}
					});
					// 鼠标右键点击事件
					$this.on('contextmenu', function (e: { preventDefault: () => void; stopPropagation: () => void; target: any; }) {
						e.preventDefault();
						e.stopPropagation();
						rightMenu.getCoords(e);
						// $('.rightMenu_close_me').stop(true, false).animate({opacity: 0}, {
						// 	duration: 100,
						// 	queue: false,
						// 	complete: function () {
						// 		$(this).css('display', 'none')
						// 	}
						// });
						// 如果已经有active类，则关闭rightMenu，否则打开rightMenu
						if ($("#rightCircle").hasClass("active")) {
							$(".circle").removeClass("active");
							$(".rightMenu").delay(400).hide(0);
						} else {
							// 需要在右键其他地方时跟左键其他地方一样，不更改消失的位置
							let top = Coords.clientY - radius,
									left = ($('html')[0] === e.target) ? Coords.clickX - radius : Coords.clientX - radius;
							let bodyHe = document.documentElement.clientHeight;
							let bodyWi = document.documentElement.clientWidth;
							if (top < 0) top = 0;
							if (bodyHe - Coords.clientY < 150) top = bodyHe - 300;
							if (left < 0) left = 0;
							if ($('html')[0] === e.target) {
								if (bodyWi - Coords.clickX < 150) left = bodyWi - 300
							} else {
								if (bodyWi - Coords.clientX < 150) left = bodyWi - 300
							}
							// 设置rightMenu的位置并显示
							$menu.css({
								top: top + 'px',
								left: left + 'px',
								display: 'block'
							}).stop(true, false).animate({opacity: 1}, {duration: 100, queue: false});
							$(".circle").addClass("active");
							$(".rightMenu").show();
						}
					})
				})
			},
			// 获取鼠标点击的坐标
			getCoords: function (e: any) {
				let evt = e ? e : window.event;
				let clickX = 0, clickY = 0;
				if ((evt.clientX || evt.clientY) && document.body && document.body.scrollLeft != null) {
					clickX = evt.clientX + document.body.scrollLeft;
					clickY = evt.clientY + document.body.scrollTop
				}
				if ((evt.clientX || evt.clientY) && document.compatMode == 'CSS1Compat' && document.documentElement && document.documentElement.scrollLeft != null) {
					clickX = evt.clientX + document.documentElement.scrollLeft;
					clickY = evt.clientY + document.documentElement.scrollTop
				}
				if (evt.pageX || evt.pageY) {
					clickX = evt.pageX;
					clickY = evt.pageY
				}
				return Coords = {
					clickX: clickX,
					clickY: clickY,
					clientX: evt.clientX,
					clientY: evt.clientY,
					screenX: evt.screenX,
					screenY: evt.screenY
				}
			}
		};
		// 绑定rightMenu插件到jQuery
		$.fn.rightMenu = function (method: string, options: any) {
			// @ts-ignore
			if (rightMenu[method]) {
				// @ts-ignore
				return rightMenu[method].apply(this, Array.prototype.slice.call(arguments, 1))
			} else if (typeof method === 'object' || !method) {
				// @ts-ignore
				return rightMenu.init.apply(this, arguments)
			} else {
				$.error('Method ' + method + ' does not exist')
			}
		}
		// @ts-ignore
	})(jQuery);
});

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

	<div class="rightMenu circleMenu">
		<div id="rightCircle" class="circle">
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
	}

	&:nth-child(3)::before {
		content: "官方\A百科";
		color: #ff0099;
	}

	&:nth-child(4)::before {
		content: "加入\A Q群";
		color: #99FF00;
	}

	&:nth-child(5)::before {
		content: "双子\A作品";
		color: #ff0099;
	}

	&:nth-child(6)::before {
		content: "反馈\A Bug";
		color: #99FF00;
	}
}

.item a {
	background-size: cover;

	&:nth-of-type(1) {
		background-image: url("../../static/Icon/1.jpg");
		//background-image: url("https://article.biliimg.com/bfs/article/850121f432591413f7427cf54a1e5727f1356aec.jpg");
	}

	&:nth-of-type(2) {
		background-image: url("../../static/Icon/3.jpg");
	}

	&:nth-of-type(3) {
		background-image: url("../../static/Icon/5.jpg");
	}

	&:nth-of-type(4) {
		background-image: url("../../static/Icon/welcomejpg.jpg");
	}

	&:nth-of-type(5) {
		background-image: url("../../static/Icon/2.jpg");
	}

	&:nth-of-type(6) {
		background-image: url("../../static/Icon/4.jpg");
	}
}


</style>
