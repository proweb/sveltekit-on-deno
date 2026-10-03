<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, PageData } from './$types';

	let { data, form }: { data: PageData; form: ActionData } = $props();

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
			<input
				type="text"
				name="name"
				id="name"
				class="uk-input"
				class:uk-form-danger={!!form?.errors.name}
				aria-invalid={!!form?.errors.name}
				required
			/>
			{#if form?.errors.name}
				<p class="uk-text-danger uk-margin-small-top">{form.errors.name}</p>
			{/if}
		</div>
		<div class="uk-margin">
			<label for="email" class="uk-form-label">Email:</label>
			<input
				type="email"
				name="email"
				id="email"
				class="uk-input"
				class:uk-form-danger={!!form?.errors.email}
				aria-invalid={!!form?.errors.email}
				required
			/>
			{#if form?.errors.email}
				<p class="uk-text-danger uk-margin-small-top">{form.errors.email}</p>
			{/if}
		</div>
		<div class="uk-margin">
			<label for="message" class="uk-form-label">Что хотите сказать:</label>
			<textarea
				name="message"
				id="message"
				class="uk-textarea"
				class:uk-form-danger={!!form?.errors.message}
				aria-invalid={!!form?.errors.message}
				required
				rows="10"></textarea>
			{#if form?.errors.message}
				<p class="uk-text-danger uk-margin-small-top">{form.errors.message}</p>
			{/if}
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
			{#each entries as entry (entry.id)}
				<tr>
					<td>{entry.name}</td>
					<td>{entry.email}</td>
					<td>{entry.message}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>
