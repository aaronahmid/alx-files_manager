// eslint-disable-next-line no-unused-vars
import { Express } from 'express';
import AppController from '../controllers/AppController';
import { APIError, errorResponse } from '../middlewares/errors';

/**
 * Adds routes and their handlers to the given express app
 * @param {Express} api
 */
const addRoutes = (api) => {
  api.get('/status/', AppController.getStatus);
  api.get('stats', AppController.getStats);

  api.all('*', (req, res, next) => {
    errorResponse(new APIError(404, `Cannot ${req.method} ${req.url}`), req, res, next);
  });
  api.use(errorResponse);
};

export default addRoutes;
