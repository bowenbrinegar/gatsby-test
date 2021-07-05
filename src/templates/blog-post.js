import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "src/components/layout"
import Counter from 'src/components/Counter'

const shortcodes = { Counter };
export default function BlogPost({ data: { mdx: post } }) {
  const { body, frontmatter } = post;
  return (
    <Layout pageTitle={frontmatter.title}>
      <div>
        <h1>{frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        title
        path
      }
      body
    }
  }
`;