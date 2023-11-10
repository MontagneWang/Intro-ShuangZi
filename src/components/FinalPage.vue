<script lang="ts" setup>
import {onMounted, ref} from "vue";

let fu = ref<HTMLDivElement | null>(null)
let li = ref<HTMLDivElement | null>(null)
onMounted(() => {
	// 判断元素是否在视窗内
	let observer3 = new IntersectionObserver(entries3 => {
		entries3.forEach(entry => {
			// 元素出现在视窗内
			if (entry.isIntersecting) {
				fu.value!.classList.add('fade-in');
				li.value!.classList.add('fade-in');
			}
		});
	});

	observer3.observe(fu.value as HTMLDivElement);
});

</script>

<template>
	<div class="content">

		<div class="outro">
			<h2>每一位虚拟歌手都由爱诞生，因爱成长</h2>
			<h2>我们将情感寄托于他们的歌声之中</h2>
			<h2>借由他们之口，唱出心中所思</h2>
			<h2>祝我们的双子越来越好，听众越来越多🎉</h2>
			<h3 style="margin-bottom: -2.5em;font-size:1em">您可以通过<span style="color:#FF0099" tilte="尝试点击你的鼠标右键">「右键菜单」</span>了解更多有关双子的信息</h3>
		</div>

		<div ref="fu" class="character fu">
			<!--<img alt="" src="../static/qifu.png">-->
			<img alt="起复" src="https://article.biliimg.com/bfs/article/ce971427853edff10f6c81718ac4ae0ceff0cd41.png@1e_1c.webp">
		</div>

		<div ref="li" class="character li">
			<!--<img alt="" src="../static/qili.png">-->
			<img alt="起礼" src="https://article.biliimg.com/bfs/article/e41acee7c137303a9743f04fc263a749999518c3.png@1e_1c.webp">
		</div>

		<p>如果您需要反馈页面中存在的错误，可以通过右键菜单中的“反馈Bug”联系我，我会尽可能及时做出修正</p>
		<p>如果您是官方且需要回收该域名，可以通过[<a href="mailto:ling.vc@foxmail.com" style="color:#FF0099" target="_blank" title="邮箱：ling.vc@foxmail.com">邮箱</a>]联系我，我会将当前域名转入到您所提供的域名注册商
		</p>
		<!--<div class="blur">-->
		<!--	<p>本来是打算之后着手 SEO 收录，使其被搜索引擎收录，成为一个真正可访问的站点。</p>-->
		<!--	<p>不过有朋友提醒了我，这样一来就太正式了，好像有些许越俎代庖的意味。</p>-->
		<!--	<p>我也想了一下，作为双子的听众，确实做到这一步也差不多了。</p>-->
		<!--	<p>之后就让这个页面静候到访于此的有缘人吧。</p>-->
		<!--</div>-->
	</div>
</template>

<style lang="scss" scoped>
// @media screen and (min-width: 1280px) {
// 	.content{
// 		font-size: 1.15em;
// 		.character {
// 			&.fu {
// 				left: -0.5vw!important;
// 			}

// 			&.li {
// 				right: 1vw!important;
// 			}
// 		}
// 	}
// }
@media screen and (min-width: 1366px) {
	.content{
		font-size: 1.25em;
		.character {
			&.fu {
				left: 0!important;
			}

			&.li {
				right: 0!important;
			}
		}
	}
	.blur {
		filter: blur(3px) !important;
	}
	.blur:hover {
		filter: none!important;
		transition: all 1s;
		transform: translateY(-33vh);
	}
}

@media screen and (min-width: 1440px) {
	.content{
		font-size: 1.45em;
		.character {
			&.fu {
				left: 0!important;
			}

			&.li {
				right: 0!important;
			}
		}
	}
	.blur {
		filter: blur(4px) !important;
	}
	.blur:hover {
		filter: none!important;
		transition: all 1s;
		transform: translateY(-33vh);
	}
}

@media screen and (min-width: 1536px) {
	.content{
		font-size: 1.4em;
		.character {
			&.fu {
				left: 0vw!important;
			}

			&.li {
				right: 1vw!important;
			}
		}
	}
	.blur {
		filter: blur(4px) !important;
	}
	.blur:hover {
		filter: none!important;
		transition: all 1s;
		transform: translateY(-33vh);
	}
}

@media screen and (min-width: 1920px) {
	.content{
		font-size: 1.75em;
		.character {
			&.fu {
				left:0vw!important;
			}

			&.li {
				right: 1vw!important;
			}
		}
	}
	.blur {
		filter: blur(5px) !important;
	}
	.blur:hover {
		filter: none!important;
		transition: all 1s;
		transform: translateY(-33vh);
	}
}

@media screen and (min-width: 2560px) {
	.content{
		font-size: 2.3em;
		.character {
			&.fu {
				left: 0vw!important;
			}

			&.li {
				right: 1vw!important;
			}
		}
	}
	.blur {
		filter: blur(7px) !important;
	}
	.blur:hover {
		filter: none!important;
		transition: all 1s;
		transform: translateY(-33vh);
	}
}

.blur {
	filter: blur(2.5px);
	transition: all 1s;
}

.blur:hover {
	filter: none;
	transition: all 1s;
	transform: translateY(-33vh);
}

a {
	text-decoration: none;
	color: #000;
}

@keyframes fade-in {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

.fade-in {
	animation: fade-in 1s ease-in-out 0.5s forwards;
}

.content {
	height: 100vh;
	position: relative;
	overflow: hidden;

	.outro {
		width: 50vw;
		margin: 33vh auto 24vh;

	}

	.character {
		opacity: 0;
		height: 85vh;
		position: absolute;
		bottom: 2vh;

		&.fu {
			opacity: 0;
			left: 4vw;
		}

		&.li {
			right: 5vw;
			opacity: 0;
		}

		img {
			height: 95%;
		}
	}
}
</style>
