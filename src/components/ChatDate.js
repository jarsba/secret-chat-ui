import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Text,
  Spacer,
  IconButton,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { datesAreOnSameDay, datesAreConsecutive } from "../utils/dateUtils";

function ChatDate(props) {
  let today = new Date();
  console.log('TODAY', today);
  let dateProps = new Date(props.date)
  console.log("DATE PROPS", dateProps);
  let formatteDate;
  if (datesAreOnSameDay(today, dateProps)) {
    formatteDate = "Today"
  } else if (datesAreConsecutive(today, dateProps)) {
    formatteDate = "Yesterday"
  } else {
    const monthString = dateProps.toLocaleString('default', { month: 'long' });
    formatteDate = `${dateProps.getDate()}. ${monthString} ${dateProps.getFullYear()}`;
  }
  console.log(formatteDate);

  return (
    <Flex justifyContent={"center"} width="100%">
      <Box boxShadow="md" bgColor="yellow.200" m="1" p="1" borderRadius="20px">
        <Text fontSize="xs" p={1}>
          {formatteDate}
        </Text>
      </Box>
    </Flex>
  );
}

export default ChatDate;
