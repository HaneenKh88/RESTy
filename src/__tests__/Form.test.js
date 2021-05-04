import { fireEvent, waitFor, render, screen } from '@testing-library/react';
import Form from '../Form';
test('need to run the handler on button click', async () => {

  let handler = jest.fn();
  render(<Form handler={handler} />);
  let button = screen.getByText('GO!');
  expect(button).toBeInTheDocument();
  fireEvent.submit(button, {
      target:{
        url: { value: 'https://swapi.dev/api/people/' },
        method: 'GET',
     
      }
  });
  await waitFor(() => expect(handler).toHaveBeenCalled());
});