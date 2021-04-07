import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from '../components/Header/Header'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Layout from "../components/Layout/Layout"
import RecentPosts from "../components/RecentPosts/RecentPosts"
import SEO from "../components/seo"

const IndexPage = () => (
	<div className="index">
		<Layout>
		    <Header />
		    <About />
		    <RecentPosts />
		</Layout>
	</div>
)

export default IndexPage
