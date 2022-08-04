import React, { useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import ReactNotifyToast from '../lib-react-react-notify-toast'
import { ReactNotifyToastContext } from './react-notify-toast.context'

// Create a random ID
function generateUEID() {
  let first = ((Math.random() * 46656) | 0).toString(36)
  let second = ((Math.random() * 46656) | 0).toString(36)
  first = ('000' + first).slice(-3)
  second = ('000' + second).slice(-3)

  return first + second
}

export const ReactToastProvder = (props: any) => {
  const [toasts, setToasts] = useState<any>([])
  const open = (content: any) =>
    setToasts((currentToasts: any) => [
      ...currentToasts,
      { id: generateUEID(), content },
    ])
  const close = (id: number) =>
    setToasts((currentToasts: any) =>
      currentToasts.filter((toast: any) => toast.id !== id)
    )
  const contextValue = useMemo(() => ({ open }), [])

  // return (
  // <ReactNotifyToastContext.Provider >

  // </ReactNotifyToastContext.Provider >
  // )
}
