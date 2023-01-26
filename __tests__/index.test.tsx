import { render, screen } from '@testing-library/react'
import Home from '../app/page'
import '@testing-library/jest-dom'

describe('Base setup', () => {
  it('Found default Next.js 13 home', () => {
    render(<Home />)

    const heading = screen.getByText(/Get started/i)

    expect(heading).toBeInTheDocument()
  })
})