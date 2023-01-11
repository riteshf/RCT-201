import React, { createContext, useState } from "react";

import { Topic, TopicType } from "../constants";
import initialTopics from "../initialData.json";

type TopicsContextProps = {
  topics: Topic[];
  addTopic?: (value: string, type: TopicType) => void;
  likeTopic?: (id: number, newLikesCount: number) => void;
  deleteTopic?: (id: number) => void;
};

export const TopicsContext = createContext<TopicsContextProps>({
  topics: [],
});

const TopicsProviders = ({ children }: { children: React.ReactNode }) => {
  const [topics, setTopics] = useState<Topic[]>(initialTopics as Topic[]);

  const addTopic = async (message: string, type: TopicType) => {
    setTopics([
      ...topics,
      {
        id: Date.now(),
        message,
        type,
        likes: 0,
      },
    ]);
  };

  const likeTopic = async (id: number, newLikesCount: number) => {
    let updatedTopics = topics.map((topic) => {
      if (topic.id === id) {
        topic.likes = newLikesCount;
      }
      return topic;
    });
    setTopics(updatedTopics);
  };

  const deleteTopic = (id: number) => {
    let updatedTopics = topics.filter((topic) => topic.id !== id);
    setTopics(updatedTopics);
  };

  return (
    <TopicsContext.Provider
      value={{ topics, addTopic, likeTopic, deleteTopic }}
    >
      {children}
    </TopicsContext.Provider>
  );
};

export default TopicsProviders;
