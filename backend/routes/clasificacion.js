const express = require('express');
const ClasificacionController = require('../controllers/clasificacion');

const router = express.Router();

/**
 * @swagger
 * path:
 *  /clasificaciones:
 *    post:
 *      summary: Crear una nueva clasificacion
 *      tags:
 *          - clasificacion
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      -   in: body
 *          name: clasificacion
 *          required: true
 *          description: La clasificacion a crear
 *          schema:
 *              type: object
 *              properties:
 *                  ClasificacionD:
 *                      type: string
 *      responses:
 *        "200":
 *          description: Clasificacion creada exitosamente
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.post('/clasificaciones/', ClasificacionController.createClasificacion);

/**
 * @swagger
 * path:
 *  /clasificaciones:
 *    get:
 *      summary: Obtener una lista de todas las clasificaciones
 *      tags:
 *          - clasificacion
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      responses:
 *        "200":
 *          description: Clasificaciones obtenidas exitosamente
 *          schema:
 *              type: array
 *              items:
 *                  properties:
 *                      IdClasificacion:
 *                          type: integer
 *                      ClasificacionD:
 *                          type: string
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.get('/clasificaciones/', ClasificacionController.getClasificaciones);

/**
 * @swagger
 * path:
 *  /clasificacion/{id}:
 *    get:
 *      summary: Obtener detalles de una clasificacion
 *      tags:
 *          - clasificacion
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      -   in: path
 *          name: id
 *          description: id de la clasificacion a obtener
 *          required: true
 *          type: integer
 *      responses:
 *        "200":
 *          description: Clasificacion obtenida exitosamente
 *          schema:
 *              type: object
 *              properties:
 *                  IdClasificacion:
 *                      type: integer
 *                  ClasificacionD:
 *                      type: string
 *        "404":
 *          description: No existe una clasificacion con ese id
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.get('/clasificacion/:id', ClasificacionController.getClasificacion);

/**
 * @swagger
 * path:
 *  /clasificacion/{id}:
 *    put:
 *      summary: Actualzar una clasificacion
 *      tags:
 *          - clasificacion
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      -   in: path
 *          name: id
 *          description: id de la clasificacion a actualizar
 *          required: true
 *          type: integer
 *      -   in: body
 *          name: clasificacion
 *          required: true
 *          description: La clasificacion a actualizar
 *          schema:
 *              type: object
 *              properties:
 *                  ClasificacionD:
 *                     type: string
 *      responses:
 *        "200":
 *          description: Clasificacion actualizada exitosamente
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.put('/clasificacion/:id', ClasificacionController.updateClasificacion);

/**
 * @swagger
 * path:
 *  /clasificacion/{id}:
 *    delete:
 *      summary: Eliminar una clasificacion
 *      tags:
 *          - clasificacion
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      -   in: path
 *          name: id
 *          description: id de la clasificacion a eliminar
 *          required: true
 *          type: integer
 *      responses:
 *        "200":
 *          description: Clasificacion eliminada exitosamente
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.delete('/clasificacion/:id', ClasificacionController.deleteClasificacion);

module.exports = router;
