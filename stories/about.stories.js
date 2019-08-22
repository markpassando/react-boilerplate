import React from 'react';
import { storiesOf } from '@storybook/react';

import About from '../src/containers/about/';

storiesOf('About', module).add('Index Page', () => <About />);