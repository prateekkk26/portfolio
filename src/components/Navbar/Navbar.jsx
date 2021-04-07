import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import { StaticImage } from "gatsby-plugin-image"
import {links} from '../../data/links'
import { FaAlignRight } from "@react-icons/all-files/fa/FaAlignRight";

import * as styles from './navbar.module.css'

const query = graphql`
    {
      file(sourceInstanceName: {eq: "images"}, relativePath: {eq: "logo.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

const Navbar = ({ toggle }) => {
	const data = useStaticQuery(query)

	return (
		<div className={`${styles.navbar}`}>
			<nav className={styles.container}>
				<div className={styles.logoContainer}>
					<pre><code><span>&lt;/</span>PR<span>></span></code></pre>
				</div>
				<div className={styles.linksContainer}>
					<ul>
						{
							links.map((link,index) => {
								return <li key={index} className={styles.link}>
									<Link 
										to={link.path} 
										activeStyle={{color: "#BF55EC"}} 
										className={styles.route}
										style={{textDecoration: "none"}}
									>
									{link.title}</Link>
								</li>
							})
						}
					</ul>
				</div>
				<div className={styles.toggle} onClick={toggle}>
					<FaAlignRight className={styles.icon} />
				</div>
			</nav>
		</div>
	)
}

export default Navbar