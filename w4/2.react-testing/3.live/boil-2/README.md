### Mandatory else Zero Marks will be given

1. Use of typescript is mandatory.
2. All the files should have `.ts` or `.tsx` extension.
3. Create types for all components.

### Goal: [Topics Board](https://topics-board.netlify.app/)

### Features to build

1. Load initial Data, note: Do not change initial Data.
2. User should create typescript Props for all the components.
3. User Should be able to `add` topic to any of the following section.
4. User Should be able to `cancel` addition of topic to any of the following section.
5. User should be able to `like` any `TopicItem`.
6. User should be able to `delete` ay `TopicItem`.

### Getting started

1. Create a React app with Typescript.
2. Copy initialData from [Initial Data](https://github.com/riteshf/RCT-201/tree/main/w1/4.eval) to `project -> initialData.json` file.
3. Follow Below given `Folder Structure` and `Component Signatures`

### Folder Structure

- src
  - components
    - TopicsBoard.tsx
    - TopicsSection.tsx
    - TopicItem.tsx
    - TopicInput.tsx
  - context
    - TopicsContext.tsx
  - constants.ts

### Component Signatures

**Note:**: you can add more props if and where required.

- TopicsBoard signature

```jsx
<TopicsBoard initialData={initialData} />
```

- TopicsSection signature

```tsx
<TopicsSection type={topicType} topics={sectionTopicsFiltered} />
```

- TopicItem signature

```tsx
<TopicItem {...topic} />
```

- TopicInput signature

```tsx
<TopicInput />
```

- TopicsContext Signature

```ts
const { topics, addTopic, liketopic, deleteTopic } = useContext(TopicsContext);
```

### Hints

1. You can use [Chakra-UI](https://chakra-ui.com/).
2. Do not do any api integration, all data is local and static, on reload changes will be cleared.
3. [Folders and Files](https://drive.google.com/file/d/1_m0fymt5u72Z1_aOIU5uuAe1hxAu50Dp/view)
4. Constants Required

```ts
export enum TopicType {
  Pending = "Pending",
  // Refer Inital data to know other types
}

export type Topic = {
  // Refer Inital data to know all keys
};

export type TopicInfo = {
  // section title
  title: string;
  // can be use for section bgColor
  sectionBgColor: string;
  // can be use for item bgcolor
  itemBgColor: string;
};

export const topicInfo: Record<TopicType, TopicInfo> = {
  // Need to add all the data
};
```

### Deployment

- Deploy on netlify only.
