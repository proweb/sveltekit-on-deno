<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let entries = $derived(data.entries || []);
</script>

<svelte:head>
	<title>Формы в Sveltekit</title>
	<meta name="description" content="Обработка форм" />
</svelte:head>

<section class="uk-section">
	<h1>Формы в Sveltekit</h1>

	<form class="uk-form" method="POST" action="?/addEntry" use:enhance>
		<div class="uk-margin">
			<label for="name" class="uk-form-label">Ваше имя:</label>
			<input type="text" name="name" id="name" class="uk-input" required />
		</div>
		<div class="uk-margin">
			<label for="email" class="uk-form-label">Email:</label>
			<input type="email" name="email" id="email" class="uk-input" required />
		</div>
		<div class="uk-margin">
			<label for="message" class="uk-form-label">Что хотите сказать:</label>
			<textarea name="message" id="message" class="uk-textarea" required rows="10"></textarea>
		</div>
		<div class="uk-margin">
			<button type="submit" class="uk-button uk-button-primary">Отправить</button>
		</div>
	</form>
	<h2>Entries:</h2>
	<table class="uk-table uk-table-divider">
		<thead>
			<tr>
				<th>Name</th>
				<th>Email</th>
				<th>Message</th>
			</tr>
		</thead>
		<tbody>
			{#each entries as entry}
				<tr>
					<td>{entry.name}</td>
					<td>{entry.email}</td>
					<td>{entry.message}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>
