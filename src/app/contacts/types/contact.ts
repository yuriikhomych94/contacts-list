export interface Contact {
  id: string;
  username: string;
  lastname: string;
  phone: string;
  birthday: Birthday;
  emailAddress: string;
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  region: string;
  state: string;
}

export interface Birthday {
  day: number;
  month: number;
  year: number;
}
