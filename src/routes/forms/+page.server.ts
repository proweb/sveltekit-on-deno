import { fail } from '@sveltejs/kit';
import { validateEntry, type EntryInput } from '#lib/entry.js';
import type { Actions, PageServerLoad } from './$types';

interface Entry extends EntryInput {
	id: string;
	timestamp: Date;
}

// Process-global demo state: shared by every visitor and lost on restart. Replace it with a real
// store before relying on it for anything user-specific.
const entries: Entry[] = [
	{
		id: crypto.randomUUID(),
		name: 'first',
		email: 'test',
		message: 'test',
		timestamp: new Date()
	}
];

export const load: PageServerLoad = () => {
	return {
		entries
	};
};

export const actions: Actions = {
	addEntry: async ({ request }) => {
		const formData = await request.formData();
		const { data, errors } = validateEntry(formData);

		if (Object.keys(errors).length > 0) {
			return fail(400, { success: false, errors });
		}

		entries.push({ id: crypto.randomUUID(), ...data, timestamp: new Date() });

		return { success: true, errors };
	}
};
