import * as React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Link = styled.a`
  font-size: 1.2rem;
  margin-right: 10px;
  text-decoration: none;
  color: #000;
  :hover {
    color: ${transparentize(0.4, '#000')};
  }
`

interface ProjectGridModalIconLinksProps {
  liveLink?: string
  githubLink?: string
  technologies?: string[]
}

const ProjectGridModalIconLinks = (props: ProjectGridModalIconLinksProps) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      {!!props.liveLink && (
        <Link href={props.liveLink}>
          <FontAwesomeIcon icon={faLink} />
        </Link>
      )}
      {!!props.githubLink && (
        <Link href={`https://github.com/${props.githubLink}`}>
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      )}
      {props.technologies.length > 0 && (
        <span>Technologies used: {props.technologies.join(', ')}</span>
      )}
    </div>
  )
}

export default ProjectGridModalIconLinks
