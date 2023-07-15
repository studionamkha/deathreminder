<script>
	import { quiz } from '$lib/index.js';
	import Modal from '$lib/components/Modal.svelte';

	let current = 0;

	function clickPrevious() {
		if ((current = 0)) {
			current -= 1;
		}
	}
	function clickNext() {
		if (current < quiz.length - 1) {
			current += 1;
		}
	}

	$: q = quiz[current];
</script>

<div class="bg">
	<Modal>
		<div slot="main">
			<p class="f-worksans font-big font-600">
				{q.question}
			</p>
			<p>
				{#if q.type === 'radio'}
					{#each q.answers as a}
						<p>{a.answer}</p>
					{/each}
				{/if}
			</p>
		</div>
		<div slot="footer-left">
			{#if current > 0}
				<button class="btn" on:click={clickPrevious}>previous</button>
			{/if}
		</div>
		<div slot="footer-right">
			{#if current < quiz.length - 1}
				<button class="btn" on:click={clickNext}>next</button>
			{/if}
		</div>
	</Modal>
</div>
