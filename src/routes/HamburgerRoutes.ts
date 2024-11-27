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
 *               - imgUrl
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               imgUrl:
 *                 type: string
 *     responses:
 *       201:
 *         description: Hamburguesa creada
 *       500:
 *         description: Error en el servidor
 */
HamburgerRoutes.post("/", createHamburger);

/**
 * @swagger
 * /api/Hamburguesa/{id}:
 *   put:
 *     summary: Actualizar una Hamburguesa existente
 *     tags: [Hamburger]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la Hamburguesa
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
 *               imgUrl:
 *                 type: string
 *     responses:
 *       200:
 *         description: Hamburguesa actualizada
 *       404:
 *         description: Hamburguesa no encontrada
 *       500:
 *         description: Error en el servidor
 */
HamburgerRoutes.put("/:id", updateHamburger);

export default HamburgerRoutes;