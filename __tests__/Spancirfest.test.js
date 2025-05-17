import {render,screen} from '@testing-library/react'
import Spancirfest from '../app/spancirfest';

jest.mock('../app/countDown', () => () => <div data-testid="countdown" />)

describe('Spancirfest component', () => {
   it('renders main title and link', () => {
    render(<Spancirfest />)

    expect(screen.getByText('ŠPANCIRFEST')).toBeInTheDocument()

    expect(screen.getByTestId('countdown')).toBeInTheDocument()

    expect(screen.getByRole('link', {name :/saznajte više/i})).toBeInTheDocument()


    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
   })
})