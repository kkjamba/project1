import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className='dialog'>
                    Саша
                </div>
                <div className={`${s.dialog} ${s.active}`}>
                    Петя
                </div>
                <div className={s.dialog}>
                    Вася
                </div>
                <div className={s.dialog}>
                    Виктор
                </div>
                <div className={s.dialog}>
                    Валера
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>hi</div>
                <div className={s.message}>how are you?</div>
                <div className={s.message}>how old are you?</div>
            </div>
        </div>
    )
}

export default Dialogs