import '@emotion/react'

import { Color } from '../types'

declare module '@emotion/react' {
  export interface Theme {
    colors: Color
    boxShadow: {
      primary: string
    }
    radius: {
      sm: string
      md: string
      rounded: string
    }
  }
}
