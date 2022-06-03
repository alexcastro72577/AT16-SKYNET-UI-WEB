FROM node:16

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

COPY ./ ./
RUN npm install
RUN npm install antd
RUN npm install --save @ant-design/icons

EXPOSE 6015
CMD ["npm", "run", "start"]