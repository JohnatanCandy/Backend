const express = require('express');
const EstadoController = require('../controllers/estado');

const router = express.Router();

/**
 * @swagger
 * path:
 *  /estados:
 *    post:
 *      summary: Crear un nuevo estado
 *      tags:
 *          - estado
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: body
 *          name: estado
 *          required: true
 *          description: El estado a crear
 *          schema:
 *              type: object
 *              properties:
 *                  EstadoD:
 *                      type: string
 *      responses:
 *        "200":
 *          description: Estado creado exitosamente
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.post('/estados', EstadoController.createEstado);

/**
 * @swagger
 * path:
 *  /estados:
 *    get:
 *      summary: Obtener una lista de todos los estados
 *      tags:
 *          - estado
 *      consumes:
 *          - application/json
 *      responses:
 *        "200":
 *          description: Estados obtenidos exitosamente
 *          schema:
 *              type: array
 *              items:
 *                  properties:
 *                      IdEstado:
 *                          type: integer
 *                      EstadoD:
 *                          type: string
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.get('/estados', EstadoController.getEstados);

/**
 * @swagger
 * path:
 *  /estado/{id}:
 *    get:
 *      summary: Obtener detalles de un estado
 *      tags:
 *          - estado
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: path
 *          name: id
 *          description: id del estado a obtener
 *          required: true
 *          type: integer
 *      responses:
 *        "200":
 *          description: Estado obtenido exitosamente
 *          schema:
 *              type: object
 *              properties:
 *                  IdEstado:
 *                      type: integer
 *                  EstadoD:
 *                      type: string
 *        "404":
 *          description: No existe un estado con ese id
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.get('/estado/:id', EstadoController.getEstado);

/**
 * @swagger
 * path:
 *  /estado/{id}:
 *    put:
 *      summary: Actualzar un estado
 *      tags:
 *          - estado
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: path
 *          name: id
 *          description: id del estado a actualizar
 *          required: true
 *          type: integer
 *      -   in: body
 *          name: estado
 *          required: true
 *          description: El estado a actualizar
 *          schema:
 *              type: object
 *              properties:
 *                  EstadoD:
 *                      type: string
 *      responses:
 *        "200":
 *          description: Estado actualizado exitosamente
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.put('/estado/:id', EstadoController.updateEstado);

/**
 * @swagger
 * path:
 *  /estado/{id}:
 *    delete:
 *      summary: Eliminar un estado
 *      tags:
 *          - estado
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: path
 *          name: id
 *          description: id del estado a eliminar
 *          required: true
 *          type: integer
 *      responses:
 *        "200":
 *          description: Estado eliminado exitosamente
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.delete('/estado/:id', EstadoController.deleteEstado);

module.exports = router;
