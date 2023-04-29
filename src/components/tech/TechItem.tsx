import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { TechFrontmatterType } from '../../types/tech.types'
import GoIcon from '../../assets/icons/go.svg'

type TechItemProps = TechFrontmatterType & { link: string }

const TechItem: FunctionComponent<TechItemProps> = function ({
  category,
  title,
  date,
  writer,
  tags,
  link,
}) {
  return (
    <TechItemWrapper to={link}>
      <header>
        <div>
          {category} / {tags}
        </div>
        <GoIcon />
      </header>

      <h2>{title}</h2>

      <TechSummary>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus fuga
        fugiat, incidunt maxime minus natus necessitatibus vero voluptas!
        Consectetur doloremque ducimus exercitationem impedit magnam, non
        officia praesentium sapiente velit voluptas.
      </TechSummary>

      <footer>
        <div className={'leftSide'}>
          <WriterImage></WriterImage>
          <div>
            <div>{writer}</div>
          </div>
        </div>
        <div className={'extra'}>{date}</div>
      </footer>
    </TechItemWrapper>
  )
}

export default TechItem

/**
 * Styled
 */
const TechItemWrapper = styled(Link)`
  width: 100%;
  border: 1px solid #000000;
  box-shadow: 8px 8px 0px #000000;
  border-radius: 20px;
  padding: 48px 60px;

  &:hover {
    background: #b658ff;
    border: 1px solid #000000;
    box-shadow: inset 8px 8px 0px rgba(0, 0, 0, 0.1);
    border-radius: 20px;

    p {
      color: #f2f2f2;
    }

    footer {
      .extra {
        color: #f2f2f2;
      }
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #000000;
    margin-bottom: 26px;
  }

  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.006em;
    color: #000000;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.006em;
    color: #737373;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 46px;

    .leftSide {
      display: flex;
      gap: 16px;
      align-items: center;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.006em;
      color: #000000;
    }

    .extra {
      font-size: 14px;
      line-height: 16px;
      text-align: right;
      letter-spacing: -0.006em;
      color: #999999;
    }
  }
`

const TechSummary = styled.p`
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: keep-all;
`

const WriterImage = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid #ffd227;
  border-radius: 30px;
  overflow: hidden;
  object-fit: cover;
`
