import { IGatsbyImageData } from 'gatsby-plugin-image'

export type ProjectType = {
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

export type ProjectFrontmatterType = {
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

export type ProjectListItemType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: ProjectFrontmatterType
  }
}
