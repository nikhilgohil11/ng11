import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="I’m Nikhil Gohil and I’m a Mobile engineer!" />
			</Thumbnail>
			<Details>
				<h1>About me!</h1>
				<p>
					I code in Swift, Javascript [ React Native ], Objective-C, python.
				</p>
				<p>More than 40+ apps developed for product and service-based MNCs.</p>
				<Button as={AnchorLink} href="#contact">
					Consult me
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
