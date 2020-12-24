import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Admission from '../components/Admission';
import { gqlClient } from '../components/Admission/gqlClient';
import { ApolloProvider } from '@apollo/client';

export const AdmissionTemplate = ({
    workflowjson
}) => {
    const data = workflowjson ? workflowjson.data : '[]';
    return (
        <section className="section">
            <div className="container content">
                <div className="">
                    <Admission data={data} />
                </div>
            </div>
        </section>
    )
}

AdmissionTemplate.propTypes = {
    workflowjson: PropTypes.object,
}

const AdmissionPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <ApolloProvider client={gqlClient}>
            <Layout>
                <AdmissionTemplate
                    workflowjson={frontmatter.workflowjson}
                />
            </Layout>
        </ApolloProvider>
    )
}

AdmissionPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default AdmissionPage

export const admissionPageQuery = graphql`
  query AdmissionPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        workflowjson {
            data
        }
      }
    }
  }
`
