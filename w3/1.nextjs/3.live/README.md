### Introduction to NextJS

NextJS is a React tool used to make server-side rendered frontend applications.

### Getting Start

- `npx create-next-app@latest`
- Need to install the following packages:.....Ok to proceed? (y) y
- What is your project named? … lec
- Would you like to use TypeScript with this project? … No / Yes - `No`
- Would you like to use ESLint with this project? … No / Yes - `Yes`
- cd lec
- npm run dev

## Goal

- Project structure
- File-based routing.
- [Rendering](https://nextjs.org/docs/basic-features/data-fetching/overview)
  - [getServerSideProps](https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props)
- [Head tag](https://nextjs.org/docs/api-reference/next/head)
- [Link tag](https://nextjs.org/docs/api-reference/next/link)
  ```jsx
  import Link from "next/link";
  <Link href="/">Home</Link>;
  ```
- [useRouter hook](https://nextjs.org/docs/api-reference/next/router)
  ```js
  import { useRouter } from "next/router";
  const router = useRouter();
  ```

## Coding

- Build a Static multi page Website.
- Routes:
  - `/`: Default page
  - `/counter`: Counter APP page
  - `/todo`: about page
  - `/404` : Not found page
