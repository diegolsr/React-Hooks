const env = process.env.NODE_ENV || 'dev'; // dev or test

const dev = {
  app :{
    port: parseInt(process.env.DEV_APP_PORT || 3000),
  },
  db: {
    host: process.env.DEV_DB_HOST || 'localhost',
    port: parseInt(process.env.DEV_DB_PORT) || 27017,
    name: process.env.DEV_DB_NAME || 'listadecompras',
  },
};

const test = {
  app: {
    port: parseInt(process.env.DEV_APP_PORT || 3000),
  },
  db: {
    host: process.env.DEV_DB_HOST || 'localhost',
    port: parseInt(process.env.DEV_DB_PORT) || 27017,
    name: process.env.DEV_DB_NAME || 'testelistadecompras',
  },
};

const config = {
  dev,
  test,
};

module.exports = config[env];
