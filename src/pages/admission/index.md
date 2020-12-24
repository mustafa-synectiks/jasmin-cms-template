---
templateKey: admission-page
path: /admission
title: Admission
workflowjson:
  data: >-
    [
        {
            "title": "Personal Information",
            "tabTitle": "Personal Info",
            "subHeading": "",
            "apiEndPoint": "",
            "content": [
                {
                    "id": "studentType",
                    "name": "studentType",
                    "title": "Student Type",
                    "isRequired": true,
                    "options": [
                        {
                            "label": "REGULAR",
                            "value": "REGULAR"
                        },
                        {
                            "label": "STAFF CONCESSION",
                            "value": "STAFF_CONCESSION"
                        },
                        {
                            "label": "BENEFITS",
                            "value": "BENEFITS"
                        },
                        {
                            "label": "SCHOLARSHIP",
                            "value": "SCHOLARSHIP"
                        }
                    ],
                    "errorMessage": "Please select student type",
                    "notice": "",
                    "type": "select"
                },
                {
                    "id": "batchId",
                    "name": "batchId",
                    "title": "Year",
                    "isRequired": true,
                    "options": [],
                    "errorMessage": "Please select year",
                    "notice": "",
                    "type": "select"
                },
                {
                    "id": "sectionId",
                    "name": "sectionId",
                    "title": "Section",
                    "isRequired": true,
                    "options": [],
                    "errorMessage": "Please select section",
                    "notice": "",
                    "type": "select"
                },
                {
                    "id": "studentName",
                    "name": "studentName",
                    "title": "Student Name",
                    "isRequired": true,
                    "placeHolder": "",
                    "errorMessage": "Please enter the student name",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "studentMiddleName",
                    "name": "studentMiddleName",
                    "title": "Student Middle Name",
                    "isRequired": false,
                    "placeHolder": "",
                    "errorMessage": "This field is required.",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "studentLastName",
                    "name": "studentLastName",
                    "title": "Student Last Name",
                    "isRequired": true,
                    "placeHolder": "",
                    "errorMessage": "Please enter the student last name",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "fatherName",
                    "name": "fatherName",
                    "title": "Father Name",
                    "isRequired": true,
                    "placeHolder": "",
                    "errorMessage": "Please select father's name",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "fatherMiddleName",
                    "name": "fatherMiddleName",
                    "title": "Father Middle Name",
                    "isRequired": false,
                    "placeHolder": "",
                    "errorMessage": "This field is required.",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "fatherLastName",
                    "name": "fatherLastName",
                    "title": "Father Last Name",
                    "isRequired": true,
                    "placeHolder": "",
                    "errorMessage": "Please enter the father's last name",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "motherName",
                    "name": "motherName",
                    "title": "Mother Name",
                    "isRequired": false,
                    "placeHolder": "",
                    "errorMessage": "This field is required.",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "motherMiddleName",
                    "name": "motherMiddleName",
                    "title": "Mother Middle Name",
                    "isRequired": false,
                    "placeHolder": "enter name",
                    "errorMessage": "This field is required.",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "motherLastName",
                    "name": "motherLastName",
                    "title": "Mother Last Name",
                    "isRequired": false,
                    "placeHolder": "",
                    "errorMessage": "This field is required.",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "dateOfBirth",
                    "name": "dateOfBirth",
                    "title": "Date of Birth",
                    "isRequired": true,
                    "placeHolder": "",
                    "errorMessage": "Please select date of birth",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "sex",
                    "name": "sex",
                    "title": "Gender",
                    "isRequired": true,
                    "options": [
                        {
                            "label": "MALE",
                            "value": "MALE"
                        },
                        {
                            "label": "FEMALE",
                            "value": "FEMALE"
                        },
                        {
                            "label": "OTHER",
                            "value": "OTHER"
                        }
                    ],
                    "errorMessage": "Please select gender",
                    "notice": "",
                    "type": "select"
                },
                {
                    "id": "placeOfBirth",
                    "name": "placeOfBirth",
                    "title": "Place Of Birth",
                    "isRequired": false,
                    "placeHolder": "enter name",
                    "errorMessage": "This field is required.",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "religion",
                    "name": "religion",
                    "title": "Religion",
                    "isRequired": true,
                    "options": [
                        {
                            "label": "HINDU",
                            "value": "HINDU"
                        },
                        {
                            "label": "MUSLIM",
                            "value": "MUSLIM"
                        },
                        {
                            "label": "CHRISTIAN",
                            "value": "CHRISTIAN"
                        },
                        {
                            "label": "SIKH",
                            "value": "SIKH"
                        },
                        {
                            "label": "BUDH",
                            "value": "BUDH"
                        }
                    ],
                    "errorMessage": "Please select religion",
                    "notice": "",
                    "type": "select"
                },
                {
                    "id": "caste",
                    "name": "caste",
                    "title": "Caste",
                    "isRequired": true,
                    "options": [
                        {
                            "label": "GENERAL",
                            "value": "GENERAL"
                        },
                        {
                            "label": "OTHER BACKWARD CASTE",
                            "value": "OBC"
                        },
                        {
                            "label": "SCHEDULED CASTE",
                            "value": "SC"
                        },
                        {
                            "label": "SCHEDULED TRIBE",
                            "value": "ST"
                        }
                    ],
                    "errorMessage": "Please select caste",
                    "notice": "",
                    "type": "select"
                },
                {
                    "id": "subCaste",
                    "name": "subCaste",
                    "title": "Sub Caste",
                    "isRequired": false,
                    "placeHolder": "",
                    "errorMessage": "This field is required.",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "studentLocalAddress",
                    "name": "studentLocalAddress",
                    "title": "Local Address",
                    "isRequired": true,
                    "placeHolder": "",
                    "errorMessage": "Please select local address",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "studentPermanentAddress",
                    "name": "studentPermanentAddress",
                    "title": "Permanent Address",
                    "isRequired": true,
                    "placeHolder": "",
                    "errorMessage": "Please select permanent address",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "pinCode",
                    "name": "pinCode",
                    "title": "Pin Code",
                    "isRequired": false,
                    "placeHolder": "",
                    "errorMessage": "This field is required.",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "state",
                    "name": "state",
                    "title": "State",
                    "isRequired": true,
                    "options": [],
                    "errorMessage": "Please select state",
                    "notice": "",
                    "type": "select"
                },
                {
                    "id": "city",
                    "name": "city",
                    "title": "City",
                    "isRequired": true,
                    "options": [],
                    "errorMessage": "Please select city",
                    "notice": "",
                    "type": "select"
                },
                {
                    "id": "studentPrimaryCellNumber",
                    "name": "studentPrimaryCellNumber",
                    "title": "Student Primary Cell Number",
                    "isRequired": false,
                    "placeHolder": "",
                    "errorMessage": "This field is required.",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "studentAlternateCellNumber",
                    "name": "studentAlternateCellNumber",
                    "title": "Student Alternate Cell Number",
                    "isRequired": false,
                    "placeHolder": "",
                    "errorMessage": "This field is required.",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "studentLandLinePhoneNumber",
                    "name": "studentLandLinePhoneNumber",
                    "title": "Land Line Phone Number",
                    "isRequired": false,
                    "placeHolder": "",
                    "errorMessage": "This field is required.",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "studentPrimaryEmailId",
                    "name": "studentPrimaryEmailId",
                    "title": "Primary Email Id",
                    "isRequired": true,
                    "placeHolder": "",
                    "errorMessage": "Please select primary email id",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "studentAlternateEmailId",
                    "name": "studentAlternateEmailId",
                    "title": "Alternate Email Id",
                    "isRequired": false,
                    "placeHolder": "",
                    "errorMessage": "This field is required.",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "fatherCellNumber",
                    "name": "fatherCellNumber",
                    "title": "Father's Cell Number",
                    "isRequired": false,
                    "placeHolder": "",
                    "errorMessage": "This field is required.",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "fatherEmailId",
                    "name": "fatherEmailId",
                    "title": "Father's Email Id",
                    "isRequired": false,
                    "placeHolder": "",
                    "errorMessage": "This field is required.",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "motherCellNumber",
                    "name": "motherCellNumber",
                    "title": "Mother's Cell Number",
                    "isRequired": false,
                    "placeHolder": "",
                    "errorMessage": "This field is required.",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "motherEmailId",
                    "name": "motherEmailId",
                    "title": "Mother's Email Id",
                    "isRequired": false,
                    "placeHolder": "",
                    "errorMessage": "This field is required.",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "emergencyContactName",
                    "name": "emergencyContactName",
                    "title": "Emergency Contact Person",
                    "isRequired": true,
                    "placeHolder": "",
                    "errorMessage": "Please select emergency contact person",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "emergencyContactCellNumber",
                    "name": "emergencyContactCellNumber",
                    "title": "Emergency Contact Cell Number",
                    "isRequired": true,
                    "placeHolder": "",
                    "errorMessage": "Please select emergency contact cell number",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "emergencyContactEmailId",
                    "name": "emergencyContactEmailId",
                    "title": "Emergency Contact Email Id",
                    "isRequired": false,
                    "placeHolder": "",
                    "errorMessage": "This field is required.",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "relationWithStudent",
                    "name": "relationWithStudent",
                    "title": "Emergency Contact Relation With Student",
                    "isRequired": true,
                    "options": [
                        {
                            "label": "FATHER",
                            "value": "FATHER"
                        },
                        {
                            "label": "MOTHER",
                            "value": "MOTHER"
                        },
                        {
                            "label": "GUARDIAN",
                            "value": "GUARDIAN"
                        }
                    ],
                    "errorMessage": "Please select emergency contact relation with student",
                    "notice": "",
                    "type": "select"
                }
            ]
        },
        {
            "title": "Academic Information",
            "tabTitle": "Academic Info",
            "subHeading": "",
            "apiEndPoint": "",
            "content": [
                {
                    "id": "qualification",
                    "name": "qualification",
                    "title": "Highest Qualification",
                    "isRequired": true,
                    "placeHolder": "",
                    "errorMessage": "Please select highest qualification",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "yearOfPassing",
                    "name": "yearOfPassing",
                    "title": "Year of Passing",
                    "isRequired": true,
                    "placeHolder": "YYYY",
                    "errorMessage": "This field is required.",
                    "notice": "Only numeric",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "percentage",
                    "name": "percentage",
                    "title": "Percentage of Last Qualification",
                    "isRequired": true,
                    "placeHolder": "",
                    "errorMessage": "Please select the last percentage",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                },
                {
                    "id": "institution",
                    "name": "institution",
                    "title": "Last College Attended",
                    "isRequired": true,
                    "placeHolder": "",
                    "errorMessage": "Please select last attended college name",
                    "notice": "",
                    "validations": [],
                    "type": "text"
                }
            ]
        },
        {
            "title": "Documents",
            "tabTitle": "Documents",
            "subHeading": "",
            "apiEndPoint": "",
            "content": [
                {
                    "id": "selectFile",
                    "name": "selectFile",
                    "title": "Select File",
                    "isRequired": false,
                    "errorMessage": "This field is required.",
                    "notice": "",
                    "type": "file"
                }
            ]
        }
    ]
---
