import { describe, expect, it } from 'vitest';
import { validateEntry } from './entry';

function formData(fields: Record<string, string>): FormData {
	const data = new FormData();

	for (const [key, value] of Object.entries(fields)) {
		data.set(key, value);
	}

	return data;
}

describe('validateEntry', () => {
	it('trims values and reports no errors for a valid submission', () => {
		const { data, errors } = validateEntry(
			formData({ name: '  Ada  ', email: ' ada@example.com ', message: '  hello  ' })
		);

		expect(errors).toEqual({});
		expect(data).toEqual({ name: 'Ada', email: 'ada@example.com', message: 'hello' });
	});

	it('requires a name and a message', () => {
		const { errors } = validateEntry(
			formData({ name: '   ', email: 'ada@example.com', message: '' })
		);

		expect(errors.name).toBeDefined();
		expect(errors.message).toBeDefined();
		expect(errors.email).toBeUndefined();
	});

	it('rejects a malformed email', () => {
		const { errors } = validateEntry(
			formData({ name: 'Ada', email: 'not-an-email', message: 'hello' })
		);

		expect(errors.email).toBeDefined();
	});

	it('treats missing fields as empty', () => {
		const { data, errors } = validateEntry(formData({}));

		expect(data).toEqual({ name: '', email: '', message: '' });
		expect(Object.keys(errors).sort()).toEqual(['email', 'message', 'name']);
	});
});
