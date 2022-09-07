import * as React from 'react';
import { render } from '@testing-library/react';
import Page from '../index';

test('TreeSelect test', () => {
  const wrapper = render(<Page />);
  const el = wrapper.queryByText('pro-components TreeSelect');
  expect(el).toBeTruthy();
});
