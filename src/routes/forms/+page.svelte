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

<section class="custom-section">
	<h1>Формы в Sveltekit</h1>

	<form class="pure-form pure-form-stacked" method="POST" action="?/addEntry" use:enhance>
		<fieldset>
			<div class="custom-field">
				<label for="name">Ваше имя:</label>
				<input
					type="text"
					name="name"
					id="name"
					class="pure-input-1"
					class:custom-input-error={!!form?.errors.name}
					aria-invalid={!!form?.errors.name}
					required
				/>
				{#if form?.errors.name}
					<p class="custom-text-danger">{form.errors.name}</p>
				{/if}
			</div>
			<div class="custom-field">
				<label for="email">Email:</label>
				<input
					type="email"
					name="email"
					id="email"
					class="pure-input-1"
					class:custom-input-error={!!form?.errors.email}
					aria-invalid={!!form?.errors.email}
					required
				/>
				{#if form?.errors.email}
					<p class="custom-text-danger">{form.errors.email}</p>
				{/if}
			</div>
			<div class="custom-field">
				<label for="message">Что хотите сказать:</label>
				<textarea
					name="message"
					id="message"
					class="pure-input-1"
					class:custom-input-error={!!form?.errors.message}
					aria-invalid={!!form?.errors.message}
					required
					rows="10"></textarea>
				{#if form?.errors.message}
					<p class="custom-text-danger">{form.errors.message}</p>
				{/if}
			</div>
			<button type="submit" class="pure-button pure-button-primary">Отправить</button>
		</fieldset>
	</form>

	<h2>Entries:</h2>
	<table class="pure-table pure-table-striped">
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
