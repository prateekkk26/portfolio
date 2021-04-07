import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"

import * as styles from './bannercategory.module.css'

const BannerCategory = () => {
	const data = useStaticQuery(graphql`
    {
      allMdx {
        distinct(field: frontmatter___category)
      }
    }
  `)

	return (
		<div className={styles.bannerCategory}>
			<div className={styles.container}>
				<h3>Categories</h3>
				<ul>
					{
						data.allMdx.distinct.map((category,i) => {
							return <li key={i}>
								<Link 
									to={`/category/${category}`} 
									style={{textDecoration: "none"}}
									className={styles.link}
								>{category}</Link>
							</li>
						})
					}
				</ul>
			</div>
		</div>
	)
}

export default BannerCategory