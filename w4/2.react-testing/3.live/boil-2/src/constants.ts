export enum TopicType {
  Pending = "Pending",
  Completed = "Completed",
  Revision = "Revision",
  New = "New",
}

export type Topic = {
  id: number;
  type: TopicType;
  message: string;
  likes: number;
};

export type TopicInfo = {
  title: string;
  sectionBgColor: string;
  itemBgColor: string;
};

export const topicInfo: Record<TopicType, TopicInfo> = {
  Pending: {
    title: "Pending Topics...",
    sectionBgColor: "red.200",
    itemBgColor: "red.500",
  },
  Completed: {
    title: "Completed Topics...",
    sectionBgColor: "green.200",
    itemBgColor: "green.500",
  },
  Revision: {
    title: "Topics needing revision...",
    sectionBgColor: "blue.200",
    itemBgColor: "blue.500",
  },
  New: {
    title: "New Topics....",
    sectionBgColor: "yellow.200",
    itemBgColor: "yellow.500",
  },
};
