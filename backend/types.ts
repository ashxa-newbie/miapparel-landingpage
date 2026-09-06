export type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
  materials: string[];
  customOptions: string[];
  minOrder: string;
  eta: string;
  sizes: string[];
  price: string;
};

export type ProductionPhase = 'queue' | 'printing' | 'sewing' | 'shipping' | 'completed';

export interface OrderTracking {
  orderId: string;
  customerName: string;
  teamName?: string;
  productName: string;
  quantity: number;
  orderDate: string;
  estimatedCompletion: string;
  currentPhase: ProductionPhase;
  phasePercentage: number;
  statusTitle: string;
  notes: string;
  details: {
    material: string;
    model: string;
    collar: string;
    sleeve: string;
  };
  timeline: {
    phase: ProductionPhase;
    title: string;
    date: string;
    completed: boolean;
    current: boolean;
    description: string;
  }[];
}
