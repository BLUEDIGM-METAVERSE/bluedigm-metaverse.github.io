import { IGatsbyImageData } from 'gatsby-plugin-image'

export type MemberFrontmatterType = {
  orderNum: number
  name: string
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
    publicURL: string
  }
  department: string
  position: string
  duty: string
  alia: string
  introduce: string
}

export type MemberListItemType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: MemberFrontmatterType
  }
}
