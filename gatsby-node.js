const path = require('path')

exports.createPages = async({graphql, actions}) => {
	const { createPage } = actions
	const result = await graphql(`
	{
		allMdx {
			nodes {
				frontmatter {
					slug
				}
			}
		}

		getCategory: allMdx {
	        distinct(field: frontmatter___category)
	    }
	}
	`)

	result.data.allMdx.nodes.forEach(({frontmatter: {slug}}) => {
		createPage({
			path: `/posts/${slug}`,
			component: path.resolve(`src/templates/PostTemplate/PostTemplate.jsx`),
			context: {
				slug,
			},
		})
	})

	result.data.getCategory.distinct.forEach((category) => {
		createPage({
			path: `/category/${category}`,
			component: path.resolve(`src/templates/CategoryTemplate/CategoryTemplate.jsx`),
			context: {
				category,
			},
		})
	})
}