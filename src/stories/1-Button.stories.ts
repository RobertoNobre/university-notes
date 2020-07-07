import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import '../styles/global.scss';

import { Button } from '@storybook/angular/demo';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { centered } from '@storybook/addon-centered/angular';
import { ButtonComponent } from 'src/app/components/button/button.component';

storiesOf('Components|Button', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ButtonComponent],
    })
  )
  .addDecorator(centered)
  .add('Primary', () => ({
    template: `<app-button></app-button>`,
    props: {
      text: 'Primary Button',
      onClick: event => {
        console.log('some bindings work');
        console.log(event);
      },
    },
  })).add('Secondary', () => ({
    template: `<storybook-button-component
        [text]="text" (onClick)="onClick($event)">
      </storybook-button-component>`,
    props: {
      text: 'Secondary Button',
      onClick: event => {
        console.log('some bindings work');
        console.log(event);
      },
    },
  }));

