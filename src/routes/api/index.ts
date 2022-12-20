import express from 'express';
import student from './student';
import teachers from './teachers';

const routes = express.Router();

routes.get('/',(req,res) =>{
    res.send('Main Routes');
});

routes.use('/teacher', teachers);
routes.use('/student', student);
export default routes