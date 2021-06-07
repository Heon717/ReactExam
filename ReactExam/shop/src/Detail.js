import React , {useEffect, useState } from 'react';
import { useHistory ,useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let box = styled.div`
    padding : 20px;
`;

let headd = styled.h4`
    font-size : 25px;
`;

// Lifecycle Hook 문법
// class Detail2 extends React.Component {
//     componentDidMount() {
            // 생성될때 실행할 함수
//     }

//     componentWillUnmount() {
            // 사라질때 실행할 함수
//     }
// }



const Detail = (props) => {

    let [alert,setAlert] = useState(true);
    let [inpp,setInpp] = useState('');

    // 컴포넌트가 mount(시작) 되었을 때 ,update 될 때 특정코드를 실행할 수 있음
    // return 뒤에 쓰면 unmount(사라질때)될 때
    useEffect(()=>{
        let time = setTimeout(()=>{
           setAlert(false) },2000);
        return ()=>{
            clearTimeout(time);
        }
    },[alert]);

    let {id} = useParams();
    let history = useHistory();


    return (
      <div className="container">
        <box>
            <headd className="red">상세페이지</headd>
        </box>

        <input onChange={(e)=>{setInpp(e.target.value)}}/>
        {inpp}
        {
            alert === true 
            ?  <div className="my-alert">
                 <p>재고가 얼마 남지 않았어요</p>
               </div> 
            : null
        }

        <div className="row">
          <div className="col-md-6">
            <img src={"https://codingapple1.github.io/shop/shoes"+[id]+".jpg"} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}원</p>
            <button className="btn btn-danger">주문하기</button>
            <button className="btn btn-danger" onClick={()=>{history.goBack();}}>뒤로가기</button>
          </div>
        </div>
      </div> 
    )
}

export default Detail;