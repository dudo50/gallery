import { IsNotEmpty } from 'class-validator';

export class MetaDto {
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  userID: string;
}