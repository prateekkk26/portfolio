import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'

import * as styles from './layout.module.css'

const Layout = ({ children }) => {
	const [showSidebar, setShowSidebar] = useState(false);

	const toggle = () => setShowSidebar(!showSidebar);

	return (
		<div className={styles.layout}>
			{
				!showSidebar && <Navbar toggle={toggle} />
			}
			{
				showSidebar && <Sidebar toggle={toggle} />
			}
			{
				!showSidebar && <>
					<main className={styles.main}>{children}</main>
					<Footer />
				</>
			}
		</div>
	)
}

export default Layout