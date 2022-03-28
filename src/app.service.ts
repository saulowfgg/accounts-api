import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { createReadStream } from 'fs';
import { createInterface } from 'readline';
import { Account, AccountDocument } from './schemas/account.schema';
import { AccountDto } from './dto/account.dto';

@Injectable()
export class AppService {

  constructor(@InjectModel(Account.name) private accountModel: Model<AccountDocument>) {}

  saveDocs(): any {
    const result: any = this.processLineByLine();
    return result ;
  }

  async processLineByLine() {
    const accounts: any = [];
    const fileStream = createReadStream('./accounts.txt');
  
    const rl = createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
  
    for await (const line of rl) {
      const newLine = line.split(" | ");
      const obj: any = {};

      for (let i = 0; i < newLine.length; i++) {
        if (i == 0) {
          obj['Username'] = newLine[i].split(":")[0];
          obj['Password'] = newLine[i].split(":")[1];
        }
        else {
          const key: string = newLine[i].split(" = ")[0];
          const value = newLine[i].split(" = ")[1];

          obj[key] = value;
        }
      }
      const account = new AccountDto(obj);

      const result = this.create(account);

      console.log(result);

      accounts.push(account);

    }

    return accounts;
  }

  async create(accountDto: AccountDto): Promise<Account> {
    const createdAccount = new this.accountModel(accountDto);
    return createdAccount.save();
  }

  async findAll(filters?: any): Promise<Account[]> {
    return filters ? this.accountModel.find(filters).exec() : this.accountModel.find().exec();
  }

}
