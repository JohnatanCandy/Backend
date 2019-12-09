const express = require('express');
const BienController = require('../controllers/bienmunicipio');

const router = express.Router();

/**
 * @swagger
 * path:
 *  /bienes:
 *    post:
 *      summary: Crear un nuevo bien
 *      tags:
 *          - bien
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: body
 *          name: bien
 *          required: true
 *          description: El bien a crear
 *          schema:
 *              type: object
 *              properties:
 *                  IdUbicacion:
 *                      type: number
 *                  IdClasificacion:
 *                      type: number
 *                  IdEstado:
 *                      type: number
 *                  Responsable:
 *                      type: number
 *                  Calificacion:
 *                      type: string
 *                  Precio:
 *                      type: number
 *      responses:
 *        "200":
 *          description: Bien creado exitosamente
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.post('/bienes/', BienController.createBien);

/**
 * @swagger
 * path:
 *  /bienes:
 *    get:
 *      summary: Obtener una lista de todos los bienes
 *      tags:
 *          - bien
 *      consumes:
 *          - application/json
 *      responses:
 *        "200":
 *          description: Bienes obtenidos exitosamente
 *          schema:
 *              type: array
 *              items:
 *                  properties:
 *                      IdBien:
 *                          type: integer
 *                      UbicacionD:
 *                          type: string
 *                      ClasificacionD:
 *                          type: string
 *                      EstadoD:
 *                          type: string
 *                      Responsable:
 *                          type: integer
 *                      Calificacion:
 *                          type: string
 *                      Precio:
 *                          type: integer
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.get('/bienes/', BienController.getBienes);
/**
 * @swagger
 * path:
 *  /bien/{id}:
 *    get:
 *      summary: Obtener detalles de un bien
 *      tags:
 *          - bien
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: path
 *          name: id
 *          description: id del bien a obtener
 *          required: true
 *          type: integer
 *      responses:
 *        "200":
 *          description: Bien obtenido exitosamente
 *          schema:
 *              type: object
 *              properties:
 *                  IdBien:
 *                      type: integer
 *                  UbicacionD:
 *                      type: string
 *                  ClasificacionD:
 *                      type: string
 *                  EstadoD:
 *                      type: string
 *                  Responsable:
 *                      type: integer
 *                  Calificacion:
 *                      type: string
 *                  Precio:
 *                      type: integer
 *        "404":
 *          description: No existe un bien con ese id
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.get('/bien/:id', BienController.getBien);

/**
 * @swagger
 * path:
 *  /bien/{id}:
 *    put:
 *      summary: Actualzar un bien
 *      tags:
 *          - bien
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: path
 *          name: id
 *          description: id del bien a actualizar
 *          required: true
 *          type: integer
 *      -   in: body
 *          name: bien
 *          required: true
 *          description: El bien a actualizar
 *          schema:
 *              type: object
 *              properties:
 *                  IdUbicacion:
 *                      type: number
 *                  IdClasificacion:
 *                      type: number
 *                  IdEstado:
 *                      type: number
 *                  Responsable:
 *                      type: number
 *                  Calificacion:
 *                     type: string
 *                  Precio:
 *                      type: number
 *      responses:
 *        "200":
 *          description: Bien actualizado exitosamente
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.put('/bien/:id', BienController.updateBien);

/**
 * @swagger
 * path:
 *  /bien/{id}:
 *    delete:
 *      summary: Eliminar un bien
 *      tags:
 *          - bien
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: path
 *          name: id
 *          description: id del bien a eliminar
 *          required: true
 *          type: integer
 *      responses:
 *        "200":
 *          description: Bien eliminado exitosamente
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.delete('/bien/:id', BienController.deleteBien);

module.exports = router;
