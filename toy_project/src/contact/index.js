import React,{useState} from 'react';
import './app.css';
import contactData from '../json/data.json'

const Contact = () => {
  const [user, setUser] = useState({});
  const [input, setInput] = useState("");
  const [keywordList, setKeyword] = useState([]);

  const contactClick = (data) => {
    setUser(data);
  }

  const keywordChange = (e) => {
  setUser({});
  setInput(e.target.value);
   const keyword = contactData.filter(data => data.name.includes(e.target.value));
   setKeyword(keyword)
  }
  return (
    <div className="container">
    <h1 className="subject">홍길동의 연락처</h1>
    <div className="contact-wrap">
      <div className="col left">
        <div className="search-box">
          <input type="text" className="inp-sch" placeholder="검색어를 입력하세요." onChange={keywordChange} />
        </div>
        <div className="contact-list">

          { (input !== "" ) ? 
           <ul>
           {
             keywordList.map((item, index) => {
               return(
                <li key={index}>
                  <button type="button" onClick={()=>contactClick(item)} >{item.name}</button>
                </li>
               )
               
             })
           }
         </ul> : 
         <ul>
         {
           contactData.map((item, index) => {
             return (
               <li key={index}>
                 <button type="button" onClick={()=>contactClick(item)} >{item.name}</button>
               </li>
             )
           })
         }
       </ul>
         }
         
        </div>
      </div>
      {user.name !== undefined && 
        <div className="col ">
          <div className="details">
            <ul className="info">
              <li>이름: {user.name}</li>
              <li>부서: {user.department}</li>
              <li>휴대폰: {user.phoneNumber}</li>
              <li>메일: {user.email}</li>
            </ul>
          </div>
        </div>
      }
      {user.name === undefined && 
        <div className="col left">
          <div className="details">
            <p className="emptyset">정보가 없습니다.</p>
          </div>
        </div>
      }
    </div>
  </div>
  )
}

export default Contact;

