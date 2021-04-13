import React from 'react'
import Project from './Project/Project'
import Title from '../Title/Title'
import * as styles from './projects.module.css'

const Projects = ({projects}) => {
	return (
		<div className={styles.projects}>
			<Title title="All Projects" />
			{
				projects.map(project => {
					return <Project key={project.id} project={project} />
				})
			}
		</div>
	)
}

export default Projects