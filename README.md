# Node Docker Workflow Tutorial
A workflow comparison between NodeJS's final production workflow, and my platform-agnostic development workflow. 

## Getting Started

### Prerequisites

This tutorial requires the following to execute and run properly:

- Docker
- Bash Shell

### Setup
- Clone this repostitory: `git clone https://github.com/raygervais/node-docker-workflow-tutorial.git`
- Grant execute permissions to the shell scripts: `chmod u+x *.sh -r`

### Execution
#### To Run the NodeJS Tutorial: 

<i>Assumes in project root directory</i>

- `cd ./Offical-Node-JS-Way`
- `build.sh  -u <YOUR_USERNAME_HERE> -n <APPLICATION_NAME>`
- `run.sh -u <YOUR_USERNAME_HERE> -n <APPLICATION_NAME -p <PORT>`

The above will produce the same end-screen that I included in my blog post. Some key items to take note of if you wish to modify the files:

- Dockerfile - EXPOSE <PORT_NUMBER> needs to be updated to accommodate your application's spec
- run.sh - Port 8080 is default, update this to your desired port




