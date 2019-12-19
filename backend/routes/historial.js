const express = require('express');
const TransaccionController = require('../controllers/historial');

const router = express.Router();

/**
 * @swagger
 * path:
 *  /transacciones:
 *    post:
 *      summary: Crear una nueva transaccion
 *      tags:
 *          - transaccion
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      -   in: body
 *          name: transaccion
 *          required: true
 *          description: La transaccion a crear
 *          schema:
 *              type: object
 *              properties:
 *                  IdBien:
 *                      type: string
 *                  IdUsuario:
 *                      type: number
 *                  FechaTransaccion:
 *                      type: string
 *
 *      responses:
 *        "200":
 *          description: Transaccion creada exitosamente
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.post('/transacciones', TransaccionController.createTransaccion);

/**
 * @swagger
 * path:
 *  /transacciones:
 *    get:
 *      summary: Obtener una lista de todas las transacciones
 *      tags:
 *          - transaccion
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      responses:
 *        "200":
 *          description: Transacciones obtenidas exitosamente
 *          schema:
 *              type: array
 *              items:
 *                  properties:
 *                      NroTransaccion:
 *                          type: number
 *                      IdBien:
 *                          type: string
 *                      UbicacionD:
 *                          type: string
 *                      ClasificacionD:
 *                          type: string
 *                      CI:
 *                          type: number
 *                      Nombre:
 *                          type: string
 *                      FechaTransaccion:
 *                          type: string
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.get('/transacciones', TransaccionController.getTransacciones);

/**
 * @swagger
 * path:
 *  /transaccion/{id}:
 *    get:
 *      summary: Obtener detalles de una transaccion
 *      tags:
 *          - transaccion
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      -   in: path
 *          name: id
 *          description: id de la transaccion a obtener
 *          required: true
 *          type: integer
 *      responses:
 *        "200":
 *          description: Transaccion obtenida exitosamente
 *          schema:
 *              type: object
 *              properties:
 *                  NroTransaccion:
 *                      type: number
 *                  IdBien:
 *                      type: string
 *                  UbicacionD:
 *                      type: string
 *                  ClasificacionD:
 *                      type: string
 *                  CI:
 *                      type: number
 *                  Nombre:
 *                      type: string
 *                  FechaTransaccion:
 *                      type: string
 *        "404":
 *          description: No existe una transaccion con ese id
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.get('/transaccion/:id', TransaccionController.getTransaccion);

/**
 * @swagger
 * path:
 *  /transaccion/{id}:
 *    put:
 *      summary: Actualzar una transaccion
 *      tags:
 *          - transaccion
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      -   in: path
 *          name: id
 *          description: id de la transaccion a actualizar
 *          required: true
 *          type: integer
 *      -   in: body
 *          name: transaccion
 *          required: true
 *          description: La transaccion a actualizar
 *          schema:
 *              type: object
 *              properties:
 *                  IdBien:
 *                      type: string
 *                  IdUsuario:
 *                      type: number
 *                  FechaTransaccion:
 *                        type: string
 *      responses:
 *        "200":
 *          description: Transaccion actualizada exitosamente
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.put('/transaccion/:id', TransaccionController.updateTransaccion);

/**
 * @swagger
 * path:
 *  /transaccion/{id}:
 *    delete:
 *      summary: Eliminar una transaccion
 *      tags:
 *          - transaccion
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      -   in: path
 *          name: id
 *          description: id de la transaccion a eliminar
 *          required: true
 *          type: integer
 *      responses:
 *        "200":
 *          description: Transaccion eliminada exitosamente
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.delete('/transaccion/:id', TransaccionController.deleteTransaccion);

module.exports = router;
