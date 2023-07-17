<script>
  import { base } from '$app/paths';
	import Modal from '$lib/components/Modal.svelte';
	import { quiz, getAge } from '$lib/index.js';
	import BackgroundCamera from '../../lib/components/BackgroundCamera.svelte';
	$: age = quiz.find((_) => _.id === 0).value;
	$: factors = findFactors(quiz);
	let date = new Date();
	function formatToDay(time) {
		const theDay = time.toLocaleDateString('pt-PT').replaceAll('/', '.');
		return theDay;
	}
	function findFactors(quizToFilter) {
		return quizToFilter
			.filter((q) => q.id !== 0)
			.map((q) => q.answers.find((a) => a.id === q.value).weight);
	}
</script>

<BackgroundCamera>
	<Modal transparent={true}>
		<div slot="main">
			<p class="font-worksans font-600" style="font-size: 1.5em;">
				expected time left for {formatToDay(date)}:
			</p>
			<p class="font-worksans font-big" id="header">
				<nobr
					><span class="font-900">{getAge(factors, age)}</span>
					<span class="font-600">years</span></nobr
				>
			</p>
		</div>
		<div slot="footer-left">
			<a href="{base}/quiz"><button class="btn btn-transparent">Take the quiz again</button></a>
		</div>
		<div slot="footer-right">
			<button class="btn btn-transparent">Share result</button>
		</div>
	</Modal>
</BackgroundCamera>

<style>
	button {
		font-family: 'Work Sans', sans-serif;
	}
</style>
