import React from 'react'
import {Link} from 'gatsby'

import * as styles from './project.module.css'

const Project = ({project}) => {
	return (
		<div className={styles.project}>
			<div className={styles.container}>
				<div className={styles.element}>
					<img 
						src={project.images.url} 
						alt={project.title} 
						className={styles.img}
					/>
					<div className={styles.content}>
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						<p><span>Github Link:</span><a href={project.githubLink} target="_blank">{project.githubLink}</a></p>
						<p><span>Deployed Link:</span><a href={project.deployedLink} target="_blank">{project.deployedLink}</a></p>
						<div className={styles.tech}>
							{
								project.tech.names.map(name => {
									return <div>
										<p>{name}</p>
									</div>
								})
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Project