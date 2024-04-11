import { graphql, useStaticQuery } from 'gatsby';

export const useMembersQuery = () => {
    const data = useStaticQuery(graphql`
        query {
            members: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/member/" } }
                sort: [{ frontmatter: { orderNum: ASC } }, { frontmatter: { name: ASC } }]
            ) {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            name
                            thumbnail {
                                publicURL
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                            department
                            position
                            duty
                        }
                    }
                }
            }
        }
    `);

    return data.members.edges;
};
