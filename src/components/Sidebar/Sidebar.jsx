import React from 'react'
import { Link } from 'gatsby'
import * as styles from './sidebar.module.css'
import { FaTimes } from "@react-icons/all-files/fa/FaTimes"

import {links} from '../../data/links'

const Sidebar = ({ toggle }) => {
	return (
		<div className={styles.sidebar}>
			<div className={styles.container}>
				<FaTimes className={styles.icon} onClick={toggle} />
				<ul className={styles.linksContainer}>
					{
						links.map((link, index) => {
							return <li key={index}>
								<Link 
									to={link.path} 
									activeStyle={{color: "#000"}}
									style={{textDecoration: "none"}}
									className={styles.route}
								>
									{link.title}
								</Link>	
							</li>
						})
					}		
				</ul>
			</div>
		</div>
	)
}

export default Sidebar