import { IGatsbyImageData } from 'gatsby-plugin-image'

export type CultureType = {
  node: {
    id: string
    frontmatter: {
      title: string
      thumbnail: {
        publicURL: string
      }
      startedDate: string
      endedDate: string
    }
  }
}

export type CultureFrontmatterType = {
  title: string
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
    publicURL: string
  }
  startedDate: string
  endedDate: string
}

export type CultureListItemType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: CultureFrontmatterType
  }
}
