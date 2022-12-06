**Note**: Use of NextJS for this assignment is Mandatory.

## Problem

- Create your own Portfolio website using Github API's similar to [Sample](http://ritesh-portfolio.s3-website.ap-south-1.amazonaws.com/), using NextJS, make sure it is a static website.

**Note** Github api has a rate limit so for development call this api once and save the data in some file for easy development.

## API's

1. Static: `GET https://api.github.com/users/${username}`: This will get you all the github information, Should be static.
2. Static: `GET https://api.github.com/search/repositories?q=user:${username}+fork:true&sort=updated&per_page=10&type=Repositories`: This will get you your last 10 github projects, should come from server side.

## Getting Started

1. Create a NextJS Project.
2. Make this change to `package.json`, the build will be generated to `out` folder.

```json
"build": "next build && next export",
```

- (Optional) You can use any one CSS module: e.g: Chakra, MUI, tailwind, Mantine, etc.

## Features to build

1. Try to implement a similar website, have your own information, colors and theme.
2. (3 Marks): Home Page
   - GitHub Intro
   - Resume
   - Tech Stack
   - Experience and/or Education
3. (3 Marks): Projects page
   - Fetch recent 10 projects using the second API provided above and load relevant data.
   - Link open's specific project
   - Star count
   - Fork Count
   - language
4. (2 Marks): Create Stories for following components:
   - GitProfile
   - Skills
   - Education/Expereince
   - Projects
5. (2 Marks): Git Actions for deployment on netlify/vercel/gh-pages/aws-s3.

**Note**: You can re-arrange this components in any order which will make your website look good and responsive.

#### Hint

1. Make this change to `package.json`, the build will be generated to `out` folder.

```json
"build": "next build && next export",
```

2. You are free to use google when you are stuck.

#### Submission

- You need to Submit Github Link as well as deployment link.
- Make sure you use masai github account provided by MasaiSchool(submit link to root folder of your repository on github).
- Make sure your deployment is taken care by git actions, and the website is accessiable.
