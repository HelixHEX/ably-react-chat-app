import { Avatar, Flex, Text, useColorModeValue } from "@chakra-ui/react";

type Props = {
  text: string;
  index: number;
};

const Message = ({ text, index }: Props) => {
  const bg = useColorModeValue("gray.100", "gray.900");

  //generates a random number between 0 and 100,000
  return (
    <>
      <Flex mt={10}>
        <Avatar
          w={25}
          h={25}
          rounded={"full"}
          src={`https://avatars.dicebear.com/api/pixel-art-neutral/${index}.jpg`}
        />
        <Flex ml={2} flexDir={"column"}>
          <Flex p={2} bg={bg} rounded={10}>
            <Text>{text}</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Message;
