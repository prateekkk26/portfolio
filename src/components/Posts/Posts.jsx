import React from 'react'
import Post from './Post/Post'
import * as styles from './posts.module.css'

const Posts = ({posts}) => {
	return (
		<div className={styles.posts}>
			<div className={styles.container}>
				{
					posts.map(post => {
						return <Post key={post.id} post={post} />
					})
				}
			</div>
		</div>
	)
}

export default Posts