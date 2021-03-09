import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id:1, message: 'Hi, how are you', likesCount:12},
        {id:2, message: 'It\'s my first post', likesCount:3},
        {id:3, message: 'It\'s my second post', likesCount:4},
    ]

    let postsElement = posts.map(p => <Post message={p.message} like={p.likesCount} />)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts