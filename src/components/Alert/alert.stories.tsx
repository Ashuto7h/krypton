import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Alert } from './Alert';

export default {
  /** this is an Alert component */
  component: Alert,
  title: 'Alert'
} as ComponentMeta<typeof Alert>;

export const Primary: ComponentStory<typeof Alert> = () => <Alert open>Alert box</Alert>;
