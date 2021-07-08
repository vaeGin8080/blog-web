<template>
	<div class="chart-wrap" :style="option">
		<!-- <chart ref="chart" :config="config.option"></chart> -->
		<component :is="sw(type)" ref="chart" :config="config.chartOption"></component>
	</div>
</template>

<script>
	import chart from "@/components/Charts/chart";
	import Title from "@/components/Charts/Title";
	import {
		sw
	} from "@/utils/charts";
	export default {
		name: "Chart",
		components: {
			chart,
			Title
		},
		props: {
			type: {
				type: [String, Number],
				default: "",
			},
			index: {
				type: Number,
				default: 0,
			},
			config: {
				type: Object,
				default () {
					return {};
				},
			},
		},
		data() {
			return {};
		},
		mounted() {
			console.log(this.loader);
		},
		computed: {
			option() {
				let obj = {
					// width: this.config.width + "px",
					// left: this.config.left + "px",
					width: (this.config.width / 1920) * 100 + "%",
					height: this.config.height + "px",
					left: (this.config.left / 1920) * 100 + "%",
					top: this.config.top + "px",
				};
				return obj;
			},
			loader() {
				return () => import(`@/components/Charts/chart`)
			},
		},
		methods: {
			sw,
		},
	};
</script>

<style lang="scss" scoped>
	.chart-wrap {
		max-width: 100%;
		position: absolute;

		.chart-item {
			border: 1px solid #ccc;
			transition: all 0.3s;

			&:hover {
				box-shadow: 2px 2px 4px 2px #cccccc;
			}
		}
	}
</style>
