import {atom} from 'recoil';

export interface ContactDetail {
    id: number | null;
    name: string;
    deptNo: string;
    phone: string;
    mail: string;
    delYn:string;
}

export interface receiveData {
    id: number | null;
    name: string;
    deptName: string;
    phone: string;
    mail: string;
    delYn:string;
}


export const contactList = atom<receiveData[]>({
    key: 'contactList',
    default: []
});

export const sendContactList = atom<ContactDetail[]>({
    key: 'sendContactList',
    default: []
});

export const inputKeyword = atom<string>({
    key:'inputKeyword',
    default: ''
});

export const detailInfo = atom<ContactDetail>({
    key: 'detailInfo',
    default: {id: null, 
        name: '', deptNo: '01', phone: '', mail: '', delYn: 'N'}
});

export const getData = atom<receiveData>({
    key: 'getData',
    default: {id: null, 
        name: '', deptName: '', phone: '', mail: '', delYn: 'N'}
})

export const addDetail = atom<string>({
    key: 'addDetail',
    default: 'result'
})

