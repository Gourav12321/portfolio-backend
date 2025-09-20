import express from 'express';
import { home, getdata, getname, showname, contactinfo, showcontact, deletecontact, educationinfo, showeducation, addProject, getProjects } from '../controllers/controller.js';

const router = express.Router();

// Define your routes
router.post('/home', home);
router.get('/getdata', getdata);
router.post('/getname', getname);
router.get('/showname', showname);
router.post('/contactinfo', contactinfo);
router.get('/showcontact', showcontact);
router.delete('/deletecontact/:id', deletecontact);
router.post('/education', educationinfo);
router.get('/showeducation', showeducation);
router.post('/projects', addProject);
router.get('/projects', getProjects);

export default router;
