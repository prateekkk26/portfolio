import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Title from '../Title/Title'
import Posts from '../Posts/Posts'
import * as styles from './recentposts.module.css'

const RecentPosts = () => {
	const data = useStaticQuery(graphql`
    {
      allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
        nodes {
          excerpt
          frontmatter {
            author
            category
            date(formatString: "MMMM Do, YYYY")
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            readTime
            slug
            title
          }
          id
        }
      }
    }
  `)
	const {allMdx: {nodes: posts}} = data
	return (
		<div className={styles.recentPosts}>
			<div className={styles.container}>
				<Title title="Recent Posts" />
				<div className={styles.posts}>
					<Posts posts={posts} />
	        <Link to="/posts" style={{
            textDecoration: "none",
          }} className={styles.btn}>ALL POSTS</Link>
  			</div>
			</div>
		</div>
	)
}

export default RecentPosts