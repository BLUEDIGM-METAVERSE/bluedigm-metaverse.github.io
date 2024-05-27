import { graphql, useStaticQuery } from "gatsby";

const Image: React.FC<{ path: string; alt: string }> = ({ path, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        nodes {
          id
          relativePath
          publicURL
        }
      }
    }
  `);

  path = path.replace('/images/','');
  const findImage = data.allFile.nodes.find((node: { relativePath: string; }) => node.relativePath === path);
  return (
    <img src={findImage.publicURL} alt={alt} />
  );
  
};

export default Image
