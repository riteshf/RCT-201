import React, { useContext } from "react";
import {
  Center,
  Container,
  Divider,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

import { TopicsContext } from "../context/TopicsContext";
import TopicSection from "./TopicSection";

import { Topic, TopicType } from "../constants";

const TopicsBoard = () => {
  const { topics } = useContext(TopicsContext);
  return (
    <Container maxW="container.xl" data-cy="topics-board">
      <Center flexDirection="column">
        <Heading>Topics Board</Heading>
        <Heading as="h2" data-cy="total-topics">
          Total topics: {topics.length}
        </Heading>
      </Center>
      <Divider my={4} />
      <SimpleGrid spacing={4} templateColumns="repeat(4, 1fr)">
        {Object.values(TopicType).map((topic) => (
          <TopicSection
            key={topic}
            topicType={topic}
            topics={topics.filter(
              (topicItem: Topic) => topicItem.type === topic
            )}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default TopicsBoard;
