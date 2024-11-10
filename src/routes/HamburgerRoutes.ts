import { Router } from "express";
import {
  getAllHamburger,
  getHamburgerById,
  createHamburger,
  updateHamburger,
  deleteHamburger,
} from "../controller/HamburgerControllers"
const HamburgerRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Hamburger
 *   description: CRUD relacionado con hamburguesas
 */

/**
 * @swagger
 * /api/Hamburger:
 *   get:
 *     summary: Obtener todas las hamburguesas
 *     tags: [Hamburger]
 *     responses:
 *       200:
 *         description: Lista de hamburguesas
 */
HamburgerRoutes.get("/", getAllHamburger);

/**
 * @swagger
 * /api/Hamburger/{id}:
 *   get:
 *     summary: Obtener una hamburguesa por ID
 *     tags: [Hamburger]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la hamburguesa
 *     responses:
 *       200:
 *         description: Detalles de la hamburguesa
 *       404:
 *         description: Hamburguesa no encontrada
 */
HamburgerRoutes.get("/:id", getHamburgerById);

/**
 * @swagger
 * /api/Hamburger:
 *   post:
 *     summary: Crear una nueva hamburguesa
 *     tags: [Hamburger]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Hamburguesa creada
 *       500:
 *         description: Error en el servidor
 */
HamburgerRoutes.post("/", createHamburger);

/**
 * @swagger
 * /api/Hamburger/{id}:
 *   put:
 *     summary: Actualizar una hamburguesa existente
 *     tags: [Hamburger]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la hamburguesa
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Hamburguesa actualizada
 *       404:
 *         description: Hamburguesa no encontrada
 *       500:
 *         description: Error en el servidor
 */
HamburgerRoutes.put("/:id", updateHamburger);

/**
 * @swagger
 * /api/Hamburger/{id}:
 *   delete:
 *     summary: Eliminar una hamburguesa
 *     tags: [Hamburger]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la hamburguesa
 *     responses:
 *       200:
 *         description: Hamburguesa eliminada
 *       404:
 *         description: Hamburguesa no encontrada
 *       500:
 *         description: Error en el servidor
 */
HamburgerRoutes.delete("/:id", deleteHamburger);

export default HamburgerRoutes;