import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Button from './index';

storiesOf('Button', module)
  .add('default', () => (
    <Button variant='contained'>
        Test Default Button
      </Button>
  ))
  .add('primary', () => (
    <Button variant='contained' color='primary'>
        Test Primary Button
      </Button>
  ));