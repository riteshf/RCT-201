import React, { useContext } from "react";
import { Button, Card, CardBody, Flex, Heading } from "@chakra-ui/react";
import { BiLike, BiTrash } from "react-icons/bi";

import { TopicsContext } from "../context/TopicsContext";
import { Topic, topicInfo } from "../constants";

interface TopicItemProps extends Topic {}

const TopicItem = (props: TopicItemProps) => {
  const info = topicInfo[props.type];
  const { likeTopic, deleteTopic } = useContext(TopicsContext);
  const updateLikeCountHandle = async () => {
    likeTopic && likeTopic(props.id, props.likes + 1);
  };
  const onDeleteHandle = async () => {
    deleteTopic && deleteTopic(props.id);
  };
  return (
    <Card bgColor={info.itemBgColor} data-testid="topic-item">
      <CardBody>
        <Heading as={"h6"} data-testid="topic-message">
          {props.message}
        </Heading>
        <Flex justify="space-between" flexWrap="wrap" gap={2}>
          <Button
            flex="1"
            variant="ghost"
            leftIcon={<BiLike />}
            onClick={updateLikeCountHandle}
            data-testid="like-topic-btn"
          >
            ({props.likes}) Likes
          </Button>
          <Button
            flex="1"
            variant="ghost"
            leftIcon={<BiTrash />}
            onClick={onDeleteHandle}
            data-testid="delete-topic-btn"
          >
            Delete
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default TopicItem;
