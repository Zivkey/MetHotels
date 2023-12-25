export class Room {
    constructor(
      public number: number,
      public type: string,
      public floor: number,
      public price: number,
      public additionalServices : AdditionalServices
    ) {}
  }

  export interface AdditionalServices {
    airConditioning : boolean;
    miniBar: boolean;
    sauna: boolean;
  }