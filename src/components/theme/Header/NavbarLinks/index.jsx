import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<AnchorLink offset={() => 100} href="#about">
			About
		</AnchorLink>
		<AnchorLink offset={() => 100} href="#contact">
			Contact
		</AnchorLink>
	</Wrapper>
)

export default NavbarLinks
