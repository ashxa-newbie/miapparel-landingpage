import type { Request, Response } from 'express';
import { orders } from '../../backend/data.js';

export default function handler(
    _request: Request,
    response: Response
) {
    const samples = orders.map((order) => ({
        orderId: order.orderId,
        customerName: order.customerName,
        productName: order.productName,
        currentPhase: order.currentPhase,
        statusTitle: order.statusTitle,
    }));

    return response.status(200).json(samples);
}