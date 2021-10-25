import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dept } from './entities/Dept';
import { Member } from './entities/Member';

@Injectable()
export class ContactsService {
    constructor(
        @InjectRepository(Member) private MemberRepository: Repository<Member>,
        @InjectRepository(Dept) private DeptRepository: Repository<Dept>,
    ){}

    async getContactList(): Promise<any[]> {
        const getContactList = await this.MemberRepository.createQueryBuilder('MEMBER')
        .select(
            `MEMBER.id,
             MEMBER.name,
             DEPT.deptName,
             MEMBER.phone,
             MEMBER.mail
            `,
        )
        .from(Dept, `DEPT`)
        .where(`MEMBER.deptNo = DEPT.deptNo`)
        .andWhere(`MEMBER.delYn = 'N'`)
        .orderBy(`MEMBER.id`, 'ASC')
        .getRawMany();

        //console.log('getContactList =', getContactList);
        return getContactList;
    }
    
    async getSearchList(keyword: string): Promise<any[]> {
        const getSearchList = await this.MemberRepository.createQueryBuilder('MEMBER')
        .select(
            `MEMBER.id,
            MEMBER.name,
            DEPT.deptName,
            MEMBER.phone,
            MEMBER.mail
           `,
        )
        .from(Dept, `DEPT`)
        .where(`MEMBER.delYn = 'N'`)
        .andWhere(`MEMBER.name like '%${keyword}%'`)
        .orderBy(`MEMBER.id`, 'ASC')
        .getRawMany();

        return getSearchList
    }

    async createContact(member: Member){
        return await this.MemberRepository.save(member)
    }

    async removeContact(id: number) {
        return await this.MemberRepository.createQueryBuilder().update(Member).set({delYn: "Y"}).where("id = :id", {id}).execute();
        //return await this.MemberRepository.delete({id});
    }

    async updateContact(id: number, member: Member) {
        return await this.MemberRepository.update(id,member);
    }

    
}
