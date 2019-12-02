const express = require('express');
const EntidadController = require('../controllers/entidad');

const router = express.Router();

router.put('/entidad/crear', EntidadController.insert);
/*router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/project/:id', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.deleteProject);*/

module.exports = router;
