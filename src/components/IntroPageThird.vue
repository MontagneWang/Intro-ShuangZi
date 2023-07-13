<script lang="ts" setup>
import {onMounted, ref} from "vue";

let fu = ref<HTMLDivElement | null>(null)
let text = ref<HTMLDivElement | null>(null)
let timeline2 = ref<HTMLDivElement | null>(null)

onMounted(() => {
	// document.querySelectorAll('.el-timeline-item__node--normal').forEach((item) => {
	// 	item.classList.add('el-timeline-item__node--large')
	// })
	// document.querySelectorAll('.el-timeline-item').forEach((item, index) => {
	// 	item.classList.add('hide')
	// })
	// 判断元素是否在视窗内
	let observer2 = new IntersectionObserver(entries2 => {
		entries2.forEach(entry => {
			// 元素出现在视窗内
			if (entry.isIntersecting) {
				// 通过在添加	animation-delay 实现延迟，而不是 setTimeOut（会存在系统与性能误差）
				fu.value!.classList.add('fade-in');
				text.value!.classList.add('textMove');
				timeline2.value!.classList.add('fade-in');
				document.querySelectorAll('.fu .el-timeline-item').forEach((item, index) => {
					const delay = index * 500 + 2000; // 计算每个元素的延迟时间
					(item as HTMLElement).style.animationDelay = `${delay}ms`; // 设置 animation-delay 属性
					item.classList.remove('hide')
					item.classList.add('animate__animated', 'animate__fadeInUp')
				})
			}
		});
	});

	observer2.observe(fu.value as HTMLDivElement);
});

let now = new Date();
let year = now.getFullYear();
let age = ref(5005 + year - 2022)
</script>

<template>
	<div class="content fu">
		<div ref="fu" class="character fu">
			<!--<img alt="" src="../static/qifu.png">-->
			<img alt="" src="https://article.biliimg.com/bfs/article/ce971427853edff10f6c81718ac4ae0ceff0cd41.png">
			<div class="name fu">起 <span style="color: #99FF00">复</span></div>

			<div ref="text" class="text">
				<div>&nbsp;<b>·</b>&nbsp;身高：142cm</div>
				<div>&nbsp;<b>·</b>&nbsp;体重：31kg</div>
				<div>&nbsp;<b>·</b>&nbsp;性别：男</div>
				<div>&nbsp;<b>·</b>&nbsp;年龄：12 <span class="blur">其实已经{{ age }}岁了</span></div>
				<div>&nbsp;<b>·</b>&nbsp;生日：7月13日</div>
				<div>&nbsp;<b>·</b>&nbsp;代表物：笛子</div>
				<div>&nbsp;<b>·</b>&nbsp;代表色：<span style="color: #99FF00">#99FF00</span></div>
				<div>&nbsp;<b>·</b>&nbsp;性格：孤僻寡言</div>
				<div>&nbsp;<b>·</b>&nbsp;声源：手指</div>
				<div>&nbsp;<b>·</b>&nbsp;文字形象：黑发带墨绿挑染，左侧有个小麻花辫，右侧有三角耳饰，四条眉毛，红瞳。</div>
				<div>&nbsp;<b>·</b>&nbsp;人设画师：ideolo/酥妃</div>
			</div>
		</div>
		<div ref="timeline2" class="timeline">
			<el-timeline>
				<el-timeline-item icon="mic" placement="top"
				                  timestamp="2020 年 7 月 13 日"
				                  type="primary">
					双子三周年，生贺曲《不揽清风不望月》发布
				</el-timeline-item>
				<el-timeline-item icon="mic" placement="top"
				                  timestamp="2021 年 7 月 13 日"
				                  type="primary">
					双子四周年，生贺曲《交彗 Comets Meet》发布
				</el-timeline-item>
				<el-timeline-item icon="Promotion" placement="top"
				                  timestamp="2022 年 5 月 1 日"
				                  type="success">
					<el-card>
						<h3>🎉 起氏双子 ACE 声库发布
							<!--<iframe border="0" frameborder="no" height=86 marginheight="0"-->
							<!--        marginwidth="0" src="//music.163.com/outchain/player?type=2&id=1957143939&auto=0&height=66"-->
							<!--        style="box-shadow: none!important;margin-left:-8px"-->
							<!--        width=86></iframe>-->
						</h3>
						<!--<p>『要将等待换成什么　我早就数不清楚了</p>-->
						<!--<p>&emsp;但愿你走向我那个时刻　一切都没改变过』</p>-->
						<p>
							Ace 声库依托于 Ace Studio 平台，您可以在 <a href="https://ace-studio.timedomain.cn/#download_home" target="_blank"
							                                title="点击前往单音阶声库下载地址">此处</a> 下载
						</p>
					</el-card>
				</el-timeline-item>
				<el-timeline-item icon="mic" placement="top"
				                  timestamp="2022 年 7 月 13 日"
				                  type="primary">
					双子五周年，生贺曲《如果仅靠谎言将我的世界照亮》发布
				</el-timeline-item>
				<el-timeline-item icon="Management" placement="top"
				                  timestamp="2022 年 9 月 2 日"
				                  type="danger">
					起氏双子设定集《万灵梦歌》发售
				</el-timeline-item>
				<el-timeline-item icon="mic" placement="top"
				                  timestamp="2023 年 7 月 13 日"
				                  type="primary">
					起氏双子六岁啦，生贺曲《神|子》发布
				</el-timeline-item>
			</el-timeline>
		</div>
	</div>

</template>

<style lang="scss" scoped>
a {
	text-decoration: none;
	/*正常的未被访问过的链接*/
	&:link {
		color: #99FF00;
	}

	&:hover {
		color: #FF0099;
	}

	/* 正在点击的链接*/
	&:visited {
		color: #99FF00;
	}

	&:hover:visited {
		color: #FF0099;
	}
}
@media screen and (min-width: 1366px) {
	.content {
		.fu {
			left: 5vw !important;
		}

		.name {
			font-size: 2.5em !important;
			left: 20% !important;
		}

		.text {
			left: 3vw !important;
			width: 20vw !important;
			font-size: 1.4em !important;
		}

		.timeline {
			.el-timeline {
				font-size: 1.1em !important;
				--el-font-size-small: 1em !important;
				padding-left: 9%;
				--el-timeline-node-size-large: 1em !important;

				.el-card {
					--el-card-padding: 20px 35px !important;
				}
			}
		}
	}
}

@media screen and (min-width: 1440px) {
	iframe {
		position: absolute;
		top: 14%;
		right: 2% !important;
	}
	.content {
		.name {
			font-size: 3em !important;
			left: 20% !important;
		}

		.text {
			left: 3vw !important;
			width: 20vw !important;
			font-size: 1.6em !important;
		}

		.timeline {
			.el-timeline {
				font-size: 1.2em !important;
				--el-font-size-small: 1em !important;
				padding-left: 9%;
				--el-timeline-node-size-large: 1em !important;

				.el-card {
					--el-card-padding: 20px 35px !important;
				}
			}
		}
	}
}

@media screen and (min-width: 1536px) {
	.content {
		.name {
			font-size: 3em !important;
			left: 20% !important;
		}

		.text {
			left: 3vw !important;
			width: 20vw !important;
			font-size: 1.6em !important;
		}

		.timeline {
			.el-timeline {
				font-size: 1.3em !important;
				--el-font-size-small: 1em !important;
				padding-left: 9%;
				--el-timeline-node-size-large: 1em !important;

				.el-card {
					--el-card-padding: 20px 35px !important;
				}
			}
		}
	}
}

@media screen and (min-width: 1920px) {
	.content {
		.name {
			font-size: 4em !important;
			left: 20% !important;
		}

		.text {
			left: 3vw !important;
			width: 20vw !important;
			font-size: 2.1em !important;
		}

		.timeline {
			.el-timeline {
				font-size: 1.8em !important;
				--el-font-size-small: 1em !important;
				padding-left: 9%;
				--el-timeline-node-size-large: 1em !important;

				.el-card {
					--el-card-padding: 20px 35px !important;
				}
			}
		}
	}
}

@media screen and (min-width: 2560px) {
	.blur {
		filter: blur(7px) !important;
	}
	.content {
		.name {
			font-size: 5.5em !important;
			left: 20% !important;
		}

		.text {
			left: 2vw !important;
			width: 21vw !important;
			font-size: 3em !important;
		}

		.timeline {
			.el-timeline {
				font-size: 2.4em !important;
				--el-font-size-small: 1em !important;
				padding-left: 9%;
				--el-timeline-node-size-large: 1em !important;

				.el-card {
					margin: 0 auto !important;
					--el-card-padding: 20px 50px !important;
				}
			}
		}
	}
}

iframe {
	position: absolute;
	bottom: 10%;
	right: 5%;
}

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

	.textMove {
		transition: all 1s;
		opacity: 1 !important;
		transform: translateX(19.5vw) !important;
	}

	.character {
		height: 85vh;
		max-width: 30vw;
		position: absolute;
		bottom: 4vh;
		left: 7vw;
		//opacity: 0;

		&.fu {
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
				width: 71%;
				transition: all 1s;
				transition-delay: 500ms;


				div {
					border-bottom: #99FF0070 1.5px solid;
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
				left: 15%;
				top: 2%;
				padding: 12px 7px 18px 8px;
				border: 2px inset rgba(153, 255, 0, 0.5);
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
		background-color: #00000040;
		border-radius: 10px;
		padding: 2.5% 0 0 4.5%;
		box-sizing: border-box;
		overflow-x: hidden;
		overflow-y: hidden;
		text-align: left;
		opacity: 0;
		animation-delay: 1500ms;

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
