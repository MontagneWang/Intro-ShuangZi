<script lang="ts" setup>
import {onMounted, ref} from "vue";

let li = ref<HTMLDivElement | null>(null)
let text = ref<HTMLDivElement | null>(null)

onMounted(() => {
	// 判断元素是否在视窗内
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			// 元素出现在视窗内
			if (entry.isIntersecting) {
				li.value!.classList.add('move');
				// todo 然后右滑出文字设定
				setTimeout(function () {
					text.value!.classList.add('textMove');
				}, 1000)
			}
		});
	});

	observer.observe(li.value as HTMLDivElement);
});


</script>

<template>
	<div class="content">
		<div class="logo2">
			<!--<img alt="" src="../static/logo2.png">-->
			<img alt="" src="https://article.biliimg.com/bfs/article/039f61c59927cd7a98f656e46571f617c224ab4c.png">
		</div>

		<!--<div class="character fu">-->
		<!--	&lt;!&ndash;<img alt="" src="../static/qifu.png">&ndash;&gt;-->
		<!--	<img alt="" src="https://article.biliimg.com/bfs/article/14e5de6c0c0b91173ea5fb162ab15bccf5571b36.png">-->
		<!--	<div class="name fu">起 <span style="color: #99FF00">复</span></div>-->
		<!--</div>-->

		<div ref="li" class="character li">
			<!--<img alt="" src="../static/qili.png">-->
			<img alt="" src="https://article.biliimg.com/bfs/article/4fbca0f859749e425e444f4bc5a7cb8156c978e6.png">
			<div class="name">起 <span style="color: #FF0099">礼</span></div>
			<div ref="text" class="text">
				<div>应援色：#FF0099</div>
				<div>体重：30kg</div>
				<div>性别：女</div>
				<div>年龄：<span class="blur">保密</span></div>
				<div>身高：140cm</div>
				<div>生日：7月13日</div>
				<div>代表物：凤凰</div>
				<div>性格：活泼开朗，喜欢瞎折腾</div>
				<div>中之人：悠茗月尘</div>
				<div>文字形象：发色外白内粉，有四条长发和一个侧马尾，绿瞳</div>
				<div>人设画师：ideolo/酥妃</div>
			</div>
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
.blur{
	filter: blur(3px);
	transition: all 0.75s;
}
.blur:hover{
	transition: all 0.75s;
	filter: none;
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

	.move {
		transition: all 1s;
		opacity: 1 !important;
		right: 65vw !important;
	}

	.textMove {
		transition: all 1s;
		opacity: 1 !important;
		transform: translateX(20vw) !important;
	}

	.character {
		height: 85vh;
		max-width: 30vw;
		position: absolute;
		bottom: 1vh;
		right: 2vw;
		opacity: 0;

		&.li {
			transition: all 1s;

			.text {
				position: absolute;
				top: 0;
				left: 0;
				text-align: left;
				//border: #ff0099 2px solid;
				//border-radius: 10px;
				border-radius: 10px;
				border: none; /* 去掉所有边框 */
				padding: 7%;
				margin-top: 7%;
				opacity: 0;
				width: 64%;
				transition: all 1s;


				div {
					border-bottom: #ff009970 1.5px solid;
					margin-bottom: 15px;
				}

				p:first-of-type {
					margin-top: 0;
				}

				p:last-of-type {
					margin-bottom: 0;
				}
			}

			.name {
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
