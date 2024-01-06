export class Room {
  constructor(
    public number: number,
    public type: string,
    public floor: number,
    public price: number,
    public numberOfNights: number,
    public airConditioning: boolean,
    public miniBar: boolean,
    public sauna: boolean
  ) {}
}