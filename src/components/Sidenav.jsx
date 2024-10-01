import React from 'react'

import { RxDashboard } from "react-icons/rx";
import { TbArrowsDoubleSwNe } from "react-icons/tb";
import {BiSupport} from "react-icons/bi"

import {Stack, Box, HStack, Icon,VStack,Text, Heading } from '@chakra-ui/react'

const Sidenav = () => {
    const navLink = [{
        icon:RxDashboard ,
        link:'/Dashboard',
        text:"Dashboard"},
        {
            icon:TbArrowsDoubleSwNe ,
            link:"/Transaction",
            text:"Tarnsaction"
        }


    ]
  return (
    <Stack justify="space-between" bg='white'   maxW="16rem" h="100vh"  boxShadow={{
        base: 'none',   // No shadow on small screens
        lg: 'lg'        // Apply large shadow on large screens
      }}
      w={{
        base:'full',
        lg:'16rem'
      }}
      >
    
        
        <Box>
            <Heading textAlign="center" fontSize="20px" as="h1" pt="3rem">@Dosomecoasding</Heading>
        <Box mx="3" mt="6">
   
   {navLink.map((nav) => (
     
           <HStack  key={nav.text} py="3" px="4" _hover={{
               bg:"#F3F3F7",
               color:"#171717"
           }}>
           <Icon as={nav.icon}/>
           <Text fontSize="14px">{nav.text}</Text>
       </HStack>
      
   
)) }
</Box>
        </Box>
    
   
 <Box  mx="3" mt="6" mb="6">

 <HStack  py="3" px="4" _hover={{
                    bg:"#F3F3F7",
                    color:"#171717"
                }}>
                <Icon as={BiSupport}/>
                <Text fontSize="14px">Support</Text>
            </HStack>

 </Box>

 
</Stack>
  )
}

export default Sidenav;
