export interface LibReactReactNotifyToastProps<T> {
  data: T
  showBtn: boolean
  buttonData: IToastBtnData<T>[]
}

interface IToastBtnData<T> {
  btnName: string
  fnName: (data: T) => void
}
