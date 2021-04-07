import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";

import * as styles from './post.module.css'

const Post = ({post}) => {
	const {
		excerpt,
	    frontmatter: {
	      author,
	      category,
	      date,
	      image: {
	        childImageSharp: {
	          fluid
	      	},
	      },
	      readTime,
	      slug,
	      title,
	    },
	} = post

	return (
		<div className={styles.post}>
			<div className={styles.container}>
				<div className={styles.imageContainer}>
					<Img 
						fluid={fluid} 
						className={styles.img} 
						objectPosition="center"
					/>
				</div>
				<div className={styles.content}>
					<p className={styles.category}>{category}</p>
					<h1>{title}</h1>
					<div className={styles.metaInfo}>
						<p className={styles.metaItem}>By <span className="font-weight-bold text-dark">{author}</span></p>
						<p className={styles.metaItem}>{date}</p>
						<p className={styles.metaItem}>{readTime} mins read</p>
					</div>
					<p className={styles.excerpt}>{excerpt}</p>
					<Link 
						to={`/posts/${slug}`} 
						style={{textDecoration: "none"}}
						className={styles.link}
					>Read More <FaArrowRight className={styles.icon} /> </Link>
				</div>
			</div>
		</div>
	)
}

export default Post