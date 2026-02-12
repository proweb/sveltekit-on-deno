<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import UIkit from 'uikit';
	import Icons from 'uikit/dist/js/uikit-icons';
	import 'uikit/dist/css/uikit.min.css';
	import './styles.css';

	let { children } = $props();

	onMount(() => {
		UIkit.use(Icons);
	});
</script>

<div class="uk-offcanvas-content">
	<nav class="uk-navbar-container">
		<div class="uk-container">
			<div class="uk-navbar" uk-navbar>
				<div class="uk-navbar-left">
					<a class="uk-navbar-item uk-logo" href="/">SvelteKit App</a>
				</div>
				<div class="uk-navbar-right">
					<ul class="uk-navbar-nav uk-visible@m">
						<li class={$page.url.pathname === '/' ? 'uk-active' : ''}><a href="/">Home</a></li>
						<li class={$page.url.pathname === '/about' ? 'uk-active' : ''}><a href="/about"
								>About</a
							></li>
						<li class={$page.url.pathname === '/forms' ? 'uk-active' : ''}><a href="/forms"
								>Forms</a
							></li>
						<li class={$page.url.pathname === '/typer' ? 'uk-active' : ''}><a href="/typer"
								>Typer</a
							></li>
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

<div id="mobile-nav" uk-offcanvas="overlay: true">
	<div class="uk-offcanvas-bar">
		<button class="uk-offcanvas-close" type="button" uk-close aria-label="Close Menu"></button>
		<ul class="uk-nav uk-nav-default">
			<li class="uk-nav-header">Menu</li>
			<li class={$page.url.pathname === '/' ? 'uk-active' : ''}><a href="/">Home</a></li>
			<li class={$page.url.pathname === '/about' ? 'uk-active' : ''}><a href="/about">About</a></li>
			<li class={$page.url.pathname === '/forms' ? 'uk-active' : ''}><a href="/forms">Forms</a></li>
			<li class={$page.url.pathname === '/typer' ? 'uk-active' : ''}><a href="/typer">Typer</a></li>
		</ul>
	</div>
</div>
