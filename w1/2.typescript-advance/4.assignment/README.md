## Assignments

#### Problem

1. Create an interface for an object

- it should accept a title string
- it should accept a status boolean
- it should accept an id number

```cmd
npm run ts_1
```

2. Create a function getName

- it should accept an object firstname and lastname
- it should return fullname
- keep lastname optional.
- if lastname does not exist then return only firstname
- make a interface for it

```cmd
npm run ts_2
```

3. Create an interface Address

- it takes
- houseNumber
- street
- city
- state
- postalCode
- country
- add appropriate types

```cmd
npm run ts_3
```

4. Create a PersonDetails interface

- it should have
- Prefix optional
- phones array of numbers
- addresses array of Addresses
- email optional
- firstname
- lastname
- middlename optional

```cmd
npm run ts_4
```

5. Create a function PhoneBook

- it should accept PersonDetails type argument
- create an array of objects outside the PhoneBook function, that is expecting PersonDetails objects.
- Push the PersonDetails object in the array, from the function.

```cmd
npm run ts_5
```

6. Create a tsconfig file
   - the target version should be latest ES version.
   - the output should be stored in build folder.
   - applicable for both of the above assignments.
