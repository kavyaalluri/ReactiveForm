export class User{
    constructor(
    public name:string,
    public  pwd:string,
    public cpwd:string,
    public email:any,
    public mobile:number,
    public address:{
        city:string;
      street:string;
      state:string;
    }
    ){}
  }
  