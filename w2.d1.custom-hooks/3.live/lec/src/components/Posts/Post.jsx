import React, { useState } from "react";
import { Box, Button, Flex, useToast } from "@chakra-ui/react";
import { deletePost } from "./posts.api";

const Post = ({ id, content, onDelete }) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deletePost(id);
      onDelete(id);
      toast({
        title: `Post with id: ${id}, deleted successfully`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } catch (e) {
      toast({
        title: "Error Occurred while fetching data",
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
    <Flex gap={2}>
      <Box>{content}</Box>
      <Button
        size="sm"
        isLoading={loading}
        loadingText="Deleting..."
        onClick={handleDelete}
      >
        Delete
      </Button>
    </Flex>
  );
};

export default Post;
