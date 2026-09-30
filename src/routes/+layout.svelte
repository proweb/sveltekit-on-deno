<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import { resolve } from '$app/paths';
	import UIkit from 'uikit';
	import Icons from 'uikit/dist/js/uikit-icons';
	import 'uikit/dist/css/uikit.min.css';
	import './styles.css';

	let { children } = $props();

	afterNavigate(() => {
		UIkit.offcanvas('#mobile-nav')?.hide();
	});

	onMount(() => {
		UIkit.use(Icons);
	});
</script>

<div class="uk-offcanvas-content">
	<nav class="uk-navbar-container">
		<div class="uk-container">
			<div class="uk-navbar" uk-navbar>
				<div class="uk-navbar-left">
					<a class="uk-navbar-item uk-logo" href={resolve('/')}>SvelteKit App</a>
				</div>
				<div class="uk-navbar-right">
					<ul class="uk-navbar-nav uk-visible@m">
						<li class={page.url.pathname === resolve('/') ? 'uk-active' : ''}>
							<a href={resolve('/')}>Home</a>
						</li>
						<li class={page.url.pathname === resolve('/about') ? 'uk-active' : ''}>
							<a href={resolve('/about')}>About</a>
						</li>
						<li class={page.url.pathname === resolve('/forms') ? 'uk-active' : ''}>
							<a href={resolve('/forms')}>Forms</a>
						</li>
						<li class={page.url.pathname === resolve('/typer') ? 'uk-active' : ''}>
							<a href={resolve('/typer')}>Typer</a>
						</li>
					</ul>
					<a
						class="uk-navbar-toggle uk-hidden@m"
						uk-navbar-toggle-icon
						href="#mobile-nav"
						uk-toggle
						aria-label="Open Menu"
					>
						<span class="uk-margin-small-left">Menu</span>
					</a>
				</div>
			</div>
		</div>
	</nav>

	<main class="uk-container uk-padding">
		{@render children?.()}
	</main>
</div>

<div id="mobile-nav" uk-offcanvas="overlay: true; flip: true">
	<div class="uk-offcanvas-bar">
		<button class="uk-offcanvas-close" type="button" uk-close aria-label="Close Menu"></button>
		<ul class="uk-nav uk-nav-default">
			<li class="uk-nav-header">Menu</li>
			<li class={page.url.pathname === resolve('/') ? 'uk-active' : ''}>
				<a href={resolve('/')} uk-toggle="target: #mobile-nav">Home</a>
			</li>
			<li class={page.url.pathname === resolve('/about') ? 'uk-active' : ''}>
				<a href={resolve('/about')} uk-toggle="target: #mobile-nav">About</a>
			</li>
			<li class={page.url.pathname === resolve('/forms') ? 'uk-active' : ''}>
				<a href={resolve('/forms')} uk-toggle="target: #mobile-nav">Forms</a>
			</li>
			<li class={page.url.pathname === resolve('/typer') ? 'uk-active' : ''}>
				<a href={resolve('/typer')} uk-toggle="target: #mobile-nav">Typer</a>
			</li>
		</ul>
	</div>
</div>
