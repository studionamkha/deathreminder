<script>
	import P5 from 'p5-svelte';
	let width;
	let height;

	let a;
	let b;
	let c;
	let cam;

	const sketch = (p5) => {
		p5.setup = () => {
			a = p5.random(0, 255);
			b = p5.random(0, 255);
			c = p5.random(0, 255);
			p5.createCanvas(width, height);
			p5.noStroke();
			cam = p5.createCapture(p5.VIDEO);
			cam.size(width, (width * cam.height) / cam.width);
			cam.hide();
		};

		p5.draw = () => {
			p5.fill(a, b, c);
			p5.background(255 - a, 255 - b, 255 - c);
			cam.loadPixels();
			const stepSize = p5.round(p5.constrain(1 / 8, 10, 32));
			for (let y = 0; y < height; y += stepSize) {
				for (let x = 0; x < width; x += stepSize) {
					const i = y * width + x;
					const darkness = (255 - cam.pixels[i * 4]) / 255;
					const radius = stepSize * darkness;
					p5.circle(x, y, radius, radius);
				}
			}
		};
	};
</script>

<svelte:window bind:innerHeight={height} bind:innerWidth={width} />

<div class="background">
	<div class="canvas">
		<P5 {sketch} />
	</div>
	<div class="foreground">
		<slot />
	</div>
</div>

<style>
	.background {
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: #222;
	}
	.canvas {
		position: fixed;
		width: 100vw;
		height: 100vh;
		text-align: center;
		vertical-align: center;
		z-index: -1;
	}
	.foreground {
		position: fixed;
		width: 100vw;
		height: 100vh;
		z-index: 5;
	}
</style>
