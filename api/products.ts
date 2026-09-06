import type { Request, Response } from 'express';
import { products } from '../backend/data.js';

export default function handler(
    _request: Request,
    response: Response
) {
    response.status(200).json(products);
}