# Vuetify Toast Snackbar

> Simple toast service based on [vuetify](https://github.com/vuetifyjs/vuetify) snackbar component.
> Inspired by https://github.com/pzs/vuetify-toast

## Installation

```bash
npm install vuetify-toast-snackbar
```

## Demo

Demo: https://eolant.github.io/vuetify-toast-snackbar

## Usage

### Bundler (Webpack, Rollup)

```js
import VuetifyToast from 'vuetify-toast-snackbar'

Vue.use(VuetifyToast, {
	x: 'right', // default
	y: 'bottom', // default
	color: 'info', // default
	icon: 'info',
	timeout: 3000, // default
	dismissable: true, // default
	autoHeight: false, // default
	multiLine: false, // default
	vertical: false, // default
	shorts: {
		custom: {
			color: 'purple'
		}
	},
	property: '$toast' // default
})

// In the component
this.$toast('Default toast')

this.$toast.info('Info toast')

this.$toast('Custom options', {
	color: 'green',
	dismissable: true
})

this.$toast.custom('Custom short')
```
