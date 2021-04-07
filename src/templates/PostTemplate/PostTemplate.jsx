import React from 'react'
import Layout from '../../components/Layout/Layout'
import Banner from '../../components/Banner/Banner'
import { Link, useStaticQuery, graphql } from "gatsby"
import {MDXRenderer} from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'
import * as styles from './postTemplate.module.css'
import "../../styles/markdown.css"

const PostTemplate = () => {
	const data = useStaticQuery(graphql`
    query getPost($slug: String){
      mdx(frontmatter: {slug: {eq: $slug}}) {
        body
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
  `)

	const {
		mdx: {
			body,
			frontmatter: {
				author,
				category,
				date,
				readTime,
				title,
				image: {
					childImageSharp: {
						fluid
					}
				}
			}
		}
	} = data

	return (
		<Layout>
			<div className={styles.postTemplate}>
				<div className={styles.container}>
		            <div className={styles.postContainer}>
		              <div classsName={styles.imageContainer}>
		              	<Img fluid={fluid} className={styles.img}/>
		              </div>
		              <div className={styles.content}>
		              	<Link 
		              		to={`/category/${category}`} 
		              		style={{textDecoration: "none"}}
		              		className={styles.category}
		              	>{category}</Link>
		              	<h1>{title}</h1>
		              	<div className={styles.metaInfo}>
							<p className={styles.metaItem}>By <span className="font-weight-bold text-dark">{author}</span></p>
							<p className={styles.metaItem}>{date}</p>
							<p className={styles.metaItem}>{readTime} mins read</p>
						</div>
		              	<MDXRenderer>
		              		{body}
		              	</MDXRenderer>
		              </div>
		            </div>
		            <div className={styles.bannerContainer}>
		              <Banner />
		            </div>
		        </div>		
			</div>
		</Layout>
	)
}

export default PostTemplate