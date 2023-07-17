<script>
  import { base } from '$app/paths';
	import { quiz, getAge } from '$lib/index.js';
	import Modal from '$lib/components/Modal.svelte';

	let current = 0;

	function clickPrevious() {
		if (current !== 0) {
			current -= 1;
			factors = findFactors(quiz);
		}
	}
	function clickNext() {
		if (current < quiz.length - 1) {
			current += 1;
			factors = findFactors(quiz);
		}
	}

	$: currentQuestion = quiz[current];
	$: age = quiz.find((_) => _.id === 0).value;
	$: factors = findFactors(quiz);
	function findFactors(quizToFilter) {
		return quizToFilter
			.filter((q) => q.id !== 0)
			.map((q) => q.answers.find((a) => a.id === q.value).weight);
	}
</script>

<div class="bg">
	<Modal>
		<div slot="main">
			<legend class="font-worksans font-big font-600">
				{currentQuestion.question}
			</legend>
			<div class="answers">
				{#if currentQuestion.type === 'radio'}
					{#each currentQuestion.answers as a}
						<div>
							<input
								type="radio"
								id={a.id}
								name={currentQuestion.id}
								value={a.id}
								bind:group={currentQuestion.value}
								on:change={() => (factors = findFactors(quiz))}
							/>
							<label for={a.id}>{a.answer}</label>
						</div>
					{/each}
				{/if}

				{#if currentQuestion.type === 'number'}
					<input
						type="number"
						bind:value={currentQuestion.value}
						on:change={() => (age = quiz[0].value)}
					/>
				{/if}
			</div>
		</div>
		<div slot="footer-left">
			{#if current > 0}
				<button class="btn" on:click={clickPrevious}>previous</button>
			{:else}
        <a href="{base}/"><button class="btn" id="right-button">About the project</button></a>
			{/if}
		</div>
		<div slot="footer-right">
			{#if current < quiz.length - 1}
				<button class="btn" on:click={clickNext}>next</button>
			{:else}
				<a href="{base}/result"><button class="btn">result</button></a>
			{/if}
		</div>
	</Modal>
</div>

<!--
<div class="float">
	<p>factors: {factors}</p>
	<p>age: {age}</p>
	<p>expectancy: {getAge(factors, age)}</p>
</div>
-->

<style>
	.answers {
		padding: 10px;
		font-family: 'Work Sans', sans-serif;
	}
	.float {
		position: fixed;
		top: 20px;
		right: 20px;
		background-color: white;
		border: 3px solid #3333;
		padding: 15px;
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
