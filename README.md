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
	iconColor: '', // default
	classes: [
		'body-2'
	],
	timeout: 3000, // default
	dismissable: true, // default
	multiLine: false, // default
	vertical: false, // default
	queueable: false, // default
	showClose: false, // default
	closeText: '', // default
	closeIcon: 'close', // default
	closeColor: '', // default
	slot: [], //default
	shorts: {
		custom: {
			color: 'purple'
		}
	},
	property: '$toast' // default
})
```

### Vue loader (e.g. Nuxt.js)

Update `plugins/vuetify.js`

```js
import Vue from 'vue'
import Vuetify, { VSnackbar, VBtn, VIcon } from 'vuetify/lib'
import VuetifyToast from 'vuetify-toast-snackbar'

Vue.use(Vuetify, {
  components: {
    VSnackbar,
    VBtn,
    VIcon
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

this.$toast(null, {
	slot: [this.$createElement('button', ['Click here'])]
})
```

### Get currently displayed Toast component

```js
let cmp = this.$toast.getCmp()
cmp.message = 'Dynamic properties'
cmp.close()
```

### Clear Toasts queue

```js
let queue = this.$toast.clearQueue()
```