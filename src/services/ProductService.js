import { ApiService } from './ApiService';

const endpoint = 'products';

export const ProductService = {
    list(){
        return ApiService.get(endpoint);
    },
    create(newProduct){
        return ApiService.post(endpoint, newProduct);
    },
    remove(productId){
        return ApiService.delete(endpoint, productId);
    }
}