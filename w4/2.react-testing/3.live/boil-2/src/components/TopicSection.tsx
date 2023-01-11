import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { Topic, topicInfo, TopicType } from "../constants";
import TopicItem from "./TopicItem";
import TopicInput from "./TopicInput";
import { BiMessageSquareAdd } from "react-icons/bi";

type TopicSectionProps = {
  topicType: TopicType;
  topics: Topic[];
};

const TopicSection = ({ topicType, topics }: TopicSectionProps) => {
  const [addNew, setAddNew] = useState(false);
  const info = topicInfo[topicType];

  useEffect(() => {
    if (addNew) {
      setAddNew(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topics]);

  return (
    <Card bgColor={info.sectionBgColor} data-cy={`topic-section-${topicType}`}>
      <CardHeader>
        <Heading size="md" data-cy="topic-title">
          {info.title}
        </Heading>
      </CardHeader>
      <CardBody>
        <Flex direction={"column"} gap={2}>
          {topics.map((topic) => (
            <TopicItem key={topic.id} {...topic} />
          ))}
          {addNew && (
            <TopicInput type={topicType} onCancel={() => setAddNew(false)} />
          )}
        </Flex>
      </CardBody>
      <CardFooter>
        <Button
          width={"100%"}
          variant="ghost"
          leftIcon={<BiMessageSquareAdd />}
          disabled={addNew}
          onClick={() => setAddNew(true)}
          data-cy="topic-add-btn"
        >
          Add New
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TopicSection;
