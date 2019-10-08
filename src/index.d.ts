import Vue, { PluginFunction } from 'vue'

export interface VuetifyToastUseOptions extends VuetifyToastObject {
  property?: string
}

declare const VuetifyToastPlugin: VuetifyToastPlugin
export default VuetifyToastPlugin

export interface VuetifyToastPlugin {
  install: PluginFunction<VuetifyToastUseOptions>
}

export interface VuetifyToastObject {
  x?: string
  y?: string
  color?: string
  icon?: string
  iconColor?: string
  classes?: string | object | Array<object | string>
  timeout?: number
  dismissable?: boolean
  multiLine?: boolean
  vertical?: boolean
  showClose?: boolean
  closeText?: string
  closeIcon?: string
  closeColor?: string
  queueable?: boolean
  slot?: Array<any>
  shorts?: any
}

interface VuetifyToastShow {
  (message: string, options?: VuetifyToastObject): void
}

interface VuetifyToastMethods extends VuetifyToastShow {
  getCmp: any
  clearQueue: any
  [key: string]: VuetifyToastShow
}

declare module 'vue/types/vue' {
  interface Vue {
    $toast: VuetifyToastMethods
  }
}