export interface EntryInput {
	name: string;
	email: string;
	message: string;
}

export type EntryErrors = Partial<Record<keyof EntryInput, string>>;

// Deliberately permissive — the browser already enforces `type="email"`, this is only a
// server-side guard against requests that bypass the form.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEntry(formData: FormData): { data: EntryInput; errors: EntryErrors } {
	const data: EntryInput = {
		name: String(formData.get('name') ?? '').trim(),
		email: String(formData.get('email') ?? '').trim(),
		message: String(formData.get('message') ?? '').trim()
	};

	const errors: EntryErrors = {};

	if (!data.name) errors.name = 'Укажите имя';
	if (!data.message) errors.message = 'Введите сообщение';

	if (!data.email) {
		errors.email = 'Укажите email';
	} else if (!EMAIL.test(data.email)) {
		errors.email = 'Некорректный email';
	}

	return { data, errors };
}
