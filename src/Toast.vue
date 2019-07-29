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
    class="v-application vts__snackbar"
    :class="classes"
    @click="dismiss"
  >
    <v-icon
      dark
      left
      v-if="!!icon"
      class="vts__snackbar__icon"
    >
      {{ icon }}
    </v-icon>

    <div class="vts__snackbar__message" v-html="message"></div>

    <v-btn
      flat
      icon
      class="vts__snackbar__close"
      v-if="!!showClose"
      @click="close"
    >
      <v-icon>close</v-icon>
    </v-btn>
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
    classes: {
      type: [ String, Object, Array ]
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
    },
    showClose: {
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

  watch: {
    active: function (isActive, wasActive) {
      this.$emit('statusChange', isActive, wasActive)
    }
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

<style>
  .vts__snackbar {
    max-width: none !important;
    width: auto !important;
  }

  .vts__snackbar .v-snack__content {
    justify-content: flex-start;
  }

  .vts__snackbar__icon {
    margin-right: 12px;
  }

  .vts__snackbar__message {
    margin-right: auto;
  }

  .vts__snackbar__close {
    margin: 0 -9px 0 24px !important;
    justify-self: flex-end;
  }

  .vts__snackbar.v-snack--vertical .vts__snackbar__icon {
    margin: 0 0 12px !important;
  }

  .vts__snackbar.v-snack--vertical .v-snack__content {
    padding-bottom: 24px !important;
  }

  .vts__snackbar.v-snack--vertical .vts__snackbar__message {
    padding-top: 12px;
  }

  .vts__snackbar.v-snack--vertical .vts__snackbar__icon + .vts__snackbar__message {
    padding-top: 0;
  }

  .vts__snackbar.v-snack--vertical .vts__snackbar__close {
    margin: 0 !important;
    position: absolute;
    right: 4px;
    top: 4px;
    transform: scale(0.75);
    padding: 4px !important;
  }
</style>
