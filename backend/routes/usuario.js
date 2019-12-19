const express = require('express');
const UsuarioController = require('../controllers/usuario');

const router = express.Router();

/**
 * @swagger
 * path:
 *  /usuarios:
 *    post:
 *      summary: Crear un nuevo usuario
 *      tags:
 *          - usuario
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      -   in: body
 *          name: usuario
 *          required: true
 *          description: El usuario a crear
 *          schema:
 *              type: object
 *              properties:
 *                  CI:
 *                      type: number
 *                  Nombre:
 *                      type: string
 *                  Contrasena:
 *                      type: string
 *                  IdEntidad:
 *                      type: number
 *                  TipoUsuario:
 *                      type: number
 *      responses:
 *        "200":
 *          description: Usuario creado exitosamente
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.post('/usuarios', UsuarioController.createUsuario);

/**
 * @swagger
 * path:
 *  /usuarios:
 *    get:
 *      summary: Obtener una lista de todos los usuarios
 *      tags:
 *          - usuario
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      responses:
 *        "200":
 *          description: Usuarios obtenidos exitosamente
 *          schema:
 *              type: array
 *              items:
 *                  properties:
 *                      CI:
 *                          type: integer
 *                      Nombre:
 *                          type: string
 *                      Contrasena:
 *                          type: string
 *                      EntidadD:
 *                          type: string
 *                      TipoUsuario:
 *                          type: number
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.get('/usuarios', UsuarioController.getUsuarios);

/**
 * @swagger
 * path:
 *  /usuario/{id}:
 *    get:
 *      summary: Obtener detalles de un usuario
 *      tags:
 *          - usuario
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      -   in: path
 *          name: id
 *          description: id del usuario a obtener
 *          required: true
 *          type: integer
 *      responses:
 *        "200":
 *          description: Usuario obtenido exitosamente
 *          schema:
 *              type: object
 *              properties:
 *                  CI:
 *                      type: integer
 *                  Nombre:
    *                   type: string
 *                  Contrasena:
 *                      type: string
 *                  EntidadD:
 *                      type: string
 *                  TipoUsuario:
 *                      type: number
 *        "404":
 *          description: No existe un usuario con ese id
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.get('/usuario/:id', UsuarioController.getUsuario);

/**
 * @swagger
 * path:
 *  /usuario/{id}:
 *    put:
 *      summary: Actualzar un usuario
 *      tags:
 *          - usuario
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      -   in: path
 *          name: id
 *          description: id del usuario a actualizar
 *          required: true
 *          type: integer
 *      -   in: body
 *          name: usuario
 *          required: true
 *          description: El usuario a actualizar
 *          schema:
 *              type: object
 *              properties:
 *                  CI:
 *                      type: integer
 *                  Nombre:
 *                      type: string
 *                  Contrasena:
 *                      type: string
 *                  IdEntidad:
 *                      type: number
 *                  TipoUsuario:
 *                      type: number
 *      responses:
 *        "200":
 *          description: Usuario actualizado exitosamente
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.put('/usuario/:id', UsuarioController.updateUsuario);

/**
 * @swagger
 * path:
 *  /usuario/{id}:
 *    delete:
 *      summary: Eliminar un usuario
 *      tags:
 *          - usuario
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: header
 *          name: Authorization
 *          required: true
 *          type: string
 *      -   in: path
 *          name: id
 *          description: id del usuario a eliminar
 *          required: true
 *          type: integer
 *      responses:
 *        "200":
 *          description: Usuario eliminado exitosamente
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.delete('/usuario/:id', UsuarioController.deleteUsuario);

/**
 * @swagger
 * path:
 *  /usuario/token:
 *    post:
 *      summary: Obtener token
 *      tags:
 *          - usuario
 *      consumes:
 *          - application/json
 *      parameters:
 *      -   in: body
 *          name: credenciales
 *          required: true
 *          description: Credenciales del Uusario
 *          schema:
 *              type: object
 *              properties:
 *                  CI:
 *                      type: string
 *                  Contrasena:
 *                      type: string
 *      responses:
 *        "200":
 *          description: Token obtenido correctamente
 *          schema:
 *              type: array
 *              items:
 *                  properties:
 *                      Token:
 *                          type: string
 *        "404":
 *          description: Error al realizar la consulta
 *        "500":
 *          description: Error de conexion con la base de datos
 */
router.post('/usuario/token', UsuarioController.getToken);

module.exports = router;
