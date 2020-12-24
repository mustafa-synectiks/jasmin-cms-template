import React from 'react'
import PropTypes from 'prop-types'
import { AdmissionTemplate } from '../../templates/admission-page'

const WorkflowPagePreview = ({ entry, getAsset }) => {
  return (
    <AdmissionTemplate
      workflowjson={entry.getIn(['data', 'workflowjson'])}
    />
  )
}

AdmissionTemplate.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AdmissionTemplate
