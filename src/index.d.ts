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
  timeout?: number
  dismissable?: boolean
  autoHeight? : boolean
  multiLine? : boolean
  vertical? : boolean
  shorts? : any
}

declare module 'vue/types/vue' {
  interface Vue {
    $toast(message: string, options?: VuetifyToastObject): void
  }
}