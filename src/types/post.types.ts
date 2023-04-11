export type PostType = {
  node: {
    id: string
    frontmatter: {
      categories: string[]
      title: string
      summary: string
      date: string
      writer: string
    }
  }
}

export type PostFrontmatterType = {
  categories: string[]
  title: string
  summary: string
  date: string
  writer: string
  link: string
}

export type PostListItemType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: PostFrontmatterType
  }
}
