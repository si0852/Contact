import './app.css';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {returnInfo, searchList} from './Selector';
import {addDetail, contactList, detailInfo } from './Atom';

const Result = () => {
    const rDetailInfo:any = useRecoilValue(returnInfo);
    const sList = useRecoilValue(searchList);
    const setVch = useSetRecoilState(addDetail);
    const setInfo = useSetRecoilState(detailInfo);
    const setContactList = useSetRecoilState(contactList);
    const updateClick = () => {
        setVch('update');
    }

    const deleteClick = (data:any) => {
       const result =  sList.filter((oldList) => {
            if(oldList.id !== rDetailInfo.id){
                return oldList;
            }
            return;
        })

        setContactList(result);
        alert(data.name +"님이 삭제되었습니다.");
        setInfo({id:0, name: '', department: '', phoneNumber: '', email: ''});
        setVch('result');
    }
    return (
        <div className="col left">
           <div className="details">
          
              {rDetailInfo.name === '' && 
              <p className="emptyset">정보가 없습니다.</p>}
              {rDetailInfo.name !== '' && 
                  <ul className="info">
                    <li>이름: {rDetailInfo.name}</li>
                    <li>부서: {rDetailInfo.department}</li>
                    <li>휴대폰: {rDetailInfo.phoneNumber}</li>
                    <li>메일: {rDetailInfo.email}</li>
                  </ul>}
                  {rDetailInfo.name !== '' && 
                     <p>---------------------------------</p>
                  }
                  {rDetailInfo.name !== '' &&    
                  <div className="InfoDiv">
                    <div className="InfoItemDivb">
                        <button className="btn2" onClick={() => deleteClick(rDetailInfo)}>삭제</button>
                    </div>
                    <div className="InfoItemDivb">
                        <button className="btn2" onClick={()=>updateClick()}>수정</button>
                    </div>
                  </div>
                  }  
            </div>

        </div>
    )
}

export default Result;