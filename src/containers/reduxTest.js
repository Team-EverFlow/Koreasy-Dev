import React, { PureComponent } from 'react';
 
import * as actions from '../actions';
import { connect } from 'react-redux';
 
import Setting from '../components/dump';//컴포넌트로 내보내기
 
class App extends PureComponent {
    render(){
        const {onCreate,onUpdate} = this.prop;
        return (
            <div className="App">
                <Setting 
                    onCreate={onCreate}
                    onUpdate={onUpdate}
                />
            </div>
        );
    }
}
 
//액션 생성 함수 준비
const mapToDispatch = (dispatch) =>({
    onCreate: (data)  => dispatch(actions._create(data)),
    onUpdate: (index) => dispatch(actions._update(index))
});
 
// 리덕스에 연결시키고 내보냅니다.
export default connect(null, mapToDispatch)(App);