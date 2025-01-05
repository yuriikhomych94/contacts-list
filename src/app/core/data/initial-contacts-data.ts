import { Contact } from '../../contacts/types/contact';

export const ContactsData: Contact[] = [
  {
    id: '1',
    username: 'Yurii',
    lastname: 'Khomych',
    emailAddress: 'khomych@g.com',
    phone: '380981234567',
    birthday: { day: 18, month: 12, year: 2003 },
    address: { city: 'Lviv', region: 'Lviv', state: 'Ukraine', street: 'Zelena 23' }
  },
  {
    id: '2',
    username: 'Vasul',
    lastname: 'Salomon',
    emailAddress: 'salomon@g.com',
    phone: '380981234568',
    birthday: { day: 23, month: 1, year: 1999 },
    address: { city: 'Odesa', region: 'Odesa', state: 'Ukraine', street: 'Morska 1' }
  },
  {
    id: '3',
    username: 'Andrii',
    lastname: 'Vint',
    emailAddress: 'vint@g.com',
    phone: '380981234563',
    birthday: { day: 13, month: 3, year: 1994 },
    address: { city: 'Lutsk', region: 'Volyn', state: 'Ukraine', street: 'Nezalezhnosti 55' }
  },
  {
    id: '4',
    username: 'Anastasia',
    lastname: 'Persha',
    emailAddress: 'persha@g.com',
    phone: '380981234562',
    birthday: { day: 17, month: 11, year: 2001 },
    address: { city: 'Drogobych', region: 'Lviv', state: 'Ukraine', street: 'Gryshevskoho 124' }
  },
  {
    id: '5',
    username: 'Kateryna',
    lastname: 'Novak',
    emailAddress: 'movak@g.com',
    phone: '380981234561',
    birthday: { day: 27, month: 5, year: 2007 },
    address: { city: 'Stryi', region: 'Lviv', state: 'Ukraine', street: 'Mazepy 10' }
  },
  {
    id: '6',
    username: 'Volodumyr',
    lastname: 'Tymchuk',
    emailAddress: 'ymchuk@g.com',
    phone: '380981334564',
    birthday: { day: 25, month: 8, year: 2009 },
    address: { city: 'Kyiv', region: 'Kyiv', state: 'Ukraine', street: 'Svobody 1' }
  },
];
