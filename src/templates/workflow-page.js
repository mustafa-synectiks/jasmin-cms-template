import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import WorkflowComponent from '../components/WorkflowComponent';

export const WorkflowTemplate = ({
    workflowjson
}) => {
    return (
        <section className="section">
            <div className="container content">
                <div className="">
                    <WorkflowComponent data={workflowjson} />
                </div>
            </div>
        </section>
    )
}

WorkflowTemplate.propTypes = {
    workflowjson: PropTypes.string,
}

const WorkflowPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <WorkflowTemplate
                workflowjson={frontmatter.workflowjson}
            />
        </Layout>
    )
}

WorkflowPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default WorkflowPage

export const workflowPageQuery = graphql`
  query WorkflowPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        workflowjson
      }
    }
  }
`
