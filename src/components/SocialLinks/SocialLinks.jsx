import React from 'react'
import { Link } from 'gatsby'
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";
import { FaGooglePlusSquare } from "@react-icons/all-files/fa/FaGooglePlusSquare";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import * as styles from './sociallinks.module.css'

const SocialLinks = ({align}) => {
	return (
		<div className={styles.socialLinks}>
			<Link to="/" className={styles.route}><FaFacebookSquare className={`${styles.icon}`} /></Link>
			<Link to="/" className={styles.route}><FaGithubSquare className={`${styles.icon}`} /></Link>
			<Link to="/" className={styles.route}><FaGooglePlusSquare className={`${styles.icon}`} /></Link>	
			<Link to="/" className={styles.route}><FaLinkedin className={`${styles.icon}`} /></Link>
		</div>
	)
}

export default SocialLinks