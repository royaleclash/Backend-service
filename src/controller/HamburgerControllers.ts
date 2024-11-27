import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Hamburger } from "../entities/Hamburger";

const HamburgerRepository = AppDataSource.getRepository(Hamburger);

// GET - Obtener Todas las hamburguesas
export const getAllHamburger = async(red: Request, res: Response) => {
  try {
    const Hamburger = await HamburgerRepository.find();
    res.json(Hamburger);
  } catch(error) {
    res.status(500).json({ message: "Error al obtener una Hamburguesa." });
  }
};

// GET by ID - Obetener hamburguesas por ID.
export const getHamburgerById = async(req: Request, res: Response) => {
  try {
    const Hamburger = await HamburgerRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if(Hamburger) {
      res.json(Hamburger);
    } else {
      res.status(404).json({ message: "Hamburguesa no encontrada" });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al obtener una Hamburguesa." });
  }
};

// POST - Crear una nueva Hamburguesa 
export const createHamburger = async(req: Request, res: Response) => {
  try {
    const { name, description, price, imgUrl } = req.body;
    const hamburger = new Hamburger();
    hamburger.name = name;
    hamburger.description = description;
    hamburger.price = price;
    hamburger.imgUrl = imgUrl;
    await HamburgerRepository.save(hamburger);
    res.status(201).json(hamburger);
  } catch(error) {
    res.status(500).json({
      message: "Error al crear una Hamburguesa."
    });
  }
};

// Actualizar un producto existente
export const updateHamburger = async(req: Request, res: Response) => {
  try {
    const { name, description, price, imgUrl } = req.body; 
    
    // Buscamos el producto para actualizarlo
    const Hamburger = await HamburgerRepository.findOneBy({
      id: parseInt(req.params.id)
    });

    // Validamos que product tenga información
    if (Hamburger) {
      Hamburger.name = name ?? Hamburger.name;
      Hamburger.description = description ?? Hamburger.description;
      Hamburger.price = price ?? Hamburger.price;
      Hamburger.imgUrl = imgUrl ?? Hamburger.imgUrl; 
      await HamburgerRepository.save(Hamburger); 
      res.json(Hamburger);
    } else {
      res.status(404).json({
        message: "No se encontró la Hamburgesa."
      });
    }
  } catch(error) {
    res.status(500).json({
      message: "Error al actualizar la Hamburguesa."
    });
  }
};

// DELETE - Borrar una Hamburguesa
export const deleteHamburger = async(req: Request, res: Response) => {
  try {
    const Hamburger = await HamburgerRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if (Hamburger) {
      await HamburgerRepository.remove(Hamburger);
      res.json({ message: "Hamburguesa eliminada." });
    } else {
      res.status(404).json({ message: "Hamburguesa no encontrada." });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al eliminar el producto." });
  }
};