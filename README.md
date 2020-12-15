Example Repo: https://github.com/jasminmakasana/gatsby-starter-netlify-cms-test.git


How to create a CMS with Workflow?

1) Deploy Netlify CMS with Gatsby 
https://www.netlifycms.org/docs/start-with-a-template/

2) after it is deployed, clone the repo from github to local machine.

----- Components folder -----

3) Copy the Workflow-JS from Workflow repository to components folder. Rename the folder "Workflow" from "Workflow-JS".
https://github.com/xformation/xformation-ui-workflowjs

4) copy the WorkflowComponent.js from example repository of netlify cms to components folder.

5) copy the WorkflowRoll.js from example repository of netlifycms to components folder.

------ templates folder ------

6) create a Template for workflow in templates folder. This template is responsible for rendering a workflow. It uses WorkflowComponent that we copied in step 4.
Please take a reference from example repository.

------ pages folder -----

7) create a workflowpost folder in pages which will include a list of files. Every workflow will have an individual .md file. 
To show the list of workflow, create an index file in this folder. It will use WorkflowRoll component we copied in step 5.

------ config.yaml -----

8) in static/config.yaml, add a workflow collection to let the cms know that which are the fields and url workflow is using. 
Please take a reference from example repository.

-------- cms folder -----------

9) copy the WorkflowPreview.js from the example repository to cms/preview-templates folder.

10) import the WorkflowPreviw in cms.js file and register the template in cms.js file.