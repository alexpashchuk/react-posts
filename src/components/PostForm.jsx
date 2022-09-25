import React, { useState } from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' })
    //to create posts from a child component to the parent <Posts/>, use callback
    const addNewPost = (e) => {
        e.preventDefault()
        // console.log(bodyInputRef.current);
        const newPost = {
            ...post,
            id: Date.now()
        }
        // call fn 'create' and add 'newPost'
        create(newPost)
        setPost({ title: '', body: '' })
    }

    return (
        <div>
            <form>
                {/*Controlled Component*/}
                <MyInput
                    type="text"
                    placeholder={'Name'}
                    value={post.title}
                    onChange={(event) => setPost({ ...post, title: event.target.value })}
                />
                <MyInput
                    type="text"
                    placeholder={'Description'}
                    value={post.body}
                    onChange={(event) => setPost({ ...post, body: event.target.value })}
                />
                {/* Uncontrolled Components
				<MyInput
					ref={bodyInputRef}
					type="text"
					placeholder={'Description'} */}
                <MyButton onClick={addNewPost}>{'Create Post'}</MyButton>
            </form>
        </div>
    )
}

export default PostForm
