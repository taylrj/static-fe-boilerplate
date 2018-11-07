import React, { PureComponent } from 'react'
import styled from 'styled-components'
import mq from '../utils/media-query'
import mobileBgLeft from '../../static/background-mobile-left.png'
import tabletBgLeft from '../../static/background-tablet-left.png'
import desktopBgLeft from '../../static/background-desktop-left.png'
import hdBgLeft from '../../static/background-hd-left.png'
import mobileBgRight from '../../static/background-mobile-right.png'
import tabletBgRight from '../../static/background-tablet-right.png'
import desktopBgRight from '../../static/background-desktop-right.png'
import hdBgRight from '../../static/background-hd-right.png'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: stretch;
  height: 100%;
  width: 100%;
`

const Column = styled.div`
  background-size: contain;
  ${mq.mobileBelow`
    flex: 0 0 20px;
    background-image: url(${props => (props.reversed ? mobileBgRight : mobileBgLeft)});
  `}
  ${mq.tabletOnly`
    flex: 0 0 32px;
    background-image: url(${props => (props.reversed ? tabletBgRight : tabletBgLeft)});
  `}
  ${mq.desktopOnly`
    flex: 0 0 32px;
    background-image: url(${props => (props.reversed ? desktopBgRight : desktopBgLeft)});
  `}
  ${mq.hdAbove`
    flex: 0 0 40px;
    background-image: url(${props => (props.reversed ? hdBgRight : hdBgLeft)});
  `}
`

const Pad = styled.div`
  flex: 1 1 auto;
  background: #eeeeee;
`

export default class Background extends PureComponent {
  render() {
    return (
      <Container>
        <Column />
        <Pad />
        <Column reversed />
      </Container>
    )
  }
}
