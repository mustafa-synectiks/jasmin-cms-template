import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import { Workflow, componentType } from './Workflow';

class WorkflowComponent extends React.Component {
    workflowRef = null;
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        this.workflowRef = React.createRef();
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.data !== this.props.data && this.props.data){
            this.setState({
                data: JSON.parse(this.props.data)
            });
        }
    }

    onClickNext = (index, tabData) => {
        console.log(tabData);
        setTimeout(() => {
            this.workflowRef.current.showNextTab();
        }, 3000);
    };

    render() {
        const { data } = this.state;
        return (
            <div>
                <Workflow formData={data} onClickNext={this.onClickNext} ref={this.workflowRef} waitForResponse={true} />
            </div>
        );
    }
}

export default WorkflowComponent
