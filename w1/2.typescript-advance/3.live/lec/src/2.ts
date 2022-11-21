// generics
// a way of passing types to function along side paramters

// 1. string | number | boolean
// 2. any
// 3. arg type is our output type

const getIdentity = <T>(arg: T): T => {
  return arg;
};
let a: string = "Hello";
let b: number = 1;
let c: boolean = false;
getIdentity<string>(a);
getIdentity<number>(b);
getIdentity<boolean>(c);
getIdentity(undefined); // Error
getIdentity(null); // Okay

const useState = <A>(arg: A): [A, (a: A) => void] => {
  let v: A = arg;

  const setV = (newValue: A): void => {
    v = newValue;
  };

  return [v, setV];
};

const [count, setCount] = useState(0);
const [value, setValue] = useState("");
const [form, setForm] = useState({ id: 0, name: "", email: "", password: "" });
