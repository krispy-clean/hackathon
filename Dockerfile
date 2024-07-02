# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Install Bun globally
RUN npm install -g bun

# Copy root package.json and bun.lockb to the container
COPY package.json bun.lockb ./

# Install root dependencies
RUN bun install

# Copy all necessary files to the container
COPY . .

# Install root dependencies
RUN bun install

# Expose the ports used by your frontend and backend apps
EXPOSE 3000 3001

# Command to run the development server
CMD ["bun", "run", "dev"]
