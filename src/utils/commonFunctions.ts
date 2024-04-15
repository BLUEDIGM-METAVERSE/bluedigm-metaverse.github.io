export function getUser(writer: string, edges: any): string {
    const matchedMember = edges.find(({ node: memberNode }) => memberNode.frontmatter.name === writer);
    return matchedMember ? matchedMember.node.frontmatter.department + "의 " + matchedMember.node.frontmatter.duty : "";
}

export function getImage(writer: string, edges: any): string {
    const matchedMember = edges.find(({ node: memberNode }) => memberNode.frontmatter.name === writer);
    return matchedMember ? matchedMember.node.frontmatter.thumbnail.publicURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMjlfODEg%2FMDAxNjc0OTk5NzQxODI3.bsY8Pp096lvyHW58LhZN75yFCzKee2-uP0Xgi2vZjX8g.pGWyDF1uYPZltBU6lsY2c5STziIOiH5SDn0lKYvN-LAg.JPEG.gmldud3540%2FIMG_6904.jpg&type=a340';
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