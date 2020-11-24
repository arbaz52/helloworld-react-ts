
export interface Person {
  name: string;
  email: string;
  phone: string;
  gender: string;
  country: string;
}


export interface PeopleContextInterface {
  people: Person[];
  addPerson: (person: Person) => void;
  updatePerson: (id: number, person: Person) => void;
  deletePerson: (id: number) => void;
}