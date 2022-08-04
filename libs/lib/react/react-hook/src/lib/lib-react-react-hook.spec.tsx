import { render } from '@testing-library/react'

import LibReactReactHook from './lib-react-react-hook'

describe('LibReactReactHook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibReactReactHook />)
    expect(baseElement).toBeTruthy()
  })
})
