<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Главная</title>
	<meta name="description" content="Главная для приложения на Svelte" />
</svelte:head>

<section class="uk-section">
	<h1 class="uk-heading-medium">SvelteKit app</h1>
	<ul class="uk-list uk-list-disc uk-list-primary">
		<li><a href={resolve('/about')}>Страница о нас</a></li>
		<li><a href={resolve('/forms')}>Работа Form в Sveltekit</a></li>
		<li><a href={resolve('/typer')}>Анимация - печатная машинка</a></li>
	</ul>
</section>
