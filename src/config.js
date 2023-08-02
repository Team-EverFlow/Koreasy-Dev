// src/config.js
const BASE_URL = 'http://10.58.5.151:8000'
export const GET_PRODUCT_API = `${BASE_URL}/products`

// 사용하는 컴포넌트
import { GET_PRODUCT_API } from '../../../config.js';

// ...
// fetch(`${GET_PRODUCT_API}/5`).then(...).then(...);