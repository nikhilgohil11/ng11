import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hi There!</h1>
				<h4>I’m Nikhil Gohil and I’m a Mobile engineer! (iOS/Android)</h4>
				<Button as={AnchorLink} href="#contact">
					Talk to me!
				</Button>
			</Details>
			<Thumbnail>
				<img
					src={dev}
					alt="I’m Nikhil Gohil and I’m a Mobile engineer! (iOS/Android)"
				/>
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
