import { Box, Text, Image, Flex, Collapse, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <div>
      <main>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="150px"
        >
          <Flex direction="column" marginRight="100px" padding="10px">
            <Text fontSize="25px" fontWeight="bold" color="#C769AA">
              HAPPY MOTHERS DAY
            </Text>
            <Text
              fontSize="20px"
              fontWeight="semibold"
              color="#C769AA"
              marginTop="5px"
              marginBottom="20px"
            >
              The most perfect women's day, mothers ❤️
            </Text>
            <Collapse startingHeight={0} in={show}>
              <Text maxWidth="599px" color="#595F4F">
                They have the ability to hear silence. To guess feelings. To find the right word in uncertain moments.
To strengthen us when everything around us seems to crumble. Wisdom borrowed from the gods to protect and support us. Their existence is in itself an act of love. To generate, to care, to nurture. To love, love, love... To love with an unconditional love that expects nothing in return. Immeasurable and boundless affection, Mother is an infinite being.
              </Text>
              <Text marginTop="10px" maxWidth="599px" color="#595F4F">
                Mom, you are simply the most hardworking mother ever! You manage to multiply yourself in such a unique, attentive, and strong way. Things like that are only within the reach of people like you, Mom!
              </Text>
            </Collapse>
            <Button
              width="150px"
              marginTop="10px"
              onClick={handleToggle}
              backgroundColor="#C769AA"
              color="white"
              _hover={{ bg: "#D287BB" }}
            >
              Clique aqui
            </Button>
          </Flex>
          <Image
            width="700px"
            height="700px"
            src="/mother.png"
            marginLeft="100px"
            padding="10px"
          />
        </Box>
      </main>
    </div>
  );
}
