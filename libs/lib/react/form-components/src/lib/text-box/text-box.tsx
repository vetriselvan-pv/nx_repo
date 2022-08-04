import { ITextBoxProps } from '../models/form-control.model'
import styles from '../theme/_form-components.module.scss'

export function TextBox(props: ITextBoxProps) {
  return (
    <div className={styles['form-container']}>
      <label className={styles['form__label']} htmlFor="">
        {props?.label}
      </label>
      <input
        className={styles['form__controls']}
        type={props?.inputType ? props.inputType : 'text'}
        placeholder={props?.placeHolder ? props.placeHolder : ''}
        id={props?.id}
      />
      <small className={styles['form__hint']}></small>
      <small className={styles['form__error']}></small>
    </div>
  )
}

export default TextBox
