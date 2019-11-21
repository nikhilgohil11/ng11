require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
  })
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, GitCard } from 'Common'
import starIcon from 'Static/icons/star.svg'
import forkIcon from 'Static/icons/fork.svg'
import { Wrapper, Grid, Item, Content, Stats } from './styles'

export const Projects = () => {
	// const {
	// 	github: {
	// 		repositoryOwner: {
	// 			repositories: { edges },
	// 		},
	// 	},
	// } = useStaticQuery(graphql`
	// 	{
	// 		github {
	// 			repositoryOwner(login: "nikhilgohil11") {
	// 				repositories(
	// 					first: 8,
	// 					isFork: false,
	// 					orderBy: {field: STARGAZERS, direction: DESC}
	// 				) {
	// 					edges {
	// 						node {
	// 							id
	// 							name
	// 							url
	// 							description
	// 							stargazers {
	// 								totalCount
	// 							}
	// 							forkCount
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// `)
	return (
		<Wrapper as={Container} id="projects">
			{/* <Grid>
				{edges.map(({ node }) => (
					<Item
						key={node.id}
						as="a"
						href={node.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<GitCard>
							<Content>
								<h4>{node.name}</h4>
								<p>{node.description}</p>
							</Content>
							<Stats>
								<div>
									<img src={starIcon} alt="stars" />
									<span>{node.stargazers.totalCount}</span>
								</div>
								<div>
									<img src={forkIcon} alt="forks" />
									<span>{node.forkCount}</span>
								</div>
							</Stats>
						</GitCard>
					</Item>
				))}
			</Grid> */}
		</Wrapper>
	)
}
