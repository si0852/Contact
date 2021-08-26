import './app.css';
import {useState} from 'react';
import { useSetRecoilState } from 'recoil';
import {inputKeyword,detailInfo,addDetail } from './Atom';

const Keyword = () => {

    const [inputValue, setInputValue] = useState('');
    const setKeyword = useSetRecoilState(inputKeyword);
    const setInfo = useSetRecoilState(detailInfo);
    const setAddChange = useSetRecoilState(addDetail);

    const onChange = (e:any) => {
        setInputValue(e.target.value);
        setKeyword(e.target.value);
        setAddChange('result');
        setInfo({id:0, name: '', department: '', phoneNumber: '', email: ''});
    }

    const onClick = () => {
        setAddChange('add');
    }

  
    return (
        <div className="search-box">
          <input type="text" className="inp-sch" placeholder="검색어를 입력하세요." value={inputValue} onChange={onChange}/>
          <button className="btn" onClick={onClick}>추가</button>
        </div>
    )
}

export default Keyword;