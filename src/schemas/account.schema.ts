import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccountDocument = Account & Document;

@Schema()
export class Account {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  tagLine: string;

  @Prop()
  gameName: string;

  @Prop()
  level: number;

  @Prop()
  accountId: number;

  @Prop()
  country: string;

  @Prop()
  nickName: string;

  @Prop()
  emailVerified: boolean;

  @Prop()
  region: string;

  @Prop()
  email: string;

  @Prop()
  valorantPoint: number;

  @Prop()
  radianitePoints: number;

  @Prop()
  totalRecentGames: number;

  @Prop()
  skins: string[];

  @Prop()
  checked: boolean;
  
}

export const AccountSchema = SchemaFactory.createForClass(Account);