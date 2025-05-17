import {render, screen} from '@testing-library/react'
import Home from '../app/page'

jest.mock('../app/videoabout', () => () => <div data-testid="videoabout" />)
jest.mock('../app/counter', () => () => <div data-testid="counter" />)
jest.mock('../app/cards', () => () => <div data-testid="cards" />)
jest.mock('../app/festivals', () => () => <div data-testid="festivals" />)

describe('home page', () => {
  it('renders home page', () => { 
      render(<Home />)

      expect(screen.getByTestId('videoabout')).toBeInTheDocument();
      expect(screen.getByTestId('counter')).toBeInTheDocument();
      expect(screen.getByTestId('cards')).toBeInTheDocument();
      expect(screen.getByTestId('festivals')).toBeInTheDocument();
      
  })
})
