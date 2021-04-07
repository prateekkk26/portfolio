import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import SocialLinks from '../SocialLinks/SocialLinks'
import BannerPosts from '../BannerPosts/BannerPosts'
import BannerCategory from '../BannerCategory/BannerCategory'
import * as styles from './banner.module.css'

const Banner = () => {
	const data = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: {eq: "images"}
        relativePath: {eq: "profile.png"}
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

	return (
		<div className={styles.banner}>
			<div className={styles.container}>
				<div className={styles.aboutAuthor}>
					<h3>Author</h3>
					<Img 
						fluid={data.file.childImageSharp.fluid}
						alt="Prateek Rawat"
						className={styles.profile}
					/> 
					<h4>Prateek Rawat</h4>
					<p>
						Prateek is front-end developer who builds scalable applications. He is also
						proficient with many other web technologies.  
					</p>
					<div className={styles.links}>
						<SocialLinks align="center" />
					</div>
				</div>
				<div>
					<BannerPosts />
				</div>
				<div>
					<BannerCategory />
				</div>
			</div>
		</div>
	)
}

export default Banner