import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Schema from "../components/Schema";

export const TrainingPostTemplate = ({
                                     content,
                                     contentComponent,
                                     description,
                                     tags,
                                     title,
                                         image,

                                     helmet,
                                         schema,
                                 }) => {
    const PostContent = contentComponent || Content
    console.log(schema);
    return (
        <section className="section">
            {helmet || ''}
            <div className="container content">
                <div
                    className="full-width-image-container margin-top-0"
                    style={{
                        backgroundImage: `url(${
                            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                            })`,
                    }}
                >
                <div className="columns">
                    <div className="column is-20 is-offset-2">
                        <h1 className="has-text-weight-bold is-size-1"
                            style={{
                                boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                                backgroundColor: '#f40',
                                color: 'white',
                                padding: '1rem',
                            }}>
                            {title}
                        </h1>
                    </div>
                </div>
                </div>

                        <p>{description}</p>
                        {schema.map((schemaItem) => (
                            <Schema gridItems={schemaItem.days} />
                        ))}

                        {tags && tags.length ? (
                            <div style={{ marginTop: `4rem` }}>
                                <h4>Tags</h4>
                                <ul className="taglist">
                                    {tags.map((tag) => (
                                        <li key={tag + `tag`}>
                                            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                    </div>
        </section>
    )
}


TrainingPostTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    helmet: PropTypes.object,
    schema: PropTypes.array,
};


const TrainingPost = ({ data }) => {
    const { markdownRemark: post } = data;
    console.log("markdownremark")
    console.log(post.frontmatter);

    return (
        <Layout>
            <TrainingPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                image={post.frontmatter.image}
                helmet={
                    <Helmet titleTemplate="%s | Blog">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta
                            name="description"
                            content={`${post.frontmatter.description}`}
                        />
                    </Helmet>
                }
                schema={post.frontmatter.schema}
                days={post.frontmatter.schema.days}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
            />
        </Layout>
    )
}

TrainingPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default TrainingPost

export const pageQuery = graphql`
  query TrainingPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        schema{
            days{
                heading
                oefening{
                    title
                    description
                 
                }
            }
        }
        
        
        
        image{
            childImageSharp {
                fluid(maxWidth: 240, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            
          

        tags
      }
    }
  }
`
