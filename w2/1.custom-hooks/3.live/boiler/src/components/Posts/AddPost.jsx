import React, { useState } from "react";
import { Button, Center, Input, useToast } from "@chakra-ui/react";
import { addPost } from "./posts.api";

const AddPost = ({ onAddPost }) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleAdd = async () => {
    try {
      setLoading(true);
      let post = await addPost({ content: message });
      onAddPost(post);
      toast({
        title: `Post added successfully`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } catch (e) {
      toast({
        title: "Error Occurred while trying to add Post",
        description: e.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Center>
      <Input value={message} onChange={(e) => setMessage(e.target.value)} />
      <Button onClick={handleAdd} colorScheme="green" isLoading={loading}>
        Add
      </Button>
    </Center>
  );
};

export default AddPost;
