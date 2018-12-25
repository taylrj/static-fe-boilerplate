import theme from '../utils/theme'
import BaseComponent from './base'
import PropTypes from 'prop-types'
import React from 'react'
import screen from '../utils/screen'
import styled from 'styled-components'

const TEAM = '製作團隊'

const fontWeight = theme.typography.font.weight
const fontSize = '16px'
const fontColor = theme.colors.text.credits
const jobSeparator = '｜'

const Container = BaseComponent.SmallContainer.extend`
  text-align: left;
  margin: 0 auto;
  padding-bottom: 55px;
`

const SeperateLine = styled.div`
  width: 200px;
  height: 2px;
  background: #a67a44;
  margin: 0 auto 40px auto;
`

const CreditBox = styled.div`
  text-align: left;
  margin-bottom: 1em;
  :last-child {
    margin-bottom: 0;
  }
  ${screen.mobileOnly`
    max-width: 100%;
    overflow: hidden;
    white-space: normal;
  `}
`

const JobTitle = styled.span`
  display: inline-block;
  font-weight: ${fontWeight.regular};
  color: ${fontColor};
  font-size: ${fontSize};
  :last-child {
    margin-right: 0;
  }
  :after {
    content: "${jobSeparator}";
  }
`

const Member = styled.span`
  display: inline-block;
  font-weight: ${fontWeight.regular};
  color: ${fontColor};
  font-size: ${fontSize};
`

const TeamIntro = Member.extend``

const MemberWithLink = styled.a`
  display: inline-block;
  text-decoration: none;
`

function _memberToBox(member, index, members) {
  const { name, linkTo } = member
  let box = null
  const separator = (index !== members.length - 1) ? '、' : null
  if (!linkTo) {
    box = (<Member key={index}>{name}{separator}</Member>)
  } else {
    box = (<MemberWithLink key={index} href={linkTo} target="_blank"><Member>{name}{separator}</Member></MemberWithLink>)
  }
  return box
}

function _authorToBox(credit, index) {
  const { jobTitle, members } = credit
  const membersJSX = members.map(_memberToBox)
  return (
    <CreditBox key={index}>
      <JobTitle>{jobTitle}</JobTitle>
      {membersJSX}
    </CreditBox>
  )
}

class Team extends React.PureComponent {
  render() {
    const { credits } = this.props
    const teamJSX = (
      <CreditBox>
        <TeamIntro>
          {TEAM}
        </TeamIntro>
      </CreditBox>
    )
    const creditsJSX = credits.map(_authorToBox)
    return (
      <Container>
        {/* <SeperateLine /> */}
        {teamJSX}
        {creditsJSX}
      </Container>
    )
  }
}

Team.propTypes = {
  credits: PropTypes.array.isRequired,
}

export default Team
