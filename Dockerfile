FROM node:alpine

# Bundle app source
COPY ./backend /src

# Install app dependencies
RUN cd /src; npm install

EXPOSE 80
CMD ["node", "/src/index.js"]