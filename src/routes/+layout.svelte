<script lang="ts">
	import { onMount } from 'svelte';
	import './styles.css';

	let { children } = $props();

	onMount(async () => {
		// @ts-ignore
		const UIkit = (await import('uikit')).default;
		// @ts-ignore
		const Icons = (await import('uikit/dist/js/uikit-icons')).default;
		UIkit.use(Icons);
	});
</script>

<main class="uk-container uk-padding">
	{@render children?.()}
</main>
