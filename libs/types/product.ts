import { ProductCollection, ProductSize, ProductStatus } from '../enums/product.enum';
import { CartItem } from './search';

export interface Product {
	_id: string;
	productStatus: ProductStatus;
	productCollection: ProductCollection;
	productName: string;
	productPrice: number;
	productLeftCount: number;
	productSize: ProductSize;
	productVolume: Number;
	productDesc?: string;
	productImages: string[];
	productViews: number;
	onAdd: (item: CartItem) => void;
	createdAt: Date;
	updatedAt: Date;
}

export interface ProductInquiry {
	order: string;
	page: number;
	limit: number;
	productCollection?: ProductCollection;
	search?: string;
}
