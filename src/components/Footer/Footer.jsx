import React from 'react'
import SocialLinks from '../SocialLinks/SocialLinks'
import * as styles from './footer.module.css'

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				<p>&copy; - {new Date().getFullYear()} Prateek Rawat. All rights reserved</p>
				<div className={styles.links}>
					<SocialLinks align="left" />
				</div>
			</div>
		</div>
	)
}

export default Footer