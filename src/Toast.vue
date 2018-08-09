<template>
  <v-snackbar
      :timeout="timeout"
      :color="color"
      :bottom="y === 'bottom'"
      :top="y === 'top'"
      :left="x === 'left'"
      :right="x === 'right'"
      :auto-height = "autoHeight"
      :multi-line = "multiLine"
      :vertical = "vertical"
      v-model="active"
      class="application"
      @click="dismiss"
  >
    <v-icon
        dark
        left
        v-if="!!icon"
        class="mr-4"
    >
      {{ icon }}
    </v-icon>

    {{ message }}
  </v-snackbar>
</template>

<script>
  export default {
    props: {
      x: {
        type: String,
        default: 'right'
      },
      y: {
        type: String,
        default: 'bottom'
      },
      color: {
        type: String,
        default: 'info'
      },
      icon: {
        type: String
      },
      message: {
        type: String
      },
      timeout: {
        type: Number,
        default: 3000
      },
      dismissable: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      multiLine: {
        type: Boolean,
        default: false
      },
      vertical: {
        type: Boolean,
        default: false
      }
    },

    data: () => ({
      active: false
    }),

    mounted() {
      this.$nextTick(() => this.show())
    },

    methods: {
      show() {
        this.active = true
      },

      close() {
        this.active = false
      },

      dismiss() {
        if (this.dismissable) {
          this.close()
        }
      }
    }
  }
</script>
