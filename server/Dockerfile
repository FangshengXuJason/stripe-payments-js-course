FROM node:16
WORKDIR usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Specify production environment
ENV NODE_ENV=production

# Copy files over
COPY . .

# Fireship.io did not use this
# Your app binds to port 3333 so you'll use the EXPOSE instruction to have it mapped by the docker daemon:
# EXPOSE 3333

# Build it
RUN npm run build

# Serve it
CMD [ "npm ", "start" ]