<script lang="ts" setup>


</script>

<template>
	<div class="content">
		<div class="logo2">
			<!--<img alt="" src="../static/logo2.png">-->
			<img alt="" src="https://article.biliimg.com/bfs/article/039f61c59927cd7a98f656e46571f617c224ab4c.png">
		</div>

		<div class="logo">
			<a href="https://space.bilibili.com/193181849"
			   target="_blank"
			   title="点击前往 起氏双子 官方">
				<!--<img alt="" src="../static/logo.png">-->
				<img alt="" src="https://article.biliimg.com/bfs/article/fb8ddc21ba9a464df32a226acdef3ad740c8bff5.png">
			</a>
		</div>

		<div class="character fu">
			<!--<img alt="" src="../static/qifu.png">-->
			<img alt="" src="https://article.biliimg.com/bfs/article/14e5de6c0c0b91173ea5fb162ab15bccf5571b36.png">
			<div class="name fu">起 <span style="color: #99FF00">复</span></div>
		</div>

		<div class="character li">
			<!--<img alt="" src="../static/qili.png">-->
			<img alt="" src="https://article.biliimg.com/bfs/article/4fbca0f859749e425e444f4bc5a7cb8156c978e6.png">
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
			<h3>『起氏双子』是 <span class="text-underline qifu">起复</span>
				与 <span class="text-underline qili">起礼</span> 的合称</h3>
			<p>二人是以「歌声合成软件」为基础的「中文声库」与「虚拟形象」</p>
			<p><span class="text-underline qili">起礼</span>与<span class="text-underline qifu">起复</span>是双胞胎，其中<span
					class="text-underline qili">起礼</span>是姐姐，<span class="text-underline qifu">起复</span>是弟弟</p>
			<p>双子的名字源于论语中的克己复礼，设计灵感源于「箫韶九成 凤凰来仪」</p>
			<p>如果您是第一次了解到『起氏双子』，不妨听听下面这首歌曲</p>
			<!--todo 从问答中获取简介可以填写的信息-->
			<br>
			<iframe border="0" frameborder="no" height=86
			        marginheight="0" marginwidth="0"
			        src="//music.163.com/outchain/player?type=2&id=1957143939&auto=0&height=66"
			        style="margin-left:-8px" width=450></iframe>
		</div>
		<!--下面这些应该在其他页面展示  Utau、DeepVocal、ACE -->
		<!-- todo 时间轴-->
		<!--<p>2016年03月19日，立项</p>-->
		<!--<p>2016年6月18日，确立立绘想象</p>-->
		<!--<p>2018年1月6日，起氏双子的首个 Utau 声库发布</p>-->
		<!--<p>2018年7月13日，正式发布起氏双子cvvc绊生声库</p>-->
		<!--<p>2019年7月13日，正式发布起氏双子Deep vocal中文声库</p>-->
		<!--<p>2022年5月1日，正式发布起氏双子ACE AI中文声库</p>-->
	</div>
</template>

<style lang="scss" scoped>

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

	.logo2 {
		height: 15vh;
		position: absolute;
		top: 4vh;
		left: 4vh;

		img {
			height: 100%;
		}
	}

	.logo {
		height: 15vh;
		opacity: 0;
		animation: fade-in 0.75s ease-in-out 0.5s forwards;

		img {
			margin-top: 7vh;
			height: 100%;
		}
	}

	.intro {
		overflow: auto;
		animation: fade-in 1s ease-in-out 2s forwards;
		opacity: 0;
		background-color: rgba(0, 0, 0, 0.07);
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
		bottom: 1vh;

		&.fu {
			animation: slide-from-left 1s ease-in-out 0.75s forwards;
			opacity: 0;
			left: 1vw;

			.name {
				animation: fade-in 1s ease-in-out 3s forwards;
				opacity: 0;
				position: absolute;
				writing-mode: vertical-rl;
				font-size: 2.5em;
				right: 15%;
				top: 31%;
				padding: 4px;
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
				animation: fade-in 1s ease-in-out 3s forwards;
				opacity: 0;
				position: absolute;
				writing-mode: vertical-rl;
				font-size: 2.5em;
				left: 16%;
				top: 3%;
				padding: 4px;
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
