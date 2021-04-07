import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import * as styles from './bannerposts.module.css'

const BannerPosts = () => {
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
		<div className={styles.bannerPosts}>
			<div className={styles.container}>
				<h3>Recent Posts</h3>
				{
					posts.map(post => {
						return <div className={styles.wrapper}><Link key={post.id} to={`/posts/${post.frontmatter.slug}`} style={{textDecoration: "none"}} className={styles.posts}>
							<div className={styles.postContainer}>
								<div className={styles.imageContainer}>
									<Img fluid={post.frontmatter.image.childImageSharp.fluid} className={styles.img} />
								</div>
								<div className={styles.content}>
									<p>{post.frontmatter.title}</p>
									<p>{post.frontmatter.date}</p>
								</div>
							</div>
						</Link>
						</div>
					})
				}
			</div>
		</div>
	)
}

export default BannerPosts