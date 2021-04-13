import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import * as styles from './header.module.css'

import SocialLinks from '../SocialLinks/SocialLinks.jsx'

const Header = () => {
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
		<div className={styles.header}>
			<div className={styles.container}>
				<div className={styles.about}>
					<p>Hello, I'm</p>
					<h1>Prateek</h1>
					<h1>Rawat</h1>
					<p>Front End Developer</p>
					<div className={styles.links}>
						<SocialLinks />
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Img 
						fluid={data.file.childImageSharp.fluid}
						alt="Prateek Rawat"
						className={styles.headerImage}
					/> 
				</div>
			</div>
		</div>
	)
}

export default Header