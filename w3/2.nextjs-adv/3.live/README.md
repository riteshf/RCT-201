### Next JS Advance

### Getting started

- `npx create-next-app@latest`
- Need to install the following packages:.....Ok to proceed? (y) y
- What is your project named? … record
- Would you like to use TypeScript with this project? … No / Yes - `No`
- Would you like to use ESLint with this project? … No / Yes - `Yes`
- cd record
- npm run dev

### Topics

- [layout](https://nextjs.org/docs/basic-features/layouts)
  - Single Shared Layout with Custom App
  - Per-Page Layouts
- [Data Fetching](https://nextjs.org/docs/basic-features/data-fetching/overview)
  - [getServerSideProps](https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props)
  - [getStaticPaths](https://nextjs.org/docs/api-reference/data-fetching/get-static-paths)
  - [getStaticProps](https://nextjs.org/docs/api-reference/data-fetching/get-static-props)
  - [CSR](https://nextjs.org/docs/basic-features/data-fetching/client-side)
- Routing
  - Dynamic Routing
  - Link tag vs Imperative routing

### Coding

- [getStaticPaths](https://nextjs.org/docs/api-reference/data-fetching/get-static-paths): Used for creating dynamic pages.
- `getStaticProps`: Used for getting data only once.
- [Image Optimization](https://nextjs.org/docs/api-reference/next/image)

```jsx
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

const MyImage = (props) => {
  return (
    <Image
      loader={myLoader}
      src="me.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  );
};
```

- Static file serving

- Client side rendering
