import React from 'react';
import { Workflow } from '../Workflow';
import { services } from './services';
import { withApollo } from '@apollo/client/react/hoc';
import { GET_TEMP_STUDENT } from './getStudentQuery';

class Admission extends React.Component {
    workflowRef = null;
    constructor(props) {
        super(props);
        let data = [];
        if (props.data) {
            data = JSON.parse(props.data);
        }
        this.state = {
            data: data,
            departmentId: 1201,
            batchList: [],
            sectionList: [],
            stateList: [],
            cityList: []
        };
        this.workflowRef = React.createRef();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.data !== this.props.data && this.props.data) {
            let isError = false;
            let data = {};
            try {
                data = JSON.parse(this.props.data);
            }
            catch (e) {
                isError = true;
            }
            if (!isError) {
                this.setState({
                    data
                });
            }
        }
    }

    componentDidMount() {
        const { departmentId } = this.state;
        services.getBatchList(departmentId).then(
            response => {
                this.setState({
                    batchList: response
                });
                let data = [];
                for (let i = 0; i < response.length; i++) {
                    const batch = response[i];
                    data.push({
                        label: batch.batch,
                        value: batch.id
                    });
                }
                this.updateForm(0, "batchId", "options", data);
            },
            error => {

            }
        );

        services.getStateList().then(
            response => {
                let data = [];
                for (let i = 0; i < response.length; i++) {
                    const state = response[i];
                    data.push({
                        label: state.stateName,
                        value: state.id
                    });
                }
                this.setState({
                    stateList: data
                });
                this.updateForm(0, "state", "options", data);
            },
            error => {

            }
        );

        services.getCityList().then(
            response => {
                let data = [];
                for (let i = 0; i < response.length; i++) {
                    const city = response[i];
                    data.push({
                        label: city.cityName,
                        value: city.id
                    });
                }
                this.setState({
                    cityList: response
                });
            },
            error => {

            }
        );

        this.initFromDb();
    }

    initFromDb = async () => {
        const { data } = await this.props.client.query({
            query: GET_TEMP_STUDENT,
            variables: {
                branchId: 1001,
                academicYearId: 1051,
                stateMachineId: "admenq-1:951"
            },
            fetchPolicy: 'no-cache'
        });
        const tempData = data.getTempStudent;
        this.updateForm(0, "studentType", "value", tempData.studentType);
        this.updateForm(0, "batchId", "value", tempData.batchId);
        this.updateForm(0, "sectionId", "value", tempData.sectionId);
        this.updateForm(0, "studentName", "value", tempData.studentName);
        this.updateForm(0, "studentMiddleName", "value", tempData.studentMiddleName);
        this.updateForm(0, "studentLastName", "value", tempData.studentLastName);
        this.updateForm(0, "fatherName", "value", tempData.fatherName);
        this.updateForm(0, "fatherMiddleName", "value", tempData.fatherMiddleName);
        this.updateForm(0, "fatherLastName", "value", tempData.fatherLastName);
        this.updateForm(0, "motherName", "value", tempData.motherName);
        this.updateForm(0, "motherMiddleName", "value", tempData.motherMiddleName);
        this.updateForm(0, "motherLastName", "value", tempData.motherLastName);
        this.updateForm(0, "dateOfBirth", "value", tempData.dateOfBirth);
        this.updateForm(0, "sex", "value", tempData.sex);
        this.updateForm(0, "placeOfBirth", "value", tempData.placeOfBirth);
        this.updateForm(0, "religion", "value", tempData.religion);
        this.updateForm(0, "caste", "value", tempData.caste);
        this.updateForm(0, "subCaste", "value", tempData.subCaste);
        this.updateForm(0, "studentLocalAddress", "value", tempData.studentLocalAddress);
        this.updateForm(0, "studentPermanentAddress", "value", tempData.studentPermanentAddress);
        this.updateForm(0, "pinCode", "value", tempData.pinCode);
        this.updateForm(0, "state", "value", tempData.state);
        this.updateForm(0, "city", "value", tempData.city);
        this.updateForm(0, "studentPrimaryCellNumber", "value", tempData.studentPrimaryCellNumber);
        this.updateForm(0, "studentAlternateCellNumber", "value", tempData.studentAlternateCellNumber);
        this.updateForm(0, "studentLandLinePhoneNumber", "value", tempData.studentLandLinePhoneNumber);
        this.updateForm(0, "studentPrimaryEmailId", "value", tempData.studentPrimaryEmailId);
        this.updateForm(0, "studentAlternateEmailId", "value", tempData.studentAlternateEmailId);
        this.updateForm(0, "fatherCellNumber", "value", tempData.fatherCellNumber);
        this.updateForm(0, "fatherEmailId", "value", tempData.fatherEmailId);
        this.updateForm(0, "motherCellNumber", "value", tempData.motherCellNumber);
        this.updateForm(0, "motherEmailId", "value", tempData.motherEmailId);
        this.updateForm(0, "emergencyContactName", "value", tempData.emergencyContactName);
        this.updateForm(0, "emergencyContactCellNumber", "value", tempData.emergencyContactCellNumber);
        this.updateForm(0, "emergencyContactEmailId", "value", tempData.emergencyContactEmailId);
        this.updateForm(0, "relationWithStudent", "value", tempData.relationWithStudent);

        this.updateForm(1, "qualification", "value", tempData.qualification);
        this.updateForm(1, "yearOfPassing", "value", tempData.yearOfPassing);
        this.updateForm(1, "percentage", "value", tempData.percentage);
        this.updateForm(1, "institution", "value", tempData.institution);

        if (tempData.state) {
            this.setCityList(tempData.state);
        }
        if (tempData.batchId) {
            this.getSectionList(tempData.batchId);
        }
    }

    updateForm = (tabIndex, id, key, value) => {
        const { data } = this.state;
        const tab = data[tabIndex];
        const content = tab.content;
        if (content && content.length > 0) {
            for (let i = 0; i < content.length; i++) {
                const control = content[i];
                if (control.id === id) {
                    control[key] = value;
                    break;
                }
            }
        }
        this.setState({
            data
        });
    }

    onFormSubmitted = (step, response) => {
        console.log(step, response);
    };

    onChangeComponent = (e, type, tabIndex, componentIndex) => {
        const { data } = this.state;
        const { value } = e.target;
        let tabContent = data[tabIndex];
        if (tabContent.content) {
            const component = tabContent.content[componentIndex];
            if (component) {
                if (component.id === "batchId") {
                    this.getSectionList(value);
                } else if (component.id === "state") {
                    this.setCityList(value);
                }
            }
        }
    };

    getSectionList = (batchId) => {
        services.getSectionList(batchId).then(
            response => {
                this.setState({
                    sectionList: response
                });
                let data = [];
                for (let i = 0; i < response.length; i++) {
                    const section = response[i];
                    data.push({
                        label: section.section,
                        value: section.id
                    });
                }
                this.updateForm(0, "sectionId", "options", data);
            },
            error => {

            }
        );
    };

    setCityList = (stateId) => {
        const { cityList } = this.state;
        const data = [];
        for (let i = 0; i < cityList.length; i++) {
            if (cityList[i].stateId == stateId) {
                data.push({
                    label: cityList[i].cityName,
                    value: cityList[i].id
                });
            }
        }
        this.updateForm(0, "city", "options", data);
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <Workflow formData={data} onFormSubmitted={this.onFormSubmitted} ref={this.workflowRef} onChangeComponent={this.onChangeComponent} />
            </div>
        );
    }
}

export default withApollo(Admission);