### `PSC`

## Topics

1. Typescript
2. NextJS
   - SSR
   - SSG
3. Redux
4. Testing
5. Chakra
6. Git Actions

## Getting Started

1. `npx create-next-app@latest lec`.
2. `cd lec`.
3. `npm i redux react-redux redux-thunk axios`.
4. `npm install @chakra-ui/react @emotion/react @emotion/styled  framer-motion react-icons`.
5. Wrap `_app.tsx` file with Chakra Provider.
6. Copy paste folders from ref:
   - folders
     - `public` replace
     - `src/components` add
     - `src/styles` replace
     - `src/utils` replace
   - files
   - `next.config.js` replace
   - `src/pages/_app.tsx` replace
   - `src/pages/index.tsx` remove all code from this file, just a basic component

## Thinking

1. How many Pages do we need ?

- 2 Pages: "Products Listing Page" "Product Details Page"

2. How many Components do we need and what are those ?

- Shared
  - Header
    - Cart
  - Footer
- Homepage
  - ProductCart
- ProductDetails

3. How many API's do we need ?

- GET /products
- GET /cartItems
- GET /products/[id]
- POST /cartItems
- PATCH /cartItems/[id] //increment and decrement quantity
- DELETE /cartItems/[id]

4. How to get Started ?

- (Option 1): Create Redux Logic
- (Option 2): Create TSX Component
- (Option 3): Create Backend Data

A: 312

- [Create backend Data](./lec/db.json)
- Create Redux
  - How many reducers do we need ? : 2
- create all the files
