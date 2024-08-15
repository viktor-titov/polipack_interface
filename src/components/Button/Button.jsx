/* eslint-disable react/prop-types */
import s from "./Button.module.scss"

export const Button = ({name, handleClick, disabled}) => {
    return (
        <button className={s.button} onClick={handleClick} disabled={disabled}>{name}</button>
    )
}