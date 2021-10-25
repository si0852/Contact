import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Member } from './entities/Member';

@Controller('contacts')
export class ContactsController {
    constructor(private contactsService: ContactsService) {}

    @Get()
    async Get() : Promise<any[]>{
        return this.contactsService.getContactList();
    }

    @Get('search/:keyword')
    async searchList(@Param('keyword') keyword: string) {
        return await this.contactsService.getSearchList(keyword);
    }

  
    @Post()
    async create(@Body() members: Member){
        return await this.contactsService.createContact(members);
    }

    @Put('delete/:id')
    async remove(@Param('id') id: number) {
        console.log("id", id)
        return this.contactsService.removeContact(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() members: Member) {
        console.log("id ", id);
        console.log("member ", members);
        return this.contactsService.updateContact(id, members);
    }
}
