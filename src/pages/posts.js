import React from 'react'
import Layout from "../components/Layout/Layout"
import Posts from '../components/Posts/Posts'
import Banner from '../components/Banner/Banner'
import Title from '../components/Title/Title'
import { graphql } from 'gatsby'

import * as styles from '../styles/posts.module.css'

const posts = ({data}) => {
	const {allMdx: {nodes: posts}} = data

	return (
		<div className="posts">
			<Layout>
				<div className={styles.posts}>
          <Title title="All Posts" />
          <div className={styles.container}>
            <div className={styles.postsContainer}>
              <Posts posts={posts} />
            </div>
            <div className={styles.bannerContainer}>
              <Banner />
            </div>
          </div>
        </div>
			</Layout>	
		</div>
	)
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
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
`

export default posts