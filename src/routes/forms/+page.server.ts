// deno-lint-ignore no-sloppy-imports
import type { Actions, PageServerLoad } from './$types';

interface Entry {
	name: string;
	email: string;
	message: string;
	timestamp?: Date;
}

const entries: Entry[] = [{ name: 'first', email: 'test', message: 'test' }];

export const load: PageServerLoad = () => {
	return {
		entries
	};
};

export const actions: Actions = {
	addEntry: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name') as string;
		const email = formData.get('email') as string;
		const message = formData.get('message') as string;

		if (name && message) {
			const newEntry: Entry = {
				name,
				email,
				message,
				timestamp: new Date()
			};
			entries.push(newEntry);
		}

		return { success: true };
	}
};
