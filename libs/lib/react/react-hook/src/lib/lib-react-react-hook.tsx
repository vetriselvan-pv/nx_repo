import styles from './lib-react-react-hook.module.scss'

/* eslint-disable-next-line */
export interface LibReactReactHookProps {}

export function LibReactReactHook(props: LibReactReactHookProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LibReactReactHook!</h1>
    </div>
  )
}

export default LibReactReactHook
