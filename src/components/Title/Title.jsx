import React from 'react'

import * as styles from './title.module.css'

const Title = ({ title }) => {
	return (
		<div className={styles.title}>
			<div className={styles.container}>
				<h2>{title}</h2>
			</div>
		</div>
	)
}

export default Title