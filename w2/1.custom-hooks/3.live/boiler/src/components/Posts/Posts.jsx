import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Center,
  CircularProgress,
  Flex,
  Heading,
  useToast,
} from "@chakra-ui/react";

import AddPost from "./AddPost";
import Post from "./Post";
import { getPosts } from "./posts.api";

const Posts = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      setLoading(true);
      let data = await getPosts();
      setData(data);
      setSuccess(true);
    } catch (e) {
      toast({
        title: "Error Occurred while fetching data",
        description: e.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const onAddPost = (post) => {
    setData([...data, post]);
  };
  const onDelete = (id) => {
    setData(data.filter((p) => p.id !== id));
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Center my={2} gap={4}>
        <Heading>Posts</Heading>
        <Button isLoading={loading} loadingText="Fetching..." onClick={getData}>
          Refresh
        </Button>
      </Center>
      <AddPost onAddPost={onAddPost} />
      {loading && <CircularProgress isIndeterminate color="green.300" />}
      <Flex direction="column" gap={2} my={2}>
        {success &&
          data.map((post) => (
            <Post key={post.id} {...post} onDelete={onDelete} />
          ))}
      </Flex>
    </Box>
  );
};

export default Posts;
