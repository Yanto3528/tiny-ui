interface ColorShade {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export interface Color {
  black: string
  white: string
  transparent: string
  blue: ColorShade
  red: ColorShade
  green: ColorShade
  yellow: ColorShade
  gray: ColorShade
}

export type ColorString = keyof Color | `${keyof Omit<Color, 'black' | 'white' | 'transparent'>}.${keyof ColorShade}`

// export interface Color {
//   primary: string
//   primaryLight: string
//   primaryOpaque: string
//   primaryOpaque2: string
//   danger: string
//   dangerOpaque: string
//   dangerLight: string
//   success: string
//   info: string
//   lightgray: string
//   lightgray2: string
//   lightgray3: string
//   darkgray: string
//   gray: string
//   gray2: string
//   gray3: string
//   white: string
//   transparent: string
// }
