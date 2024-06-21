export function getUser(writer: string, edges: any): string {
    const matchedMember = edges.find(({ node: memberNode }) => memberNode.frontmatter.name === writer);
    return matchedMember ? matchedMember.node.frontmatter.department + "의 " + matchedMember.node.frontmatter.duty : "";
}

export function getImage(writer: string, edges: any): string {
    const matchedMember = edges.find(({ node: memberNode }) => memberNode.frontmatter.name === writer);
    return matchedMember ? matchedMember.node.frontmatter.thumbnail.publicURL : '../assets/images/metaflow.png';
}

export const getPageSlugs = (currentIndex: number, data: any) => {
    const previousIndex = currentIndex - 1
    const nextIndex = currentIndex + 1
    const previousSlug = data[previousIndex]?.node.fields.slug || ''
    const nextSlug = data[nextIndex]?.node.fields.slug || ''
    return { previousSlug, nextSlug }
}

export const getAllSlugs = (data: any) => {
    return data.map(node => node.fields.slug)
}