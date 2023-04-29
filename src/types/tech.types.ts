import { IGatsbyImageData } from 'gatsby-plugin-image'

export type TechType = {
  node: {
    id: string
    frontmatter: {
      category: string
      title: string
      date: string
      writer: string
      writerImage: {
        publicURL: string
      }
      tags: string[]
    }
  }
}

export type TechFrontmatterType = {
  category: string
  title: string
  date: string
  writer: string
  writerImage: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
    publicURL: string
  }
  tags: string[]
  link: string
}

export type TechListItemType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: TechFrontmatterType
  }
}
