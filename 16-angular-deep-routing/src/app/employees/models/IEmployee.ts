export interface IEmployee {
  gender : string,
  name : {
    title : string,
    first : string,
    last : string
  },
  location : {
    street: {
      number: number,
      name: string
    },
    city: string,
    state: string,
    country: string,
    postcode: string,
    coordinates: {
      latitude: string,
      longitude: string
    },
    timezone: {
      offset: string,
      description: string
    }
  },
  email : string,
  login : {
    uuid:string,
    username:string,
    password:string,
    salt:string,
    md5:string,
    sha1:string,
    sha256:string
  },
  dob:{
    date:string,
    age:number
  },
  registered:{
    date:string,
    age:number
  },
  phone:number,
  cell:number,
  id:{
    name:string,
    value:number
  },
  picture:{
    large:string,
    medium:string,
    thumbnail:string
  },
  nat:string
}