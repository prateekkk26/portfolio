import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Title from '../Title/Title'
import * as styles from './about.module.css'

const About = () => {
	const data = useStaticQuery(graphql`
	    {
	      file(
	        sourceInstanceName: {eq: "images"}
	        relativePath: {eq: "about.png"}
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
		<div className={styles.about}>
			<div className={styles.container}>
				<Title title="About Me" />
				<div className={styles.content}>
					<div className={styles.imageContainer}>
						<Img 
							fluid={data.file.childImageSharp.fluid}
							alt="About Me"
							className={styles.img}
						/>
					</div>
					<div className={styles.info}>
						<p>
							My name is Prateek and I'm a final year student pursuing my bachelors in Computer
							Science and Engineering. I'm a 21 years old Front End Developer based in Gujarat.
							I am a passionate developer who loves coding and the web platform. I started my 
							journey of web development 2 years ago and now I finally found my digital world 
							where everything is possible to create. I like to build dynamic websites and scalable 
							applications by implementing some trending web technologies. I am highly motivated with a vision
							of learning and teaching people about Software Development. 
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About