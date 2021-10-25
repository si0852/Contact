import './app.css';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {returnInfo, } from './Selector';
import {addDetail, receiveData,  getData } from './Atom';

const Result = () => {
    const rDetailInfo:receiveData = useRecoilValue(returnInfo);
    const setVch = useSetRecoilState(addDetail);
    const setInfo = useSetRecoilState(getData);
    const updateClick = () => {
        setVch('updateview');
    }

    const deleteClick = async (data:receiveData) => {
        await fetch(`http://localhost:4000/contacts/delete/${data.id}`, {
            method: "PUT",
        }).then((response) => console.log(response));
        alert(data.name +"님이 삭제되었습니다.");
        setInfo({ id: null, 
            name: '', deptName: '', phone: '', mail: '', delYn: ''});
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
                    <li>부서: {rDetailInfo.deptName}</li>
                    <li>휴대폰: {rDetailInfo.phone}</li>
                    <li>메일: {rDetailInfo.mail}</li>
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