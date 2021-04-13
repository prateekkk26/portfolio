import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout/Layout'
import Projects from '../components/Projects/Projects'
import * as styles from '../styles/projects.module.css'

const projects = ({data}) => {
	const {gsms: {projects}} = data

	return (
		<Layout>
			<div className={styles.projects}>
				<div className={styles.container}>
					<Projects projects={projects} />
				</div>
			</div>
		</Layout>
	)
}

export const query = graphql`
  {
    gsms {
      projects {
        id
        title
        description
        githubLink
        deployedLink
        slug
        tech
        images {
          url
        }
      }
    }
  }
`

export default projects