import * as React from "react"
import {Link} from 'gatsby'
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import * as styles from '../styles/pageNotFound.module.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={styles.pageNotFound}>
    	<div className={styles.container}>
    		<h1>404</h1>
    		<h3>Page Not Found</h3>
    		<p>It looks like you just hit a broken link</p>
    		<Link to="/" style={{textDecoration: "none"}} className={styles.btn}>Go to homepage</Link>
    	</div>
    </div>
  </Layout>
)

export default NotFoundPage
