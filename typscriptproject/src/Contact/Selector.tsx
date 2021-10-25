import {selector} from 'recoil';
import {contactList, inputKeyword, getData, addDetail, receiveData, ContactDetail, detailInfo} from './Atom';

export const searchList = selector<receiveData[]>({
    key: 'searchList',
    get: ({get}) => {
        const list = get(contactList);
        const keyword = get(inputKeyword);

        if(keyword === ''){
            return list;
        }else {
            return list.filter(member => member.name.includes(keyword));
        }
    }
})

export const returnInfo = selector<receiveData>({
    key: 'returnInfo',
    get: ({get}) => {
        const gInfo = get(getData);
        return gInfo;
    }
})

export const sendInfo = selector<ContactDetail>({
    key: 'sendInfo',
    get: ({get}) => {
        const lInfo = get(detailInfo);
        return lInfo;
    }
})

export const addViewChange = selector<string>({
    key: 'addViewChange',
    get: ({get}) => {
        const vCh = get(addDetail);
        return vCh;
    }
})

