import './app.css';
import React, {useState} from 'react';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {returnInfo} from './Selector';
import {  addDetail, getData,receiveData, ContactDetail } from './Atom';


const UpdateDetailInfo = () => {
    const updateDetailInfo:receiveData = useRecoilValue(returnInfo);
    const setVch = useSetRecoilState(addDetail);
    const setInfo = useSetRecoilState(getData);
    const [updateDetail, setUpdateDetail] = useState<receiveData>(updateDetailInfo);
  
    const onChange = ({target:{value,name}}:React.ChangeEvent<HTMLInputElement>) => {
        setUpdateDetail({
            ...updateDetail,
            [name]: value
        })
    }

    const updateClick = async () => {
        const updateData= {
            name: updateDetail.name,
            deptNo: "01",
            phone: updateDetail.phone,
            mail: updateDetail.mail
        }
        await fetch(`http://localhost:4000/contacts/${updateDetail.id}`, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateData)
        }).then((response) => 
        {console.log(response);
            setInfo(updateDetail);
            alert('수정완료');
            setVch('result');});
      
    }


    return(
        <div className="col left">
           <div className="details">
               <div>
                <ul className="info">
                    <li>이름:  </li><input value={updateDetail.name} name="name" type="text" className="detailInfo" onChange={onChange}/>
                    <li>부서: </li> <input value={updateDetail.deptName} name="department" type="text" className="detailInfo" onChange={onChange}/>
                    <li>휴대폰:  </li><input value={updateDetail.phone} name="phoneNumber"type="text" className="detailInfo" onChange={onChange}/>
                    <li>메일: </li> <input value={updateDetail.mail} name="email" type="text" className="detailInfo" onChange={onChange}/>
                </ul>
                </div>
                <div className="detailDiv" >
                    <button className="btn" onClick={updateClick}>저장</button>
                </div>
            </div>
          
            
        </div>
    )
}

export default  UpdateDetailInfo