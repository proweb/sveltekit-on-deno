<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Главная</title>
	<meta name="description" content="Главная для приложения на Svelte" />
</svelte:head>

<section class="custom-section">
	<h1>SvelteKit app</h1>
	<ul>
		<li><a href={resolve('about')}>Страница о нас</a></li>
		<li><a href={resolve('forms')}>Работа Form в Sveltekit</a></li>
		<li><a href={resolve('typer')}>Анимация - печатная машинка</a></li>
	</ul>
</section>
