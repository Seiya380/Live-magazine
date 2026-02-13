<script>
	import { writable } from 'svelte/store';

	const commentary = writable('A story in 15 parts. Choose your entry point.');

	const summaryItems = [
		{ num: 1, title: 'Edito', comment: 'The beginning is always a good place to start.' },
		{ num: 4, title: 'Qui suis-je ?', comment: 'The eternal question.' },
		{ num: 5, title: 'Si j’étais ?', comment: 'A game of hypotheticals.' },
		{ num: 7, title: 'Napenda / Sipendi', comment: 'Love and... not love? Intriguing.' },
		{ num: 9, title: 'Alter', comment: 'Everyone has another side.' },
		{ num: 11, title: 'Ouverture', comment: 'Opening up.' },
		{ num: 12, title: 'Mon Glossaire', comment: 'Defining the terms of this reality.' },
		{ num: 13, title: 'Je suis unique', comment: 'A bold statement. Let\'s see.' },
		{ num: 14, title: 'Cassandre', comment: 'A prophet of doom?' },
		{ num: 15, title: 'L’enfant que je suis', comment: 'The past is never far.' },
		{ num: 17, title: 'Tableau de vision', comment: 'Looking into the future.' },
		{ num: 18, title: 'Pandora’s box', comment: 'Are you sure you want to open that?' },
		{ num: 19, title: 'Manifeste', comment: 'A declaration.' },
		{ num: 20, title: 'Pourquoi oser ?', comment: 'Why not?' },
		{ num: 21, title: 'Création visuelle', comment: 'The grand finale.' }
	];

	function handleHover(item) {
		commentary.set(item.comment);
	}

	function handleMouseLeave() {
		commentary.set('Where to next?');
	}
</script>

<section class="summary-section" on:mouseleave={handleMouseLeave}>
	<!-- Placeholder for the geometric shapes -->
	<div class="shape shape-1"></div>
	<div class="shape shape-2"></div>
	<div class="shape shape-3"></div>

	<div class="summary-content">
		<ul class="summary-list">
			{#each summaryItems as item}
				<li class="summary-item" on:mouseenter={() => handleHover(item)}>
					<span class="item-number">{item.num}.</span>
					<span class="item-title">{item.title}</span>
				</li>
			{/each}
		</ul>
	</div>

	<div class="commentary-box">
		<p class="commentary-text">{$commentary}</p>
	</div>
</section>

<style>
	.summary-section {
		position: relative;
		min-height: 100vh;
		background: linear-gradient(160deg, #6a0dad 0%, #c400c4 70%, #ff1493 100%);
		color: #f0e8d9;
		font-family: 'Courier New', Courier, monospace;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4rem 2rem;
		overflow: hidden;
	}

	.summary-content {
		position: relative;
		z-index: 2;
		text-align: left;
	}

	.summary-list {
		list-style: none;
		padding: 0;
	}

	.summary-item {
		font-size: 1.5rem;
		line-height: 2.2;
		color: rgba(240, 232, 217, 0.7);
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		display: flex;
		align-items: baseline;
	}

	.summary-item:hover {
		color: #ffffff;
		transform: translateX(10px);
	}

	.item-number {
		min-width: 40px;
		text-align: right;
		margin-right: 1rem;
		font-weight: bold;
	}

	.commentary-box {
		position: absolute;
		bottom: 2rem;
		right: 2rem;
		border: 1px solid rgba(240, 232, 217, 0.5);
		padding: 1rem 1.5rem;
		max-width: 300px;
		background-color: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(5px);
		z-index: 3;
	}

	.commentary-text {
		font-size: 1rem;
		color: #f0e8d9;
		margin: 0;
	}

	/* Placeholder styles for the geometric shapes */
	.shape {
		position: absolute;
		background-color: rgba(0, 0, 0, 0.1);
		border: 2px solid rgba(255, 255, 255, 0.1);
		z-index: 1;
	}
	.shape-1 {
		width: 400px;
		height: 400px;
		top: 5%;
		left: -100px;
		transform: rotate(45deg);
	}
	.shape-2 {
		width: 300px;
		height: 300px;
		top: 20%;
		right: -50px;
		transform: rotate(20deg);
	}
	.shape-3 {
		width: 500px;
		height: 500px;
		bottom: -150px;
		left: 20%;
		transform: rotate(-30deg);
	}
</style>
