FROM node:latest

# Add any global tools used here
# Using Vue as an example
RUN npm install @vue/cli

# Create Application Directory
WORKDIR /usr/src/app

# Copy Package.* 
COPY package*.json ./

# Install Project Dependencies
RUN npm install


