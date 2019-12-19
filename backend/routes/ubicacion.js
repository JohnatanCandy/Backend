const express = require('express');
const UbicacionController = require('../controllers/ubicacion');

const router = express.Router();

/**
 * @swagger
 * path:
 *  /ubicaciones:
 *    post:
 *      summary: Crear una nueva ubicacion
 *      tags:
 *          - ubicacion
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      -   in: body
 *          name: ubicacion
 *          required: true
 *          description: La ubicacion a crear
 *          schema:
 *              type: object
 *              properties:
 *                  UbicacionD:
 *                      type: string
 *      responses:
 *        "200":
 *          description: Ubicacion creada exitosamente
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.post('/ubicaciones/', UbicacionController.createUbicacion);

/**
 * @swagger
 * path:
 *  /ubicaciones:
 *    get:
 *      summary: Obtener una lista de todas las ubicaciones
 *      tags:
 *          - ubicacion
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      responses:
 *        "200":
 *          description: Ubicaciones obtenidas exitosamente
 *          schema:
 *              type: array
 *              items:
 *                  properties:
 *                      IdUbicacion:
 *                          type: integer
 *                      UbicacionD:
 *                          type: string
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.get('/ubicaciones/', UbicacionController.getUbicaciones);

/**
 * @swagger
 * path:
 *  /ubicacion/{id}:
 *    get:
 *      summary: Obtener detalles de una ubicacion
 *      tags:
 *          - ubicacion
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      -   in: path
 *          name: id
 *          description: id de la ubicacion a obtener
 *          required: true
 *          type: integer
 *      responses:
 *        "200":
 *          description: Ubicacion obtenida exitosamente
 *          schema:
 *              type: object
 *              properties:
 *                  IdUbicacion:
 *                      type: integer
 *                  UbicacionD:
 *                      type: string
 *        "404":
 *          description: No existe una ubicacion con ese id
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.get('/ubicacion/:id', UbicacionController.getUbicacion);

/**
 * @swagger
 * path:
 *  /ubicacion/{id}:
 *    put:
 *      summary: Actualzar una ubicacion
 *      tags:
 *          - ubicacion
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      -   in: path
 *          name: id
 *          description: id de la ubicacion a actualizar
 *          required: true
 *          type: integer
 *      -   in: body
 *          name: ubicacion
 *          required: true
 *          description: La ubicacion a actualizar
 *          schema:
 *              type: object
 *              properties:
 *                  UbicacionD:
 *                     type: string
 *      responses:
 *        "200":
 *          description: Ubicacion actualizada exitosamente
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.put('/ubicacion/:id', UbicacionController.updateUbicacion);

/**
 * @swagger
 * path:
 *  /ubicacion/{id}:
 *    delete:
 *      summary: Eliminar una ubicacion
 *      tags:
 *          - ubicacion
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      -   in: path
 *          name: id
 *          description: id de la ubicacion a eliminar
 *          required: true
 *          type: integer
 *      responses:
 *        "200":
 *          description: Ubicacion eliminada exitosamente
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.delete('/ubicacion/:id', UbicacionController.deleteUbicacion);

module.exports = router;
