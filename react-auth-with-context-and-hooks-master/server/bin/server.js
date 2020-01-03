import dotenv from 'dotenv';
import express from 'express';
import mongooseConfig from '../configs/mongooseConfig';
import sessionConfig from '../configs/sessionConfig';
import corsConfig from '../configs/corsConfig';
import loggerConfig from '../configs/loggerConfig';
import bodyParserConfig from '../configs/bodyParserConfig';
import passportConfig from '../configs/passportConfig';
import routerConfig from '../configs/routerConfig';
import errorHandlerConfig from '../configs/errorsConfig';
import httpConfig from '../configs/httpConfig';

const app = express();

dotenv.config();
mongooseConfig();
sessionConfig(app);
corsConfig(app);
loggerConfig(app);
bodyParserConfig(app);
passportConfig(app);
routerConfig(app);
errorHandlerConfig(app);
httpConfig(app);
