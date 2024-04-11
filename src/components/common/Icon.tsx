import { graphql, useStaticQuery } from "gatsby";

const Icon: React.FC<{ path: string; alt: string }> = ({ path, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "icons"}}) {
        nodes {
          id
          name
          relativePath
          extension
          publicURL
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  path = path.replace('/icons/','');
  const findImage = data.allFile.nodes.find((node: { relativePath: string; }) => node.relativePath === path);
  return (
    <img src={findImage.publicURL} alt={alt} />
  );
  
};

export default Icon
