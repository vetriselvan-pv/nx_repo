import { render } from '@testing-library/react'

import ReactNotifyToast from './lib-react-react-notify-toast'

describe('LibReactReactNotifyToast', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactNotifyToast />)
    expect(baseElement).toBeTruthy()
  })
})
