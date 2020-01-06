import { Router } from 'express';
// import User from './app/models/User';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import EnrollController from './app/controllers/EnrollController';

import authMiddleware from './app/middlewares/auth';
import CheckinController from './app/controllers/CheckinController';
import HelporderController from './app/controllers/HelporderController';
import AnswerController from './app/controllers/AnswerController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.post('/students/:id/checkins', CheckinController.store);
routes.get('/students/:id/checkins', CheckinController.index);

routes.post('/students/:id/help-orders', HelporderController.store);
routes.put('/students/:id/help-orders', HelporderController.update);
routes.get('/students/help-orders', HelporderController.index);

/* routes.get('/', async (req, res) => {
  const student = await Student.create({
    name: 'Dennis Lee',
    email: 'den@yahoo.com',
    age: '22',const plans = await Plan.findAll({
      where: { canceled_at: null },
    });
    weight: '77',
    height: '180',
    created_at: '22',
  });
  return res.json(student);
}); */

// middleware global que será aplicado apenas nas rotas após ele
routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/students', StudentController.store);
routes.put('/students', StudentController.update);
routes.get('/students', StudentController.index);
routes.delete('/students/:id', StudentController.delete);

routes.post('/plans', PlanController.store);
routes.put('/plans', PlanController.update);
routes.get('/plans', PlanController.index);
routes.delete('/plans/:id', PlanController.delete);

routes.post('/enrolls', EnrollController.store);
// routes.put('/enrolls', EnrollController.update);
routes.get('/enrolls', EnrollController.index);
routes.put('/enrolls', EnrollController.update);
routes.delete('/enrolls/:id', EnrollController.delete);

routes.put('/help-orders/:id/answer', AnswerController.update);

// routes.delete('/enrolls/:id', EnrollController.delete);

/* routes.get('/', async (req, res) => {

  const user = await User.create({
    name: 'Dennis Lee',
    email: 'dennis.lee4@gmail.com',
    password_hash: '1234567',
  });


  return res.json(user);
}); */

export default routes;
