FROM node:16 as root
WORKDIR /app
COPY *.json ./
RUN npm install
COPY . .
ENV PORT=3000
RUN npm run build
EXPOSE ${PORT}
CMD ["npm", "run", "start"]