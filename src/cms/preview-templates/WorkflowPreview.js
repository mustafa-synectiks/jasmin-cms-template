import React from 'react'
import PropTypes from 'prop-types'
import { WorkflowTemplate } from '../../templates/workflow-page'

const WorkflowPagePreview = ({ entry, getAsset }) => {
  return (
    <WorkflowTemplate
      workflowjson={entry.getIn(['data', 'workflowjson'])}
    />
  )
}

WorkflowPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default WorkflowPagePreview
