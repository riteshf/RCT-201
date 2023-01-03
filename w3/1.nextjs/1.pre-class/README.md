### What is rendering ?

Rendering is the process of retrieving a web page, launching the code, and assessing the structure and design of a page. Rendering can occur in a number of ways; client-side, server-side, and dynamic.

![](../assets/rendering.jpeg)

### Client Side Rendering ?

With a client-side rendering solution, you redirect the request to a single HTML file and the server will deliver it without any content (or with a loading screen) until you fetch all the JavaScript and let the browser compile everything before rendering the content.

Under a good and reliable internet connection, it’s pretty fast and works well. But it can be a lot better, and it doesn’t have to be difficult to make it that way. That’s what we will see in the following image.

- Note: `create-react-app` does client side rendering.

![](../assets/csr.png)

### What is Service Side Rendering

In SSR, when the user makes a request to the webpage, the server prepares the HTML page by fetching the required data from the database and sends to the user's machine over the internet. Then the browser presents all the requested actions on the user UI. All these processes of fetching data from the database to creating an HTML page and sending it to the client are done in mere milliseconds.

- Note: `npx create-next-app@latest` uses server side rendering.

![](../assets/ssr.png)

### SSR vs CSR

![](../assets/ssr-vs-csr.png)

### When to use server-side rendering

- An application has a very simple UI with fewer pages/features
- An application has less dynamic data
- Read preference of the site is more than write
- The focus is not on rich sites and has few users

### When to use client-side rendering

- An application has a very complex UI with many pages/features
- An application has large and dynamic data
- Write preference of the site is more than reading
- The focus is on rich sites and a huge number of users

### [Introduction to Next JS](https://nextjs.org/)

Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.

- Created by Vercel
- ReactJS to production.
- It is not a SPA(Single page Application)

### Getting started

- `npx create-next-app@latest`
- Need to install the following packages:.....Ok to proceed? (y) y
- What is your project named? … record
- Would you like to use TypeScript with this project? … No / Yes - `No`
- Would you like to use ESLint with this project? … No / Yes - `Yes`
- cd record
- npm run dev

### Understanding NextJS

- Routing
  - pages folder
  - `pages/_app.js`
  - `pages/index.js`
- Pre-rendering
- Not JS

### Goal

- Create a Simple Counter Example
