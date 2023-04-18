<script lang="ts" setup>
import {onMounted, ref} from "vue";

let li = ref<HTMLDivElement | null>(null)
let text = ref<HTMLDivElement | null>(null)
let timeline = ref<HTMLDivElement | null>(null)

onMounted(() => {
	document.querySelectorAll('.el-timeline-item').forEach((item, index) => {
		item.classList.add('hide')
	})
	// 判断元素是否在视窗内
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			// 元素出现在视窗内
			if (entry.isIntersecting) {
				li.value!.classList.add('move');
				setTimeout(function () {
					text.value!.classList.add('textMove');
				}, 1000)
				setTimeout(function () {
					timeline.value!.classList.add('fade-in');
				}, 2000)
				document.querySelectorAll('.el-timeline-item').forEach((item, index) => {
					setTimeout(function () {
						item.classList.remove('hide')
						item.classList.add('animate__animated', 'animate__fadeInUp')
					}, index * 500 + 2500)
				})
			}
		});
	});

	observer.observe(li.value as HTMLDivElement);

	document.querySelectorAll('.el-timeline-item__node--normal').forEach((item) => {
		item.classList.add('el-timeline-item__node--large')
	})
});
</script>

<template>
	<div class="content">
		<div ref="li" class="character li">
			<!--<img alt="" src="../static/qili.png">-->
			<img alt="" src="https://article.biliimg.com/bfs/article/4fbca0f859749e425e444f4bc5a7cb8156c978e6.png">
			<div class="name">起 <span style="color: #FF0099">礼</span></div>
			<div ref="text" class="text">
				<div>&nbsp;<b>·</b>&nbsp;代表色：<span style="color: #ff0099">#FF0099</span></div>
				<div>&nbsp;<b>·</b>&nbsp;体重：30kg</div>
				<div>&nbsp;<b>·</b>&nbsp;性别：女</div>
				<div>&nbsp;<b>·</b>&nbsp;年龄：<span class="blur">保密</span></div>
				<div>&nbsp;<b>·</b>&nbsp;身高：140cm</div>
				<div>&nbsp;<b>·</b>&nbsp;生日：7月13日</div>
				<div>&nbsp;<b>·</b>&nbsp;代表物：凤凰</div>
				<div>&nbsp;<b>·</b>&nbsp;性格：活泼开朗，喜欢瞎折腾</div>
				<div>&nbsp;<b>·</b>&nbsp;声源：悠茗月尘</div>
				<div>&nbsp;<b>·</b>&nbsp;文字形象：发色外白内粉，有四条长发和一个侧马尾，绿瞳</div>
				<div>&nbsp;<b>·</b>&nbsp;人设画师：ideolo/酥妃</div>
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
		<!--todo 修改 时间 对比色-->
		<div ref="timeline" class="timeline">
			<el-timeline>
				<el-timeline-item icon="Aim" placement="top"
				                  timestamp="2011.11.20"
				                  type="primary">
					VOCALOID China Project 项目启动
				</el-timeline-item>
				<el-timeline-item icon="Management"
				                  placement="top"
				                  timestamp="2011.12.01"
				                  type="warning">
					开始征集 VOCALOID China Project 企划人物形象设计
				</el-timeline-item>
				<el-timeline-item icon="Checked" placement="top"
				                  timestamp="2012.01.03" type="danger">
					VOCALOID China Project 形象征集结束
				</el-timeline-item>
				<el-timeline-item icon="Place" placement="top" timestamp="2012.03.21"
				                  type="success">
					<el-card>
						<h3>VOCALOID China Project 最终形象定稿公布</h3>
						<p>确定最终形象为「洛天依、乐正绫、徵羽摩柯、乐正龙牙、墨清弦」</p>
					</el-card>
				</el-timeline-item>
				<el-timeline-item icon="Checked" placement="top"
				                  timestamp="2012.01.03" type="danger">
					VOCALOID China Project 形象征集结束
				</el-timeline-item>
			</el-timeline>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.blur {
	filter: blur(2.5px);
	transition: all 0.75s;
}

.blur:hover {
	transition: all 0.75s;
	filter: none;
}

.hide {
	opacity: 0;
}

.content {
	height: 100vh;
	position: relative;
	overflow-x: hidden;


	.move {
		transition: all 1s;
		opacity: 1 !important;
		right: 65vw !important;
	}

	.textMove {
		transition: all 1s;
		opacity: 1 !important;
		transform: translateX(18.5vw) !important;
	}

	.character {
		height: 85vh;
		max-width: 30vw;
		position: absolute;
		bottom: 3vh;
		right: 2vw;
		opacity: 0;

		&.li {
			transition: all 1s;

			.text {
				position: absolute;
				top: 0;
				left: 0;
				text-align: left;
				font-size: 1.1em;
				//border: #ff0099 2px solid;
				//border-radius: 10px;
				border-radius: 10px;
				border: none; /* 去掉所有边框 */
				padding: 7%;
				margin-top: 2%;
				opacity: 0;
				width: 72%;
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

	.timeline {
		position: absolute;
		top: 15vh;
		right: 10vw;
		height: 80vh;
		width: 40vw;
		margin-top: -5vh;
		background-color: #00000030;
		border-radius: 10px;
		padding: 2.5% 0 0 4.5%;
		box-sizing: border-box;
		overflow-x: hidden;
		overflow-y: hidden;
		text-align: left;
		opacity: 0;

		.el-timeline {
			margin-left: -15% !important;
			width: 100%;
		}

		.el-timeline-item__timestamp {
			color: #ff0099 !important;
		}

		.el-timeline {
			--el-timeline-node-size-large: 18px !important;
			--el-text-color-secondary: #fff
		}

		//
		//.el-timeline-item {
		//	width: 75%;
		//}
	}
}
</style>
