import {NavLink} from "react-router-dom";
import s from './DialogItem.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div >
            <NavLink to={path} className={s.dialog}>
                <div className={s.dialogImg}>
                    <img src={props.img}/>
                </div>
                <div className={s.dialogText}>
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem