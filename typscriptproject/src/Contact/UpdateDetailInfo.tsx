import './app.css';
import {useState} from 'react';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {returnInfo, searchList} from './Selector';
import { contactList, addDetail, detailInfo, ContactDetail } from './Atom';


const UpdateDetailInfo = () => {
    const updateDetailInfo:ContactDetail = useRecoilValue(returnInfo);
    const sList = useRecoilValue(searchList);
    const setVch = useSetRecoilState(addDetail);
    const setInfo = useSetRecoilState(detailInfo);
    const setContactList = useSetRecoilState(contactList);
    const [updateDetail, setUpdateDetail] = useState<ContactDetail>(updateDetailInfo);

   
    const onChange = ({target:{value,name}}:any) => {
        setUpdateDetail({
            ...updateDetail,
            [name]: value
        })
    }

    const updateClick = () => {
        const updateList = sList.map((oldList) => {
            if(oldList.id === updateDetail.id){
                return updateDetail;
            }
            return oldList;
        });
        setContactList(updateList);
        setInfo(updateDetail);
        alert('수정완료');
        setVch('result');
    }


    return(
        <div className="col left">
           <div className="details">
               <div>
                <ul className="info">
                    <li>이름:  </li><input value={updateDetail.name} name="name" type="text" className="detailInfo" onChange={onChange}/>
                    <li>부서: </li> <input value={updateDetail.department} name="department" type="text" className="detailInfo" onChange={onChange}/>
                    <li>휴대폰:  </li><input value={updateDetail.phoneNumber} name="phoneNumber"type="text" className="detailInfo" onChange={onChange}/>
                    <li>메일: </li> <input value={updateDetail.email} name="email" type="text" className="detailInfo" onChange={onChange}/>
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