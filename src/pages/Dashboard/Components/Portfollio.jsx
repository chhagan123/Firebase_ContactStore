import React from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdFileDownload } from "react-icons/md";

import {Stack,HStack,Icon,Text,Tag,Button,Box} from "@chakra-ui/react"

const Portfollio = () => {
  return (
  <HStack bg='white' border-radius='xl' p='6' gap='12' h='6.625rem'  borderRadius="16px">
    <Stack>
      <HStack color='#535D66'>
       <Text fontSize='sm' >Total Portfollio Value </Text>
      <Icon as={AiOutlineInfoCircle}/>
      </HStack>
      <Text textStyle='h2'>₹ 112,312.24</Text>
      
    </Stack>

    <Stack>
      <HStack color='#535D66'>
       <Text fontSize='sm' >wallet balances </Text>
     
      </HStack>
      <HStack>
      <Text textStyle='h2'> 22.39401000</Text><Tag>BTC</Tag>
      </HStack>
     
      
    </Stack>
    <HStack pt='2rem'>
      <Text textStyle='h2'>₹ 1,300.00</Text><Tag>INR</Tag>
      </HStack>
      <HStack ml='2rem' gap='.5rem'>
        <Box as={MdFileDownload }>
        <Button>Deposite</Button>
        </Box>

        <Button>Withdrawl</Button>
      </HStack>

  </HStack>
  )
}

export default Portfollio
