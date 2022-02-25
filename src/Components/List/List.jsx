import React from 'react'
import Item from '../Item/Item'
import classes from './List.module.css'

const List = ({ posts, removePost }) => {
  return (
    <div className={classes.wrapper}>
      {posts.map((post, idx) => (
        <Item
          key={post.id}
          number={1 + idx}
          post={post}
          removePost={removePost}
        />
      ))}
    </div>
  )
}

export default List
