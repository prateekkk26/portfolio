import React from 'react'
import Layout from "../../components/Layout/Layout"
import Posts from '../../components/Posts/Posts'
import Banner from '../../components/Banner/Banner'
import Title from '../../components/Title/Title'
import { graphql, useStaticQuery } from 'gatsby'

import * as styles from './categoryTemplate.module.css'

const CategoryTemplate = ({pageContext, data}) => {
	const {allMdx: {nodes: posts}}= data
	console.log(data)

	return (
		<div className="posts">
			<Layout>
				<div className={styles.categoryTemplate}>
		          <Title title={`Category / ${pageContext.category}`} />
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
  query getCategory($category: String){
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {frontmatter: {category: {eq: $category}}}
    ) {
      nodes {
        excerpt
        frontmatter {
          category
          date(formatString: "MMMM Do, YYYY")
          slug
          title
          author
          readTime
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        body
        id
      }
    }
  }
`

export default CategoryTemplate