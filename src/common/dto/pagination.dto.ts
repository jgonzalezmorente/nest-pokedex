import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {

    @IsOptional()
    @IsNumber()
    @IsPositive()
    limit?: number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    offset: number;

    public getDescription() {
        return `Instance of PaginationDto with these values: limit: ${ this.limit }, ofset: ${ this.offset }`;
    }


}