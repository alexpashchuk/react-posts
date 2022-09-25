import React from 'react'
import MyButton from './UI/button/MyButton'
import { useHistory } from 'react-router-dom'
import classes from './PostItem.module.css'

const PostItem = (props) => {
    const router = useHistory()

    return (
        <div className={classes.wrapper}>
            <div className="post__content">
                <strong>
                    {props.post.id}. {props.post.title}
                </strong>
                <div>{props.post.body}</div>
            </div>
            <div className={classes.postBtn}>
                <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>{'OPEN'}</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>{'REMOVE'}</MyButton>
            </div>
        </div>
    )
}

export default PostItem
