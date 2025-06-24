// User types
export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'admin' | 'contractor' | 'agent';
  company?: string;
  isActive: boolean;
}

// Auth types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  _id: string;
  name: string;
  email: string;
  role: string;
  token: string;
}

// Product types
export interface Product {
  _id: string;
  name: string;
  supplier: {
    _id: string;
    name: string;
    country: string;
  };
  category: string;
  subcategory?: string;
  description: string;
  specifications: {
    brand?: string;
    origin?: string;
    ingredients?: string[];
    allergens?: string[];
  };
  packaging: Array<{
    type: string;
    size: string;
    unit: string;
    price: number;
    moq: number;
  }>;
  certifications: {
    kosher?: boolean;
    organic?: boolean;
    halal?: boolean;
  };
  status: 'active' | 'inactive';
  images?: Array<{
    url: string;
    isPrimary: boolean;
  }>;
}

// RFQ types
export interface RFQ {
  _id: string;
  buyer: {
    _id: string;
    name: string;
  };
  title: string;
  referenceNumber: string;
  category: string;
  products: Array<{
    name: string;
    quantity: number;
    unit: string;
    requirements?: string;
  }>;
  status: 'draft' | 'active' | 'closed' | 'awarded';
  validity: {
    startDate: string;
    endDate: string;
  };
  createdAt: string;
}

// Order types
export interface Order {
  _id: string;
  orderNumber: string;
  buyer: {
    _id: string;
    name: string;
  };
  supplier: {
    _id: string;
    name: string;
  };
  items: Array<{
    product: string;
    name: string;
    quantity: number;
    unit: string;
    unitPrice: number;
    totalPrice: number;
  }>;
  status: 'draft' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'completed' | 'cancelled';
  totalAmount: number;
  createdAt: string;
}
