import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type AccountDocument = Account & Document;

@Schema()
export class Account {
  @Prop()
  @ApiProperty({ example: 'kabutops', description: 'The username of the Account' })
  username: string;

  @Prop()
  @ApiProperty({ example: '1234Abc', description: 'The password of the Account' })
  password: string;

  @Prop()
  @ApiProperty({ example: 'BR1', description: 'The tagline of the Account' })
  tagLine: string;

  @Prop()
  @ApiProperty({ example: 'KabutoPS', description: 'The gamename/nickname of the Account' })
  gameName: string;

  @Prop()
  @ApiProperty({ example: 24, description: 'The level of the Account' })
  level: number;

  @Prop()
  @ApiProperty({ example: 12345678, description: 'The id of the Account' })
  accountId: number;

  @Prop()
  @ApiProperty({ example: 'bra', description: 'The country of the Account' })
  country: string;

  @Prop()
  @ApiProperty({ example: 'KabutoPS', description: 'The gamename/nickname of the Account' })
  nickName: string;

  @Prop()
  @ApiProperty({ example: false, description: 'Indicates whether the account email has been verified or not' })
  emailVerified: boolean;

  @Prop()
  @ApiProperty({ example: 'BR', description: 'The region/zone of the Account' })
  region: string;

  @Prop()
  @ApiProperty({ example: 'example@email.com', description: 'The email of the Account' })
  email: string;

  @Prop()
  @ApiProperty({ example: 0, description: 'The amount of valorant points in the account' })
  valorantPoint: number;

  @Prop()
  @ApiProperty({ example: 0, description: 'The amount of radiant points in the account' })
  radianitePoints: number;

  @Prop()
  @ApiProperty({ example: 136, description: 'The total number of games played on the account' })
  totalRecentGames: number;

  @Prop()
  @ApiProperty({ example: ['Passe 1', 'Passe 2'], description: 'The Account cosmetics list' })
  skins: string[];

  @Prop()
  @ApiProperty({ example: true, description: 'Indicates whether the account has been verified or not' })
  checked: boolean;
  
}

export const AccountSchema = SchemaFactory.createForClass(Account);