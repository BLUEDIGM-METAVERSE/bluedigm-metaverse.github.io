export type PostType = {
  node: {
    id: string
    frontmatter: {
      category: string
      title: string
      date: string
      writer: string
      tags: string[]
    }
  }
}

export type PostFrontmatterType = {
  ategory: string
  title: string
  date: string
  writer: string
  tags: string[]
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
