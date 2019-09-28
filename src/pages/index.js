import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Skills, Contact, Projects, Projects2 } from 'Components/landing'

export default () => (
	<Layout>
		<SEO />
		<Intro />
		<Skills />
		<Projects2 />
		<Projects />
		<Contact />
	</Layout>
)
