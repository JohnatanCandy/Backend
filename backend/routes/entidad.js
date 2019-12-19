const express = require('express');
const EntidadController = require('../controllers/entidad');

const router = express.Router();

/**
 * @swagger
 * path:
 *  /entidades:
 *    post:
 *      summary: Crear una nueva entidad
 *      tags:
 *          - entidad
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      -   in: body
 *          name: entidad
 *          required: true
 *          description: La entidad a crear
 *          schema:
 *              type: object
 *              properties:
 *                  EntidadD:
 *                      type: string
 *      responses:
 *        "200":
 *          description: Entidad creada exitosamente
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.post('/entidades', EntidadController.createEntidad);

/**
 * @swagger
 * path:
 *  /entidades:
 *    get:
 *      summary: Obtener una lista de todas las entidades
 *      tags:
 *          - entidad
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      responses:
 *        "200":
 *          description: Entidades obtenidas exitosamente
 *          schema:
 *              type: array
 *              items:
 *                  properties:
 *                      IdEntidad:
 *                          type: integer
 *                      EntidadD:
 *                          type: string
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.get('/entidades', EntidadController.getEntidades);

/**
 * @swagger
 * path:
 *  /entidad/{id}:
 *    get:
 *      summary: Obtener detalles de una entidad
 *      tags:
 *          - entidad
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      -   in: path
 *          name: id
 *          description: id de la entidad a obtener
 *          required: true
 *          type: integer
 *      responses:
 *        "200":
 *          description: Entidad obtenida exitosamente
 *          schema:
 *              type: object
 *              properties:
 *                  IdEntidad:
 *                      type: integer
 *                  EntidadD:
 *                      type: string
 *        "404":
 *          description: No existe una entidad con ese id
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.get('/entidad/:id', EntidadController.getEntidad);

/**
 * @swagger
 * path:
 *  /entidad/{id}:
 *    put:
 *      summary: Actualzar una entidad
 *      tags:
 *          - entidad
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      -   in: path
 *          name: id
 *          description: id de la entidad a actualizar
 *          required: true
 *          type: integer
 *      -   in: body
 *          name: entidad
 *          required: true
 *          description: La entidad a actualizar
 *          schema:
 *              type: object
 *              properties:
 *                  EntidadD:
 *                     type: string
 *      responses:
 *        "200":
 *          description: Entidad actualizada exitosamente
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.put('/entidad/:id', EntidadController.updateEntidad);

/**
 * @swagger
 * path:
 *  /entidad/{id}:
 *    delete:
 *      summary: Eliminar una entidad
 *      tags:
 *          - entidad
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      -   in: path
 *          name: id
 *          description: id de la entidad a eliminar
 *          required: true
 *          type: integer
 *      responses:
 *        "200":
 *          description: Entidad eliminada exitosamente
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.delete('/entidad/:id', EntidadController.deleteEntidad);

module.exports = router;
