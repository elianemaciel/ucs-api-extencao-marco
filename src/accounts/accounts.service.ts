import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountsService {
    constructor(
    ) {}
  
    create(conta: any)  {
        return "Objeto criado"
    }
  
    findAll()  {
        return "Objeto encontrado"
    }
  
    findOne(id: number)  {
        return "Objeto encontrado"
    }
  
    async update(id: number, conta: any)  {
        return "Objeto editado"
    }
  
    async remove(id: number)  {
        return "Objeto removido"
    }
}
