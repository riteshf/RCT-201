// interface

// 99% to type

type Person = {
  id: number;
  name: string;
};

interface PersonX {
  id: number;
  name: string;
}

interface PersonX {
  age: number;
}

interface PersonX {
  address: string;
}

let p: PersonX = {
  id: 1,
};
