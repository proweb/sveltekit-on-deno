// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	namespace svelteHTML {
		interface HTMLAttributes<T> {
			'uk-navbar'?: boolean;
			'uk-navbar-toggle-icon'?: boolean;
			'uk-offcanvas'?: string | boolean;
			'uk-close'?: boolean;
			'uk-toggle'?: string | boolean;
			'uk-icon'?: string;
			'uk-sticky'?: string | boolean;
			'uk-scroll'?: string | boolean;
			'uk-alert'?: boolean;
			'uk-tooltip'?: string;
			'uk-form-custom'?: string | boolean;
			'uk-grid'?: string | boolean;
			'uk-height-viewport'?: string | boolean;
			'uk-height-match'?: string;
			'uk-image'?: string | boolean;
			'uk-svg'?: string | boolean;
			'uk-video'?: string | boolean;
			'uk-cover'?: boolean;
			'uk-spinner'?: string | boolean;
			'uk-drop'?: string;
			'uk-dropdown'?: string;
			'uk-modal'?: string | boolean;
			'uk-nav'?: string | boolean;
			'uk-navbar-transparent'?: boolean;
			'uk-filter'?: string;
			'uk-sortable'?: string | boolean;
			'uk-countdown'?: string;
			'uk-slideshow'?: string;
			'uk-slider'?: string;
			'uk-switcher'?: string;
			'uk-tab'?: string;
		}
	}
}

export {};
