import { graphql, useStaticQuery } from 'gatsby';

export const usePagingQuery = (currentSlug: string, filterRegex: string) => {
    const data = useStaticQuery(graphql`
        query {
            culture: allMarkdownRemark(
                sort: {frontmatter: {date: DESC}}
                filter: { fileAbsolutePath: { regex: "/culture/" } }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
            experience: allMarkdownRemark(
                sort: {frontmatter: {date: DESC}}
                filter: { fileAbsolutePath: { regex: "/experience/" } }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
            tech: allMarkdownRemark(
                sort: {frontmatter: {date: DESC}}
                filter: { fileAbsolutePath: { regex: "/tech/" } }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);
    
    let pageData = [];
    if (filterRegex.includes("/culture/")) {
        pageData = data.culture.edges;
    } else if (filterRegex.includes("/tech/")) {
        pageData = data.tech.edges;
    } else if (filterRegex.includes("/experience/")) {
        pageData = data.experience.edges;
    }

    const findIndex = pageData.findIndex((item) => item.node.fields.slug === currentSlug);
    
    let previousSlug = ''
    let nextSlug = ''
    if (findIndex !== -1) {
        const currentIndex = findIndex
        const previousIndex = currentIndex - 1
        const nextIndex = currentIndex + 1
        previousSlug = pageData[previousIndex]?.node.fields.slug || ''
        nextSlug = pageData[nextIndex]?.node.fields.slug || ''
    }
    
    return { previousSlug, nextSlug }
};
    