
# Use the official Node.js image as the base image
FROM node:21.2.0

# Set the working directory inside the container
WORKDIR /usr/src/library-site

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port on which Next.js is running (adjust if needed)
EXPOSE 3000

# Command to start the application in development mode
CMD ["npm", "run", "site:dev"]



