import styles from './lib-react-react-notify-toast.module.scss'
import { LibReactReactNotifyToastProps } from './model/react-notify-toast'

export function ReactNotifyToast<T>(props: LibReactReactNotifyToastProps<T>) {
  function showButton(): JSX.Element {
    if (props.showBtn) {
      return  <></>
    } else {
      return <></>
    }
  }

  return (
    <div className={styles['toast']}>
      <div className={styles['toast__text']}></div>
      {showButton()}
    </div>
  )
}

export default ReactNotifyToast
