import { Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { Category } from "../entity/Category"
import {default as slugify} from 'slugify';

export class CategoryController {
    static async index(req: Request, res: Response) {
        const categoryRepository = AppDataSource.getRepository(Category)
        const categories = await categoryRepository.find()
        return res.status(200).json(categories)
    }

    static async create(req: Request, res: Response) {
        const { title, position, published } = req.body
        const category = new Category()
        category.title = title
        category.alias = slugify(title, {lower : true})
        category.position = position
        category.published = published
        category.createdBy = 'system'

        const categoryRepository = AppDataSource.getRepository(Category)
        await categoryRepository.save(category)

        return res
            .status(201)
            .json({ message: "Category created successfully", category })
    }

    static async read(req: Request, res: Response) {
        const { id } = req.params
        const categoryRepository = AppDataSource.getRepository(Category)
        const category = await categoryRepository.findOne({
            where: { id },
        })
        res.status(200).json(category)
    }

    static async update(req: Request, res: Response) {
        const { id } = req.params;
        const { title, position, published } = req.body
        const categoryRepository = AppDataSource.getRepository(Category);
        const category = await categoryRepository.findOne({
            where: { id },
        });
        category.title = title
        category.alias = slugify(title, {lower : true})
        category.position = position
        category.published = published
        category.updatedBy = 'system'
        await categoryRepository.save(category)
        res.status(200).json({ message: "updated", category })
    }

    static async patch(req: Request, res: Response) {
        const { id } = req.params;
        const { title, position, published } = req.body
        const categoryRepository = AppDataSource.getRepository(Category);
        const category = await categoryRepository.findOne({
            where: { id },
        });
        if (title != null) {
            category.title = title
            category.alias = slugify(title, {lower : true})
        }
        if (position != null) {
            category.position = position
        }
        if (published != null) {
            category.published = published
        }
        
        category.updatedBy = 'system'
        await categoryRepository.save(category)
        res.status(200).json({ message: "patched", category })
    }
    
    static async delete(req: Request, res: Response) {
        const { id } = req.params;
        const categoryRepository = AppDataSource.getRepository(Category)
        const category = await categoryRepository.findOne({
            where: { id }
        })
        if (!category) {
            res.status(404).json({ message: "Category not found" })
        }
        await categoryRepository.remove(category)
        res.status(200).json({ message: "deleted", category })
      }
}