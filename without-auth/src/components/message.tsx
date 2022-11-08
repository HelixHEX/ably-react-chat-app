import { Avatar, Flex, Text, useColorModeValue } from "@chakra-ui/react";

type Props = {
  text: string;
  username: string;
  profileImageUrl: string;
};

const Message = ({ text, username, profileImageUrl }: Props) => {
  const bg = useColorModeValue("gray.100", "gray.900");
  return (
    <>
      <Flex mt={10}>
        <Avatar w={25} h={25} rounded={"full"} src={profileImageUrl} />
        <Flex ml={2} flexDir={"column"}>
          <Flex p={2} bg={bg} rounded={10}>
            <Text>{text}</Text>
          </Flex>
          <Text>{username}</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Message;
