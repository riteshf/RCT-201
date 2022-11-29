### Learning Goals

- Storybook

### Getting started

1. create a react application.
2. install `storybook`.
3. `npx storybook init`.

### Task

Create a [Navbar](https://chakra-templates.dev/templates/navigation/navbar/simple) using storybook.

It accepts props followin props:

```ts
type NavbarProps = {
  links: string[];
  logo: stirng;
  color?: stirng;
  bgColor?: stirng;
  userImage?: string;
};

// default values
// color = black
// bgColor = #4D79FF
// userImage = https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9
```
