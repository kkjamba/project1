import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/'+ props.id
    return (
        <div className='dialog'>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Саша' id='1' />
                <DialogItem name='Дима' id='2' />
                <DialogItem name='Вася' id='3' />
                <DialogItem name='Виктор' id='4' />
                <DialogItem name='Валера' id='5' />
            </div>
            <div className={s.messages}>
                <Message message='Hi' />
                <Message message='How are you?' />
                <Message message='How old are you?' />
            </div>
        </div>
    )
}

export default Dialogs