import { fireEvent, waitFor, render, screen } from '@testing-library/react';
import Result from '../Result';
test('need to run the handler on button click', async () => {
  render( <Result/>);
  let button = screen.getByText('count:');
  expect(button).toBeInTheDocument();
});