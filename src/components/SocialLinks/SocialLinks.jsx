import React from 'react'
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";
import { FaGooglePlusSquare } from "@react-icons/all-files/fa/FaGooglePlusSquare";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import * as styles from './sociallinks.module.css'

const SocialLinks = () => {
	return (
		<div className={styles.socialLinks}>
			<a href="https://www.facebook.com/prateek.rawat.549" target="_blank" className={styles.route}>
				<FaFacebookSquare className={`${styles.icon}`} />
			</a>
			<a href="https://github.com/prateekkk26" target="_blank" className={styles.route}>
				<FaGithubSquare className={`${styles.icon}`} />
			</a>
			<a href="mailto: prateekrawat33@gmail.com" target="_blank" className={styles.route}>
				<FaGooglePlusSquare className={`${styles.icon}`} />
			</a>	
			<a href="https://www.linkedin.com/in/prateek-rawat-a39161162/" target="_blank" className={styles.route}>
				<FaLinkedin className={`${styles.icon}`} />
			</a>
		</div>
	)
}

export default SocialLinks