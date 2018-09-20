FROM node:latest

# Create Application Directory
WORKDIR /usr/src/app

# Copy Package.* 
COPY package*.json ./

# Install Project Dependencies
RUN npm install

# Copy source
COPY . .

# Expose needed port (default is 8080)
EXPOSE 8080

# Start-up commands
CMD ["npm", "start"]

