FROM node:alpine

# Bundle app source
COPY ./backend /src

# Install app dependencies
RUN cd /src; npm install

EXPOSE 8080
CMD ["node", "/src/index.js"]