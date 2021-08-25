import './app.css';
import {useRecoilValue} from 'recoil';
import {returnInfo} from './Selector';

const Result = () => {
    const detailInfo:any = useRecoilValue(returnInfo);
    return (
        <div className="col left">
           <div className="details">
          
              {detailInfo.name === '' && 
              <p className="emptyset">정보가 없습니다.</p>}
              {detailInfo.name !== '' && 
                  <ul className="info">
                    <li>이름: {detailInfo.name}</li>
                    <li>부서: {detailInfo.department}</li>
                    <li>휴대폰: {detailInfo.phoneNumber}</li>
                    <li>메일: {detailInfo.email}</li>
                  </ul>}
            </div>

        </div>
    )
}

export default Result;