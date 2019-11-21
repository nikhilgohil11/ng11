import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'
import { Link } from "gatsby"

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<AnchorLink offset={() => 100} href="#about">
			About
		</AnchorLink>
		<AnchorLink offset={() => 100} href="#projects">
			Projects
		</AnchorLink>
		<AnchorLink offset={() => 100} href="#contact">
			Contact
		</AnchorLink>
		<Link to="/blog/">Blog</Link>
	</Wrapper>
)

export default NavbarLinks
