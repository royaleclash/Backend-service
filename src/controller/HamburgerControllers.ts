import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Hamburger } from "../entities/Hamburger";

const HamburgerRepository = AppDataSource.getRepository(Hamburger);

// GET - Obtener Todos los Productos
export const getAllHamburger = async(red: Request, res: Response) => {
  try {
    const Hamburger = await HamburgerRepository.find();
    res.json(Hamburger);
  } catch(error) {
    res.status(500).json({ message: "Error al obtener productos." });
  }
};

// GET by ID - Obetener Producto por ID
export const getHamburgerById = async(req: Request, res: Response) => {
  try {
    const Hamburger = await HamburgerRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if(Hamburger) {
      res.json(Hamburger);
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al obtener el producto." });
  }
};

// POST - Crear un nuevo Producto
export const createHamburger = async(req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    const hamburger = new Hamburger();
    hamburger.name = name;
    hamburger.description = description;
    hamburger.price = price;

    await HamburgerRepository.save(hamburger);
    res.status(201).json(hamburger);
  } catch(error) {
    res.status(500).json({ message: "Error al crear el producto." });
  }
};

// PUT - Actualizar un Producto existente
export const updateHamburger = async(req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    const Hamburger = await HamburgerRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if(Hamburger) {
      Hamburger.name = name ?? Hamburger.name;
      Hamburger.description = description ?? Hamburger.description;
      Hamburger.price = price ?? Hamburger.price;

      await HamburgerRepository.save(Hamburger);
      res.json(Hamburger);
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al actualizar el producto." });
  }
};

// DELETE - Borrar un Producto
export const deleteHamburger = async(req: Request, res: Response) => {
  try {
    const Hamburger = await HamburgerRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if (Hamburger) {
      await HamburgerRepository.remove(Hamburger);
      res.json({ message: "Producto eliminado." });
    } else {
      res.status(404).json({ message: "Producto no encontrado." });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al eliminar el producto." });
  }
};