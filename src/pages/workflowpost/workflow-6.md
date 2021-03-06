---
templateKey: workflow-page
title: workflow 6
workflowjson:
  data: >-
    [
        {
            "title": "New Tab",
            "tabTitle": "Condition",
            "subHeading": "Configure how Graylog should create Events of this kind. You can later use those Events as input on other Conditions, making it possible to build powerful Conditions based on others.",
            "content": [
                {
                    "title": "New condition",
                    "name": "conditiontype",
                    "type": "select",
                    "isRequired": false,
                    "value": "",
                    "notice": "Choose the type of Condition for this Event.",
                    "id": "condition 2",
                    "options": [
                        {
                            "value": "0",
                            "label": "Low"
                        },
                        {
                            "value": "1",
                            "label": "High"
                        },
                        {
                            "value": "2",
                            "label": "Normal"
                        }
                    ]
                }
            ]
        },
        {
            "title": "E vent Condition",
            "tabTitle": "Condition",
            "subHeading": "Configure how Graylog should create Events of this kind. You can later use those Events as input on other Conditions, making it possible to build powerful Conditions based on others.",
            "content": [
                {
                    "title": "Condition Type",
                    "name": "conditiontype",
                    "type": "select",
                    "isRequired": false,
                    "value": "",
                    "notice": "Choose the type of Condition for this Event.",
                    "id": "condition1",
                    "options": [
                        {
                            "value": "0",
                            "label": "Low"
                        },
                        {
                            "value": "1",
                            "label": "High"
                        },
                        {
                            "value": "2",
                            "label": "Normal"
                        }
                    ]
                }
            ]
        },
        {
            "title": "Title",
            "tabTitle": "Fields",
            "subHeading": "",
            "content": [
                {
                    "title": "Name",
                    "name": "name",
                    "type": "text",
                    "isRequired": false,
                    "value": "",
                    "placeHolder": "Your Name",
                    "notice": "",
                    "id": "name"
                },
                {
                    "title": "Email",
                    "name": "email",
                    "type": "text",
                    "isRequired": false,
                    "value": "",
                    "placeHolder": "Your Email",
                    "notice": "We don't share email",
                    "validation": [
                        {
                            "regEx": {},
                            "message": "Please enter valid email"
                        }
                    ],
                    "id": "email1"
                },
                {
                    "title": "Contact Number",
                    "name": "contact",
                    "type": "text",
                    "isRequired": false,
                    "value": "",
                    "placeHolder": "Your Contact Number",
                    "notice": "Enter your 10 digits contact number",
                    "id": "contact"
                },
                {
                    "title": "Address(Optional)",
                    "name": "address",
                    "type": "textarea",
                    "isRequired": false,
                    "value": "",
                    "placeHolder": "",
                    "notice": "",
                    "id": "address"
                },
                {
                    "title": "Birth Date",
                    "name": "birthdate",
                    "type": "DATE",
                    "isRequired": false,
                    "value": "",
                    "placeHolder": "",
                    "notice": "",
                    "id": "birtdate"
                },
                {
                    "title": "Gender",
                    "name": "gender",
                    "type": "radio",
                    "value": "",
                    "placeHolder": "",
                    "isRequired": false,
                    "notice": "",
                    "options": [
                        {
                            "value": "0",
                            "label": "Male"
                        },
                        {
                            "value": "1",
                            "label": "Female"
                        }
                    ],
                    "id": "gender1"
                }
            ]
        }
    ]
---
