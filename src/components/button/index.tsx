import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'
import { ColorString } from '@/types'

import { StyledButton, Spinner } from './styles'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  bg?: ColorString
  color?: ColorString
  radius?: string
  width?: string
  height?: string
  rounded?: boolean
  fluid?: boolean
  loading?: boolean
  loadingText?: string
  loadingPlacement?: 'start' | 'end'
  'data-test'?: string
  variant: 'solid' | 'outline'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, loading, loadingText, loadingPlacement, disabled, ...props }, ref) => {
    let childElement: ReactNode
    if (loading) {
      childElement =
        loadingPlacement === 'end' ? (
          <>
            {loadingText} <Spinner size='14px' style={{ marginLeft: '5px' }} />
          </>
        ) : (
          <>
            <Spinner size='14px' style={{ marginRight: '5px' }} /> {loadingText}
          </>
        )
    } else {
      childElement = children
    }

    return (
      <StyledButton
        type='button'
        className='asura-button'
        bg='blue'
        color='white'
        {...props}
        disabled={disabled || loading}
        ref={ref}
      >
        {childElement}
      </StyledButton>
    )
  }
)
