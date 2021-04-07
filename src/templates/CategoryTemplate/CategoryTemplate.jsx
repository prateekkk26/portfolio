import React from 'react'
import Layout from "../../components/Layout/Layout"
import Posts from '../../components/Posts/Posts'
import Banner from '../../components/Banner/Banner'
import Title from '../../components/Title/Title'
import { graphql, useStaticQuery } from 'gatsby'

import * as styles from './categoryTemplate.module.css'

const CategoryTemplate = (props) => {
	const data = useStaticQuery(graphql`
		query hero ($category: String){
		  allMdx(filter: {frontmatter: {category: {eq: $category}}}) {
		    nodes {
		      id
		      excerpt
		      frontmatter {
		        author
		        category
		        date(formatString: "MMMM Do, YYYY")
		        readTime
		        title
		        image {
		          childImageSharp {
		            fluid {
		              ...GatsbyImageSharpFluid
		            }
		          }
		        }
		      }
		    }
		  }
		}
	`)
	const {allMdx: {nodes: posts}}= data

	return (
		<div className="posts">
			<Layout>
				<div className={styles.categoryTemplate}>
		          <Title title={`Category / ${props.pageContext.category}`} />
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

export default CategoryTemplate