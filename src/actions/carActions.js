import { ADD_FEATURE, REMOVE_FEATURE} from '../reducers/index'; 
export const removeFeature =feature=>{
    return{type:REMOVE_FEATURE,payload:feature}
}

export const buyItem =feature=>{
    return{type:ADD_FEATURE,payload:feature}
}