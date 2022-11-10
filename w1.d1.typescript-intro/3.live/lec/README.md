## Getting Started

1. Initialize NPM repository

```cmd
npm init -y
```

2. Install Typescript and Typescript Compiler as developer dependencies

```cmd
npm i tsc typescript --save-dev
```

3. Create a starting file `index.ts`

- **_Note_**: File Extension is `ts` and not `js`

4. In `package.json` add script

```json
"serve1": "tsc src/1-basics.ts",
"serve2": "tsc src/2-basics2.ts",
"serve3": "tsc src/3-functions.ts",
"serve4": "tsc src/4-array.ts",
"serve5": "tsc src/5-object.ts",
"serve6": "tsc src/6-custom.ts",
```

5. You are ready to start with command

```cmd
npm run serve
```

## Goal

- Creating a Basic Typescipt Code to check types
