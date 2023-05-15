import React from 'react';
import {render, screen} from '@testing-library/react';
import HeadPatElia from './head_pat_elia';

it('renders the head pat button', () => {
  render(<HeadPatElia />);
  expect(screen.getByRole('button', {name: 'Head pat Elia'})).toBeEnabled();
  expect(screen.getByRole('button', {name: 'Click to head pat Elia'})).toBeEnabled();
});
