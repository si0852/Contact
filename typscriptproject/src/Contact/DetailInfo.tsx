import './app.css';
import React from 'react';
import { useRecoilValue, useSetRecoilState} from 'recoil';
import { sendInfo} from './Selector';
import {sendContactList, addDetail, ContactDetail, detailInfo, receiveData, getData} from './Atom';


const DetailInfo = () => {
    const setVch = useSetRecoilState(addDetail);
    const info = useRecoilValue(sendInfo);
    const setRDetail = useSetRecoilState<ContactDetail>(detailInfo);
    const setSDetail = useSetRecoilState<receiveData>(getData)
    const setContactList = useSetRecoilState(sendContactList);

  

    const onChange = ({target: {value,name}}:React.ChangeEvent<HTMLInputElement>) => {
       setRDetail({
           ...info,
        [name]: value
       });
    }

    const addClick = async () => {
       if(info.name === ''){
           alert("양식 입력해주세요")
       }else{
     
       
        setContactList((oldContactList) => [
            ...oldContactList,
            info
        ]);
        
        await fetch("http://localhost:4000/contacts", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        }).then((response) => console.log(response));
      

        setRDetail({
        "id": null,
        "name": "",
        "deptNo": "01",
        "phone": "",
        "mail": "",
        "delYn": "N"
        }) 
        setSDetail({
            "id": null,
            "name": "",
            "deptName": "",
            "phone": "",
            "mail": "",
            "delYn": "N"
            })
       }
       //alert("저장되었습니다.");
       setVch('result');
    }


    return(
        <div className="col left">
           <div className="details">
               <div>
                <ul className="info">
                    <li>이름:  </li><input name="name" type="text" className="detailInfo" onChange={onChange}/>
                    <li>부서: </li> <input name="department" type="text" className="detailInfo" />
                    <li>휴대폰:  </li><input name="phone"type="text" className="detailInfo" onChange={onChange}/>
                    <li>메일: </li> <input name="mail" type="text" className="detailInfo" onChange={onChange}/>
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