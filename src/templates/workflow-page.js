import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const WorkflowTemplate = ({
    workflow
}) => {
    return (
        <section className="section">
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                            {workflow}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

WorkflowTemplate.propTypes = {
    workflow: PropTypes.string,
}

const Workflow = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <WorkflowTemplate
                workflow={frontmatter.workflow}
            />
        </Layout>
    )
}

Workflow.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default Workflow

export const workflowPageQuery = graphql`
  query WorkflowPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        workflow
      }
    }
  }
`
