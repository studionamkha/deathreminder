<script>
	export let transparent = false;
</script>

<div class="modal-wrapper">
	<div class="modal" class:modal-transparent={transparent}>
		<slot name="main" />
		<div class="modal-footer">
			<slot name="footer" />
			<div class="footer-left">
				<slot name="footer-left" />
			</div>
			<div class="footer-center">
				<slot name="footer-center" />
			</div>
			<div class="footer-right">
				<slot name="footer-right" />
			</div>
		</div>
	</div>
</div>
