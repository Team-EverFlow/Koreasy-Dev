import * as types from './actionTyeps';
 
export const _create = () =>{
    return {
        type: types._CREATE
    }
}
 
export const _update = (index) =>{/*인자는 리듀서에서  처리 필요 시 추가 */
    return {
        type: types.UPDATE,
        index 
    }
}
