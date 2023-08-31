<script>
	import { base } from '$app/paths';
	import Modal from '$lib/components/Modal.svelte';
	import { onMount } from 'svelte';
	onMount(() => {
		Notification.requestPermission();
		navigator.mediaDevices.getUserMedia({ video: true });
	});
</script>

<div class="bg">
	<Modal>
		<div slot="main">
			<p class="font-bold" id="header">
				<nobr>Allow permissions</nobr>
			</p>
			<p class="font-normal" id="content">
				<br />
				For better results and expierience please allow this page to use your camera and send you notifications.
				<br />
				Camera is used for generative art and notifications are memento-mori reminder for you.
			</p>
		</div>
		<div slot="footer-left">
			<a href="{base}/"><button class="btn">About project</button></a>
		</div>
		<div slot="footer-right">
			<a href="{base}/quiz"><button class="btn">Take the quiz</button></a>
		</div>
	</Modal>
</div>
