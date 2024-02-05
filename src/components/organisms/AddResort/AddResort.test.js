import { fireEvent, screen} from '@testing-library/react'
import { MemoryRouter } from "react-router-dom"
import { AddResort } from "./AddResort"
import { renderWithProviders } from "helpers/renderWithProviders"
import { ResortsList } from "../ResortsList/ResortsList"

describe('AddResort component', () => {
  it('Adds new resort', async () => {
    renderWithProviders(
      <MemoryRouter>
        <AddResort />
        <ResortsList />
      </MemoryRouter>
    )    
    fireEvent.change(screen.getByTestId('name'), { target: { value: 'Ski Juwel' }});
    fireEvent.change(screen.getByTestId('country'), { target: { value: 'Austria' }});
    fireEvent.change(screen.getByTestId('place'), { target: { value: 'Reith im Alpbachtal' }});
    fireEvent.change(screen.getByTestId('lat'), { target: { value: '47.405' }});
    fireEvent.change(screen.getByTestId('long'), { target: { value: '11.879' }});
    fireEvent.change(screen.getByTestId('liftCount'), { target: { value: '2' }});
    fireEvent.change(screen.getByTestId('liftTypes'), { target: { value: 'chairs'  }});
    fireEvent.change(screen.getByTestId('trailRatings'), { target: { value: 'red' }});
    fireEvent.click(screen.getByTestId('bunnySlope'));
    fireEvent.change(screen.getByTestId('www'), { target: { value: 'www.alpbachtal.at' }});
    fireEvent.click(screen.getByText('Add'));
  })
})