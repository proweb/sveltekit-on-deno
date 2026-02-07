<script lang="ts">
	import { onDestroy } from 'svelte';

	let displayText = $state('');
	let intervalId: ReturnType<typeof setInterval> | undefined = undefined;

	const TextForTyping = () => {
			const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
			typer(text);
		}

	const typer = (content: string) => {
		// Clear existing interval if any to prevent multiple intervals running simultaneously
		if (intervalId) {
			clearInterval(intervalId);
		}

		displayText = ''; // Clear content for typewriter effect.
		let index = 0;
		const speed = 30; // Delay in milliseconds between each character.

		intervalId = setInterval(() => {
			if (index < content.length) {
				displayText += content[index];
				index++;
			} else {
				if (intervalId) clearInterval(intervalId);
				intervalId = undefined;
			}
		}, speed);
	};

	// Cleanup on component unmount
	onDestroy(() => {
		if (intervalId) {
			clearInterval(intervalId);
		}
	});
</script>

<svelte:head>
	<title>Typer Effect</title>
</svelte:head>

<section class="uk-section">
	<h1 class="uk-heading-medium">Typewriter Effect</h1>
	<p class="uk-tex-lead uk-text-center">Эффект печатной машинки</p>

	<div class="uk-placeholder">
		<p class="uk-h3" style="min-height: 10em;">
			{displayText}
		</p>
	</div>

	<button
		class="uk-button uk-button-primary uk-align-center"
		onclick={TextForTyping}>START!</button
	>
</section>
