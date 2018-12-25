/* eslint react/no-array-index-key:0 */
import Annotation from './annotation'
import BaseComponents from './base'
import Link from './link'
import PropTypes from 'prop-types'
import React from 'react' // eslint-disable-next-line
import smoothScroll from 'smoothscroll'
import styled from 'styled-components'
import theme from '../utils/theme'

const StyledParagraph = BaseComponents.SmallContainer.extend`
  font-size: ${theme.typography.font.size.medium};
  font-weight: ${theme.typography.font.weight.medium};
  color: ${theme.colors.text.paragraph};
  line-height: ${theme.typography.lineHeight.larger};
  letter-spacing: .4px;
  white-space: pre-wrap;
  text-align: justify;
  margin: 30px auto;
`.withComponent('p')

class Paragraph extends React.PureComponent {
  constructor(props) {
    super(props)
    this.innerScroll = this._innerScroll.bind(this)
  }
  _innerScroll(e,id) {
    e.preventDefault()
    smoothScroll(document.getElementById(id))
  }
  render() {
    const { content } = this.props
    if (Array.isArray(content) && content.length > 1) {
      const _content = content.map((ele, index) => {
        if (ele.type === 'annotation') {
          return (
            <Annotation
              key={`p_annotation_${index}`}
              content={ele.content}
            />
          )
        } else if (ele.type === 'link') {
          return (
            <Link
              key={`p_link_${index}`}
              href={ele.content[1]}
              target="_blank"
            >
              {ele.content[0]}
            </Link>
          )
        } else if (ele.type === 'inner-link') {
          return (
            <Link
              key={`p_link_${index}`}
              href={'#'}
              onClick={(e) => this.innerScroll(e, ele.content[1])}
            >
              {ele.content[0]}
            </Link>
          )
        } else if (ele.type === 'italic-font') {
          return (
            <i
              key={`p_i_${index}`}
            >
              {ele.content[0]}
            </i>
          )
        }
        return ele
      })
      return (
        <StyledParagraph>
          {_content}
        </StyledParagraph>
      )
    }
    return (
      <StyledParagraph
        dangerouslySetInnerHTML={{ __html: content[0] }}
      />
    )
  }
}

Paragraph.propTypes = {
  content: PropTypes.array.isRequired,
}

export default Paragraph
