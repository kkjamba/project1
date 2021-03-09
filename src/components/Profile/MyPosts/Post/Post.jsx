import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_jPUsR6DYZpFhh-sSkMQG4d9nN9MvqpOJQ&usqp=CAU'/>
                <div>{props.message}</div>
                 likes {props.like}



            </div>
        </div>
    )
}

export default Post