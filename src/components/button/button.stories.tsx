import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// import { Icon } from '../icon'
import { Button } from './index'

export default {
  title: 'Form/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  bg: 'blue',
  color: 'white',
  variant: 'solid',
  rounded: false,
  radius: undefined,
  fluid: false,
  width: undefined,
  height: undefined,
  disabled: false,
  loading: false,
  loadingText: 'Loading...',
  loadingPlacement: 'start',
  children: 'Home',
  onClick: action('buttonClicked'),
  'data-test': 'test-button',
}
