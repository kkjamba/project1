import s from './Post.module.css'

const Post = () => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_jPUsR6DYZpFhh-sSkMQG4d9nN9MvqpOJQ&usqp=CAU'/>
                post 1
                <div><span>like</span></div>
            </div>
        </div>
    )
}

export default Post