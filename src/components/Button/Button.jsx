import PropTypes from 'prop-types';
import s from "./Button.module.scss"

export const Button = ({name, handleClick, disabled}) => {
    return (
        <button className={s.button} onClick={handleClick} disabled={disabled}>{name}</button>
    )
}

// Почему не стал добавлять описание пропсов? Больше понимания что ты ожидаешь в пропсах меньше ошибок в целом...
// Опиши для всех компонентов это точно лучше чем подавлять линтер.
Button.propTypes = {
    name: PropTypes.string,
    handleClick: PropTypes.func,
    disabled: PropTypes.bool,
}