# node-js-app-CICD

### Streamlining Node.js deployment with Jenkins ensures faster, more reliable updates. In this guide, you’ll learn how to configure a Jenkins freestyle project to automatically fetch your code from GitHub, install dependencies, and deploy your app using PM2.


# Prerequisites : 

A Linux server (Ubuntu/Debian recommended) with Jenkins installed and running as the jenkins user.

The Jenkins user has sudo privileges to install packages and manage services.

The Git plugin is installed in Jenkins.

Your Node.js application is stored in a Git repository (e.g., GitHub).

Jenkins web UI port (8080 by default) is open and accessible in your security settings.

The application port (e.g., 3000) is open in your security group for external access.


# Setting Up Jenkins Project

Job 1 – 01-setup-env: Install Node.js, npm, and PM2 globally.

Job 2 – 02-node-pull: Fetch the latest source code from the Git repository.

Job 3 – 03-install-dependency: Install project dependencies using npm install.

Job 4 – 04-deploy-node: Deploy or start the Node.js application using PM2.


# job 1 :

✅ Step 1 — Set Up AWS EC2 Instances

Launch two EC2 instances in the same VPC (default):

Jenkins Server → Open port 8080 in the Security Group.

Target Server → Open ports 22 (SSH) and 3000 (app access) in the Security Group.

Then, log in to the Target Server and install Node.js, npm, and PM2 manually:

![](./img/Screenshot%202025-11-06%20134953.png)


2. Create a new repository on GitHub with the following details:

Repository Name: Node-app-CICD

Default Branch: main

![](./img/Screenshot%202025-11-06%20134856.png)


✅ Step 3 — Jenkins Credentials

Navigate to Manage Jenkins → Credentials → System → Global and create a new credential:

Scope: Global

ID: node-app-key

Description: node-app-key

Username: ubuntu

Private Key: Your Private Key

![](./img/Screenshot%202025-11-06%20134925.png)

✅ Step 4 — Push Code and Jenkinsfile to Repository

Push your Node.js application and Jenkinsfile to the GitHub repository:
 

Once the code is pushed, a GitHub webhook automatically notifies the Jenkins server.
Jenkins then:

Pulls the latest code

Installs dependencies

Runs tests

Builds the application

Deploys it to the target server

![](./img/Screenshot%202025-11-06%20134802.png)


✅ Conclusion

This CI/CD setup enables a fully automated, production-ready Node.js deployment pipeline:

✅ Faster and more reliable releases

✅ Elimination of manual deployment errors

✅ Continuous and consistent delivery

✅ Real-world DevOps workflow implementation

Together, Jenkins, GitHub, PM2, and AWS EC2 create a seamless and efficient pipeline that simplifies and accelerates modern application delivery.

