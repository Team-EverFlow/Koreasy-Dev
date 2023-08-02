import Reducer_setting from './reducer_setting';//state 초기값을 가져온다.
import * as tyeps from '../actions/actionTyeps'; //액션 코드로 가져온다.
import { combineReducers } from 'redux'; //다중 리듀서를 사용할때 리듀서를 넘겨주기 위한 용도

 
const root_reducer = {
    setting : Reducer_setting,
} 
 
 
function redux_settingData (state = root_reducer, action){ 
    //state는 reducer가 갖고 있는 state고 만약 없을시 초기값을 가져온다.
    //action은 dispatch함수로 connect를 통해서 들어 오게 된다.
 
    const {setting} = state;
 
    switch (action.type){//리듀서를 통해서 들어온 action 
        case tyeps._CREATE: //acionTyeps에서 구분
           
            // setState처럼 사용 할 부분
            return { setting :  //setting : 한 이유는 초기 setting을 했기에 변경 후에도 setting key를 유지하기 위함 
                {...setting}.concat(action.data)
            } 
        
        case tyeps._UPDATE: //acionTyeps에서 구분
            return { setting : setting.map( (key, i) => {
                    if(i === action.index){ //action index.js에서 지정한 index
                        return {...key, boolean:true}
                    }else{
                        return {...key};
                    }
                })
            }    
        default: return state; //action을 이용하지 않을때 기본 this.props.setting을 사용할 때 사용
    }
}
 
 
export default combineReducers({redux_settingData}); //다중으로 사용 되기 때문에 JSON타입 특성상 redux_settingData키로 값이 들어가기 때문에 this.propsredux_settingData.setting 가 된다.