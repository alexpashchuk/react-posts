import React from 'react'
import PostItem from './PostItem'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import classes from './PostList.module.css'

const PostList = ({ posts, title, remove }) => {
    if (!posts.length) {
        return <h1 style={{ textAlign: 'center' }}>{'Posts not found'}</h1>
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) => (
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames={{
                            enter: classes['posts-enter'],
                            enterActive: classes['posts-enter-active'],
                            exitActive: classes['posts-exit-active'],
                            exit: classes['posts-exit']
                        }}
                    >
                        <PostItem remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
}

export default PostList
