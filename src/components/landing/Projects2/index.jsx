import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, GitCard } from 'Common'
import starIcon from 'Static/icons/star.svg'
import forkIcon from 'Static/icons/fork.svg'
import { Wrapper, Grid, Item, Content, Stats } from './styles'

export const Projects2 = () => {
	// const {
	// 	github: {
	// 		repository: { id, name, url, description, stargazers, forkCount }
	// 	},
	// } = useStaticQuery(graphql`
	// 	{
	// 		github {
	// 			repository(owner: "raweng", name: "gmail-like-loading") {
	// 				id
	// 				name
	// 				url
	// 				description
	// 				stargazers {
	// 					totalCount
	// 				}
	// 				forkCount
	// 			}
	// 		}
	// 	}
	// `)
	return (
		<Wrapper as={Container} id="projects">
						{/* <h2>Projects</h2>
			<Grid>
					<Item
						key={id}
						as="a"
						href={url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<GitCard>
							<Content>
								<h4>{name}</h4>
								<p>{description}</p>
							</Content>
							<Stats>
								<div>
									<img src={starIcon} alt="stars" />
									<span>{stargazers.totalCount}</span>
								</div>
								<div>
									<img src={forkIcon} alt="forks" />
									<span>{forkCount}</span>
								</div>
							</Stats>
						</GitCard>
					</Item>
			</Grid> */}
		</Wrapper>
	)
}
