<script lang="ts" setup>

</script>

<template>
	<div class="content">

		<div class="logo">
			<a href="https://space.bilibili.com/193181849"
			   target="_blank"
			   title="点击前往 起氏双子 官方">
				<!--<img alt="" src="../static/logo.png">-->
				<img alt="logo" src="https://article.biliimg.com/bfs/article/fb8ddc21ba9a464df32a226acdef3ad740c8bff5.png@1e_1c.webp">
			</a>
		</div>

		<div class="character fu">
			<!--<img alt="" src="../static/qifu.png">-->
			<img alt="起复" src="https://article.biliimg.com/bfs/article/ce971427853edff10f6c81718ac4ae0ceff0cd41.png@1e_1c.webp">
			<div class="name fu">起 <span style="color: #99FF00">复</span></div>
		</div>

		<div class="character li">
			<!--<img alt="" src="../static/qili.png">-->
			<img alt="起礼" src="https://article.biliimg.com/bfs/article/e41acee7c137303a9743f04fc263a749999518c3.png@1e_1c.webp">
			<div class="name li">起 <span style="color: #FF0099">礼</span></div>
		</div>
		<div class="intro">
			<h2>
				你好！这里是『<a href="https://space.bilibili.com/193181849"
				          target="_blank"
				          title="点击前往 起氏双子 官方">
				<span>起</span>
				<span>氏</span>
				<span>双</span>
				<span>子</span>
			</a>』的介绍页面
			</h2>
			<h3 style="transform: translateX(-10px)">『起氏双子』是 <span class="text-underline qifu">起复</span>
				与 <span class="text-underline qili">起礼</span> 的合称</h3>
			<p>二人是以「歌声合成软件」为基础的「中文声库」与「虚拟形象」</p>
			<p><span class="text-underline qili">起礼</span>与<span class="text-underline qifu">起复</span>是双胞胎，其中<span
					class="text-underline qili">起礼</span>是姐姐，<span class="text-underline qifu">起复</span>是弟弟</p>
			<p>名字源于论语中的克己复礼，设计灵感源于「箫韶九成 凤凰来仪」</p>
			<p>如果您是第一次了解到『起氏双子』，不妨听听下面这首歌曲</p>
			<br>
			<iframe border="0" title="要将等待换成什么" frameborder="no" height=86 marginheight="0"
			        marginwidth="0" src="//music.163.com/outchain/player?type=2&id=1957143939&auto=0&height=66"
			        style="box-shadow: none!important;margin-left:-8px"
			        width=450></iframe>
		</div>
	</div>
</template>

<style lang="scss" scoped>
// @media screen and (min-width: 1280px) {
// 	.fu .name {
// 		right: 14% !important;
// 		font-size: 2.5rem !important;
// 	}
// 	.li .name {
// 		left: 16% !important;
// 		top: 3% !important;
// 		font-size: 2.5rem !important;
// 	}
// 	.intro {
// 		width: 40vw !important;
// 		font-size: 1rem !important;
// 		padding: 1.5% 1.5% 1% !important; // 最下方为 1%
// 	}
// 	.logo {
// 		img {
// 			margin-top: 10vh !important;
// 		}
// 	}
// 	iframe {
// 		width: 25vw !important;
// 	}
// }
@media screen and (min-width: 1366px) {
	.fu .name {
		right: 16% !important;
		font-size: 3rem !important;
	}
	.li .name {
		left: 16% !important;
		top: 3% !important;
		font-size: 3rem !important;
	}
	.intro {
		width: 42vw !important;
		font-size: 1.1rem !important;
		padding: 1.5% 1.5% 1% !important; // 最下方为 1%
	}
	.logo {
		img {
			margin-top: 10vh !important;
		}
	}
	iframe {
		width: 25vw !important;
	}
}

@media screen and (min-width: 1440px) {
	.fu .name {
		right: 18% !important;
		font-size: 3rem !important;
	}
	.li .name {
		left: 18% !important;
		top: 5% !important;
		font-size: 3rem !important;
	}
	.intro {
		width: 35vw !important;
		font-size: 1.1rem !important;
		padding: 1.5% 1.5% 1% !important; // 最下方为 1%
	}
	.logo {
		img {
			margin-top: 10vh !important;
		}
	}
	iframe {
		width: 25vw !important;
	}
}

@media screen and (min-width: 1500px) {
	.fu .name {
		right: 16% !important;
		font-size: 3rem !important;
	}
	.li .name {
		left: 16% !important;
		top: 3% !important;
		font-size: 3rem !important;
	}
	.intro {
		width: 40vw !important;
		font-size: 1.2rem !important;
		padding: 1.5% 1.5% 1% !important; // 最下方为 1%
	}
	.logo {
		img {
			margin-top: 10vh !important;
		}
	}
	iframe {
		width: 25vw !important;
	}
}

@media screen and (min-width: 1920px) {
	.fu .name {
		right: 18% !important;
		font-size: 3.5rem !important;
	}
	.li .name {
		left: 18% !important;
		font-size: 3.5rem !important;
	}
	.intro {
		width: 43vw !important;
		font-size: 1.6rem !important;
		padding: 1.5% 1.5% 1% !important; // 最下方为 1%
	}
	.logo {
		img {
			margin-top: 10vh !important;
		}
	}
	iframe {
		width: 30vw !important;
	}
}

@media screen and (min-width: 2560px) {
	.fu .name {
		right: 18% !important;
		font-size: 5rem !important;
	}
	.li .name {
		left: 18% !important;
		font-size: 5rem !important;
	}
	.intro {
		margin-top: 16vh!important;
		width: 42vw !important;
		font-size: 2.3rem !important;
		padding: 1.5% 1.5% 1% !important; // 最下方为 1%
	}
	.logo {
		img {
			margin-top: 10vh !important;
		}
	}
	iframe {
		width: 30vw !important;
	}
}

a {
	text-decoration: none;
	/*正常的未被访问过的链接*/
	&:link {
		span:nth-child(1) {
			color: #FF0099;
		}

		span:nth-child(2) {
			color: #99FF00;
		}

		span:nth-child(3) {
			color: #FF0099;
		}

		span:nth-child(4) {
			color: #99FF00;
		}
	}

	&:hover {
		span:nth-child(1) {
			color: #99FF00;
		}

		span:nth-child(2) {
			color: #FF0099;
		}

		span:nth-child(3) {
			color: #99FF00;
		}

		span:nth-child(4) {
			color: #FF0099;
		}
	}

	/* 正在点击的链接*/
	&:visited {
		span:nth-child(1) {
			color: #FF0099;
		}

		span:nth-child(2) {
			color: #99FF00;
		}

		span:nth-child(3) {
			color: #FF0099;
		}

		span:nth-child(4) {
			color: #99FF00;
		}
	}

	&:hover:visited {
		span:nth-child(1) {
			color: #99FF00;
		}

		span:nth-child(2) {
			color: #FF0099;
		}

		span:nth-child(3) {
			color: #99FF00;
		}

		span:nth-child(4) {
			color: #FF0099;
		}
	}
}

// 最少需要传入两个颜色参数，不然下划线不会显示
@mixin underline($colors...) { // 使用可变参数
	text-decoration: none;
	position: relative;
	&:after {
		content: "";
		position: absolute;
		left: 0;
		bottom: -2px;
		width: 100%;
		height: 2px;
		background: linear-gradient(to right, $colors); // 使用 $colors 变量
	}
	&:hover {
		color: nth($colors, 1); // 设置 hover 时的颜色为第一个颜色
	}
}

.qifu {
	@include underline(#99FF00, #99FF00);
}

.qili {
	@include underline(#FF0099, #FF0099);
}

@keyframes slide-from-left {
	0% {
		opacity: 0;
		left: -20vw;
	}
	100% {
		opacity: 1;
		left: 0;
	}
}

@keyframes slide-from-right {
	0% {
		opacity: 0;
		right: -20vw;
	}
	100% {
		opacity: 1;
		right: 0;
	}
}

@keyframes fade-in {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

.content {
	height: 100vh;
	position: relative;
	overflow-x: hidden;

	.logo {
		height: 15vh;
		opacity: 0;
		animation: fade-in 0.75s ease-in-out 0.5s forwards;

		img {
			margin-top: 9vh;
			height: 100%;
		}
	}


	.intro {
		overflow: auto;
		animation: fade-in 1s ease-in-out 2s forwards;
		opacity: 0;
		background-color: rgba(0, 0, 0, 0.15);
		padding: 2% 2% 1%; // 最下方为 1%
		box-sizing: border-box;
		border-radius: 7px;
		width: 45vw;
		margin: 15vh auto 0;
		text-align: left;
		border-top: #FF0099 2px solid;
		border-right: #FF0099 2px solid;
		border-bottom: #99FF00 2px solid;
		border-left: #99FF00 2px solid;

		h2 {
			margin-top: 0;
		}

		p:last-of-type {
			margin-bottom: -10px;
		}
	}

	.character {
		height: 85vh;
		//max-width: 30vw;
		position: absolute;
		bottom: 2vh;

		&.fu {
			animation: slide-from-left 1s ease-in-out 0.75s forwards;
			opacity: 0;
			left: 1vw;

			.name {
				animation: fade-in 1s ease-in-out 2.75s forwards;
				background-color: rgba(0, 0, 0, 0.25);
				opacity: 0;
				position: absolute;
				writing-mode: vertical-rl;
				font-size: 2.5em;
				right: 11%;
				top: 31%;
				padding: 12px 8px 18px 7px;
				border: 2px inset rgba(153, 255, 0, 0.5);
				border-radius: 5px;
				z-index: -1;
			}
		}

		&.li {
			right: 2vw;
			opacity: 0;
			animation: slide-from-right 1s ease-in-out 0.75s forwards;

			.name {
				animation: fade-in 1s ease-in-out 2.75s forwards;
				opacity: 0;
				position: absolute;
				background-color: rgba(0, 0, 0, 0.25);
				writing-mode: vertical-rl;
				font-size: 2.5em;
				left: 14%;
				top: 2%;
				padding: 12px 7px 18px 8px;
				border: 2px outset rgba(255, 0, 153, 0.5);
				border-radius: 5px;
				z-index: -1;
			}
		}

		img {
			height: 95%;
		}
	}
}

</style>
