import React,{useState} from 'react';
import './index.css';

const App = () => {

  let [num,setNum] = useState(0);
  let [title,setTitle ] = useState(['롤 스킨 추천','오늘의 맛집','별자리 운세']);
  let today = [ '6월 1일','6월 2일', '6월 3일'];

  let color = { color : 'yellow' , fontSize : '30px'}
  let [like,setLike] = useState([0,0,0]);

  // let aa = (i) => {
  //   let ll = [...like];
  //   ll[i] = setLike(ll+1);
  //   return ll;
  // }
  const titlechange = () => {
    let newtitle = [...title];
    newtitle[0] = '여자코트 추천'; 
    setTitle(newtitle);
  }

  const bb = () => {
    let newArray = [...title];
    newArray.sort();
    setTitle(newArray);
  }

  const re = () => {
    setTitle(['롤 스킨 추천','오늘의 맛집','별자리 운세']);
  }

  let [modal,setModal] = useState(false);
  const changemodal = () => {
    setModal(true);
    if(modal == true) {
      setModal(false);
    }
  }

  let [inp,setInp] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <div style={color}>개발 Blog</div> 
      </div>
      <div>
        <button onClick={re}>원래대로</button>
        <button onClick={titlechange}>수정버튼</button>
        <button onClick={bb}>정렬버튼</button>
      </div>
      {
        title.map((e,i)=> {
          return (
            <div className="list" key={i}>
              <h3 onClick={()=> {setNum(i)}}>{e} <span>🧡</span>{like[i]}</h3>
              <p>6월 1일</p>
              <hr/>
            </div>
          )
        })
      }
      <div className="publish">
        {inp}
        <input onChange={(e)=>{setInp(e.target.value)}}/>
        <button onClick={()=>{
          let tit = [...title];
          tit.unshift(inp);
          setTitle(tit)}
          }>저장</button>
      </div>
      <Profile/>
  
      <button onClick={changemodal}>열고닫기</button>
      {
        modal === true ? <Modal tt={title} td={today} num={num}/> : null
      }
    </div>
    );
  }

  const Modal = (props) => {
    return (
      <div className="list">
      <h3>제목 {props.tt[props.num]}</h3>
      <p>내용</p>
      <p>{props.td[0]}</p>
      <hr/>
    </div>
    )
  }

  class Profile extends React.Component {
    constructor() {
      super();
      this.state = { name : 'Kim' , age : 30}
    }

    changeName = () => {
      this.setState({name:'Park'})
    }

    render() {
      return (
        <div>
          <h3>프로필입니다.</h3>
          <p>저는 {this.state.name} 입니다.</p>
          <button onClick={this.changeName}>이름</button>
        </div>
      )
    }
  }

export default App;
