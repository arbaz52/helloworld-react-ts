
export interface Person {
  name: string;
  email: string;
  phone: string;
  gender: string;
  country: string;
  id?: string;
}


export interface PeopleContextInterface {
  people: Person[];
  addPerson: (person: Person) => Promise<any>;
  updatePerson: (id: number, person: Person) => Promise<any>;
  deletePerson: (id: number) => Promise<any>;
  [key: string]: any;
}