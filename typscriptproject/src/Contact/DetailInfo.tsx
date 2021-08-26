import './app.css';
import {useState} from 'react';
import { useRecoilValue, useSetRecoilState} from 'recoil';
import {searchList} from './Selector';
import {contactList, addDetail, ContactDetail} from './Atom';

const DetailInfo = () => {
    const setVch = useSetRecoilState(addDetail);
    const [detail, setDetail] = useState<ContactDetail>({
        "id": 0,
        "name": "",
        "department": "",
        "phoneNumber": "",
        "email": ""
    });
    const sList = useRecoilValue(searchList);
    const setContactList = useSetRecoilState(contactList);

    const onChange = ({target: {value,name}}:any) => {
       setDetail({
           ...detail,
        "id": sList.length+1,
        [name]: value
       })
    }

    const addClick = () => {
       if(detail.name === ''){
           alert("양식 입력해주세요")
       }else{
        setContactList((oldContactList) => [
            ...oldContactList,
            detail
        ])
        setDetail({
        "id": 0,
        "name": "",
        "department": "",
        "phoneNumber": "",
        "email": ""
        })
       }
       alert("저장되었습니다.");
       setVch('result');
    }

    return(
        <div className="col left">
           <div className="details">
               <div>
                <ul className="info">
                    <li>이름:  </li><input name="name" type="text" className="detailInfo" onChange={onChange}/>
                    <li>부서: </li> <input name="department" type="text" className="detailInfo" onChange={onChange}/>
                    <li>휴대폰:  </li><input name="phoneNumber"type="text" className="detailInfo" onChange={onChange}/>
                    <li>메일: </li> <input name="email" type="text" className="detailInfo" onChange={onChange}/>
                </ul>
                </div>
                <div className="detailDiv" >
                    <button className="btn" onClick={addClick}>저장</button>
                </div>
            </div>
          
            
        </div>
    )
}

export default DetailInfo;