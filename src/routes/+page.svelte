<script>
	import { base } from '$app/paths';
	import Modal from '$lib/components/Modal.svelte';
</script>

<div class="bg">
	<Modal>
		<div slot="main">
			<p class="font-worksans font-big font-900" id="header">I May Die Today</p>
			<p class="font-worksans font-normal" id="content">
        Your personal death clock counts down your time left on Earth.
        A serial reminder that time is not on our side. Time is indifferent.
        Life is limited. Your age, gender, screen time and other vices become your personal expiration date.
				<br /><br />
			</p>
		</div>
		<div slot="footer-right">
			<a href="{base}/request"
				><button class="btn" id="right-button">web page permissions</button></a
			>
		</div>
	</Modal>
</div>
