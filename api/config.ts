import type { Request, Response } from 'express';
import { siteConfig } from '../backend/data';

export default function handler(
  _request: Request,
  response: Response
) {
  return response.status(200).json(siteConfig);
}