import React, { useEffect, useRef, useState } from 'react'
import PostService from '../API/PostService'
import { usePosts } from '../hooks/usePosts'
import { useFetching } from '../hooks/useFetching'
import { getPageCount } from '../utils/pages'
import MyButton from '../components/UI/button/MyButton'
import PostForm from '../components/PostForm'
import MyModal from '../components/UI/MyModal/MyModal'
import PostFilter from '../components/PostFilter'
import PostList from '../components/PostList'
import Loader from '../components/UI/Loader/Loader'
import Pagination from '../components/UI/pagination/Pagination'
import { useObserver } from '../hooks/useObserver'
import MySelect from '../components/UI/select/MySelect'
import classes from './Posts.module.css'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query) // sort and filter
    const lastElement = useRef() // reference to DOM element <div ref={lastElement} className={classes.lastElement} />

    //isPostsLoading - state responsible for loading posts
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    // watch 'lastElement' and load posts
    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    // get post 'newPost' from a child component // callback fn 'createPost' in props -> <PostForm/> and call there
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    // remove post from a child component <PostList/> ->props-> <PostItem/> through callback fn 'removePost'
    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className={classes.wrapper}>
            <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
                {'Create User'}
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr className="my-4 border border-blue-700" />
            <PostFilter filter={filter} setFilter={setFilter} />
            <MySelect
                value={limit}
                onChange={(value) => setLimit(value)}
                defaultValue="Number of items "
                options={[
                    { value: 5, name: '5' },
                    { value: 10, name: '10' },
                    { value: 25, name: '25' },
                    { value: -1, name: 'Show All' }
                ]}
            />
            {postError && <h3 className={classes.postError}>{`OOPS an Error Occurred: ${postError}`}</h3>}
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'List Posts'} />
            <div ref={lastElement} className={classes.lastElement} />
            {isPostsLoading && <Loader />}
            <Pagination page={page} changePage={changePage} totalPages={totalPages} />
        </div>
    )
}

export default Posts
