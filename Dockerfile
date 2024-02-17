# Use Node.js Alpine as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port that Vite will run on


# Command to start Vite
CMD ["npm", "run", "dev"]
