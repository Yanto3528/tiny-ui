import styled from '@emotion/styled'
import { css, Theme, keyframes } from '@emotion/react'
import { ColorString } from '@/types'
import { resolveColor } from '../../utils'

import { ButtonProps } from './index'

interface ButtonStyles {
  theme: Theme
  bg?: ColorString | string
  color?: ColorString | string
  disabled?: boolean
}

interface LoadingSpinnerProps {
  size?: string
  color?: ColorString
}

const infiniteSpin = keyframes`
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(360deg);
  }
`

export const TestButton = styled.button<{ width: string }>`
  width: ${({ width }) => width};
`

export const StyledButton = styled.button<ButtonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  outline: none;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.4rem;
  border-radius: ${({ rounded, radius }) => (radius || rounded ? '50px' : '4px')};
  cursor: pointer;
  transition: all 0.4s ease-out;
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  ${({ fluid }) =>
    fluid &&
    css`
      width: 100%;
    `}

  ${({ theme, variant, color, bg, disabled }) => {
    switch (variant) {
      case 'outline':
        return outlineStyles({ theme, bg, color, disabled })
      default:
        return solidStyles({ theme, bg, color })
    }
  }}
`

const outlineStyles = ({ theme, bg, color }: ButtonStyles) => {
  return `
    border: 1px solid ${resolveColor(theme, bg)};
    color: ${resolveColor(theme, bg)};
    background-color: transparent;
    ${Spinner} {
      border-color: ${resolveColor(theme, bg)};
      border-top-color: transparent;
    }
    &:hover:not(:disabled) {
      background-color: ${resolveColor(theme, bg)};
      color: ${resolveColor(theme, color)};
    }
  `
}

const solidStyles = ({ theme, bg, color }: ButtonStyles) => {
  return `
    background-color: ${resolveColor(theme, bg)};
    color: ${resolveColor(theme, color)};
    &:hover:not(:disabled) {
      opacity: 0.9
    }
    ${Spinner} {
      border-color: ${resolveColor(theme, color)};
      border-top-color: transparent;
    }
  `
}

export const Spinner = styled.div<LoadingSpinnerProps>`
  width: ${({ size }) => size || '20px'};
  height: ${({ size }) => size || '20px'};
  border: 2px solid ${({ theme, color }) => resolveColor(theme, color)};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${infiniteSpin} 1s linear infinite;
`
