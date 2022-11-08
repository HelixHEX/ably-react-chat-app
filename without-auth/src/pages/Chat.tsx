import Nav from "../components/navbar";
import { useState } from "react";
import { configureAbly, useChannel } from "@ably-labs/react-hooks";
import {
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useUser } from "@clerk/clerk-react";
import { FiSend } from "react-icons/fi";
import Message from "../components/message";

configureAbly({ key: process.env.REACT_APP_ABLY_API_KEY, clientId: "someid" });

const Chat = () => {
  const [messages, updateMessages] = useState<any>([]);
  const { user } = useUser();
  const [channel] = useChannel("channel-name", (message) => {
    console.log(message);
    updateMessages((prev: any) => [...prev, message]);
  });
  const sendMessage = (e: any) => {
    e.preventDefault();
    channel.publish("general", { text: message, user });
    setMessage("");
  };
  const bg = useColorModeValue("gray.100", "gray.900");
  const [message, setMessage] = useState("");
  return (
    <>
      <Flex flexDir="column" w="100%" h="100vh">
        <Nav />
        <Flex mb={10} overflow={'scroll'} p={4} flexDir={'column'}>
          {messages.map((message: any, index: any) => (
            <Message
              text={message.data.text}
              key={index}
              username={message.data.user.username}
              profileImageUrl={message.data.user.profileImageUrl}
            />
          ))}
        </Flex>
        <Flex p={3} w="100%" pos="absolute" bottom={0}>
          <form style={{ width: "100%" }} onSubmit={sendMessage}>
            <InputGroup w="100%" mt={5}>
              <Input
                maxHeight={35}
                borderColor={bg}
                bg={bg}
                placeholder="Your message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                pr={55}
              />
              <InputRightElement
                children={
                  <>
                    <Icon
                      onClick={sendMessage}
                      color="purple.400"
                      _hover={{ color: "purple.500", cursor: "pointer" }}
                      w={21}
                      h={21}
                      as={FiSend}
                    />
                  </>
                }
              />
            </InputGroup>
          </form>
        </Flex>
      </Flex>
    </>
  );
};

export default Chat;
