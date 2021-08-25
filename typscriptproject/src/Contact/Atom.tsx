import {atom} from 'recoil';

export interface ContactDetail {
    name: string;
    department: string;
    phoneNumber: string;
    email: string;
}

export const contactList = atom<ContactDetail[]>({
    key: 'contactList',
    default: [
            {
            "name": "박시현",
            "department": "헬스케어솔루션사업본부",
            "phoneNumber": "010-1111-1111",
            "email": "sihyun@wegaho.com"
            },
            {
            "name": "임도희",
            "department": "헬스케어솔루션사업본부",
            "phoneNumber": "010-2222-2222",
            "email": "dohee@wegaho.com"
            },
            {
            "name": "이종현",
            "department": "헬스케어솔루션사업본부",
            "phoneNumber": "010-3333-3333",
            "email": "jonghyun@wegaho.com"
            },
            {
            "name": "조민상",
            "department": "헬스케어솔루션사업본부",
            "phoneNumber": "010-4444-4444",
            "email": "minsang@wegaho.com"
            },
            {
            "name": "윤서영",
            "department": "헬스케어솔루션사업본부",
            "phoneNumber": "010-5555-5555",
            "email": "seoyoung@wegaho.com"
            }
    ]
});

export const inputKeyword = atom<string>({
    key:'inputKeyword',
    default: ''
})

export const detailInfo = atom<ContactDetail>({
    key: 'detailInfo',
    default: {name: '', department: '', phoneNumber: '', email: ''}
})