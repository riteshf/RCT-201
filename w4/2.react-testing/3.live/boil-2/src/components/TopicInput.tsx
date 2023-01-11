import React, { useContext, useState } from "react";
import { Button, Card, CardBody, Flex, Input } from "@chakra-ui/react";
import { BiSave } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";

import { TopicType } from "../constants";
import { TopicsContext } from "../context/TopicsContext";

type TopicInputProps = {
  type: TopicType;
  onCancel: () => void;
};
const TopicInput = ({ type, onCancel }: TopicInputProps) => {
  const [value, setValue] = useState<string>("");
  const { addTopic } = useContext(TopicsContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSave = () => {
    addTopic && addTopic(value, type);
  };
  return (
    <Card bgColor={"white"}>
      <CardBody>
        <Flex direction={"column"} gap={2}>
          <Input
            placeholder="new topic..."
            size="md"
            maxLength={20}
            value={value}
            onChange={handleChange}
            data-cy="input-topic"
          />
          <Flex justify="space-between" flexWrap="wrap">
            <Button
              flex="1"
              variant="ghost"
              leftIcon={<BiSave />}
              onClick={handleSave}
              data-cy="save-topic-btn"
            >
              Save
            </Button>
            <Button
              flex="1"
              variant="ghost"
              leftIcon={<MdOutlineCancel />}
              onClick={onCancel}
              data-cy="cancel-add-topic-btn"
            >
              Cancel
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default TopicInput;
