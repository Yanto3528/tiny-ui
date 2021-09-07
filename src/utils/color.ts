import { Theme, css } from '@emotion/react'
import { get } from 'lodash-es'
import { ColorString } from '@/types'

interface GetColor {
  bg?: ColorString
  color?: ColorString | string
  theme: Theme
}

const ExcludedColor = ['white', 'black', 'transparent']

export function resolveColor(theme: Theme, color?: ColorString | string) {
  let finalColor = color && get(theme.colors, color)
  if (color && !ExcludedColor.includes(color) && typeof get(theme.colors, color) === 'object') {
    finalColor = get(theme.colors, `${color}.400`)
  }
  // const finalColor = convertedColor
  //   ? typeof get(theme.color, convertedColor) === 'object'
  //     ? get(theme.color, `${convertedColor}.50`)
  //     : ExcludedColor.includes(convertedColor) || get(theme.color, convertedColor)
  //     ? get(theme.color, convertedColor)
  //     : convertedColor
  //   : convertedColor

  return finalColor
}

export const getColor = ({ theme, color, bg }: GetColor) => css`
  background-color: ${resolveColor(theme, bg)};
  color: ${resolveColor(theme, color)};
`
