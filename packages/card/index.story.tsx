/* tslint:disable:no-implicit-dependencies */
import { storiesOf } from '@storybook/react';
import * as React from 'react';
/* tslint:enable:no-implicit-dependencies */

import Card from './index';

storiesOf('Card', module)
  .add('default', () => {

    const header = {
      date: '6 de Agosto de 2018',
      title: 'Receita do Bolo de ananas',
      userAbre: 'MC',
    };

    const media = {
      image: 'http://www.padrinhos.pt/wp-content/uploads/2016/05/cachorro-especial.jpg',
    };

    return (
    <Card header={header} media={media}>
        Test Default Button
      </Card>
  ); });
