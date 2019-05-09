# Vuetify Toast Snackbar

> Basic Vue toast service with queue support that uses [Vuetify](https://github.com/vuetifyjs/vuetify) Snackbar component.
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
	classes: [
		'body-2'
	],
	timeout: 3000, // default
	dismissable: true, // default
	autoHeight: false, // default
	multiLine: false, // default
	vertical: false, // default
	queueable: false, // default
	shorts: {
		custom: {
			color: 'purple'
		}
	},
	property: '$toast' // default
})
```

### Nuxt.js

Update `plugins/vuetify.js`

```js
import Vue from 'vue'
import Vuetify, { VSnackbar } from 'vuetify/lib'
import VuetifyToast from 'vuetify-toast-snackbar'

Vue.use(Vuetify, {
  components: {
    VSnackbar
  }
})

Vue.use(VuetifyToast)
```

### Call

```js
this.$toast('Default toast')

this.$toast.info('Info toast')

this.$toast('Custom options', {
	color: 'green',
	dismissable: true,
	queueable: true
})

this.$toast.custom('Custom short')
```