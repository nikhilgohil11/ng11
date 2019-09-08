import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Skills, Contact } from 'Components/landing'

export default () => (
	<Layout>
		<SEO />
		<Intro />
		<Skills />
		<Contact />
	</Layout>
)
