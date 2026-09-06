import type { Request, Response } from 'express';
import { products } from '../backend/data';

export default function handler(
    _request: Request,
    response: Response
) {
    return response.status(200).json(products);
}