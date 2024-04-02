import { IGatsbyImageData } from 'gatsby-plugin-image'

export type ExperienceType = {
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

export type ExperienceFrontmatterType = {
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

export type ExperienceListItemType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: ExperienceFrontmatterType
  }
}
