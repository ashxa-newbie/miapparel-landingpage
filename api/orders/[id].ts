import type { Request, Response } from 'express';
import { orders } from '../../backend/data.js';

export default function handler(
  request: Request,
  response: Response
) {
  const idParameter = request.query.id;

  const rawId = Array.isArray(idParameter)
    ? idParameter[0]
    : idParameter;

  const normalizedId = rawId
    ?.trim()
    .toUpperCase();

  if (!normalizedId) {
    return response.status(400).json({
      found: false,
      error: 'Nomor pesanan harus diisi',
    });
  }

  const cleanId = normalizedId.replace(
    /[^A-Z0-9]/g,
    ''
  );

  const order = orders.find((item) => {
    const originalOrderId = item.orderId.toUpperCase();

    const cleanedOrderId = originalOrderId.replace(
      /[^A-Z0-9]/g,
      ''
    );

    return (
      originalOrderId === normalizedId ||
      cleanedOrderId === cleanId
    );
  });

  if (!order) {
    return response.status(404).json({
      found: false,
      message: `Nomor pesanan "${rawId}" tidak ditemukan dalam sistem produksi aktif. Silakan periksa kembali atau hubungi admin kami.`,
    });
  }

  return response.status(200).json({
    found: true,
    order,
  });
}