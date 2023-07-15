<script>
	import { quiz } from '$lib/index.js';
	import Modal from '$lib/components/Modal.svelte';

	let current = 0;

	function clickPrevious() {
		if (current !== 0) {
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
			<fieldset>
				<legend class="font-worksans font-big font-600">
					{q.question}
				</legend>
				<div class="answers">
					{#if q.type === 'radio'}
						{#each q.answers as a}
							<div>
								<input type="radio" id={a.id} name={q.id} value={a.id} />
								<label for={a.id}>{a.answer}</label>
							</div>
						{/each}
					{/if}

					{#if q.type === 'number'}
						<input type="number" />
					{/if}
				</div>
			</fieldset>
		</div>
		<div slot="footer-left">
			{#if current > 0}
				<button class="btn" on:click={clickPrevious}>previous</button>
			{:else}
				<a href="/"><button class="btn" id="right-button">About the project</button></a>
			{/if}
		</div>
		<div slot="footer-right">
			{#if current < quiz.length - 1}
				<button class="btn" on:click={clickNext}>next</button>
			{/if}
		</div>
	</Modal>
</div>

<style>
	.answers {
		padding: 10px;
		font-family: 'Work Sans', sans-serif;
	}
	input {
		font-family: 'Work Sans', sans-serif;
		font-size: 1em;
	}
	input:focus {
		outline: 3px solid #dd02;
	}
	button {
		font-family: 'Work Sans', sans-serif;
	}

	input[type='radio'] {
		display: none;
	}

	label:before {
		content: ' ';
		display: inline-block;
		position: relative;
		top: 7px;
		right: 5px;
		margin: 10px 5px 5px 5px;
		width: 20px;
		height: 20px;
		border-radius: 10px;
		box-sizing: border-box;
		border: 3px solid #5004;
		background-color: transparent;
	}

	input[type='radio']:checked + label:before {
		position: relative;
		border: 3px solid #5004;
		box-sizing: border-box;
		border-radius: 10px;
		width: 20px;
		height: 20px;
		top: 7px;
		content: ' ';
		display: inline-block;
		background-color: #a22;
	}

	label {
		font-size: 1.5em;
	}
</style>
