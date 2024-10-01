import React from 'react'
import  {Flex,Container,Heading,MenuButton,MenuItem,MenuList,Menu,Button,Box} from '@chakra-ui/react'
import { ChevronDownIcon, Icon } from '@chakra-ui/icons';
import { IoPersonSharp } from "react-icons/io5"
import { IoMenuOutline } from "react-icons/io5";

const TopNav = ({title,onOpen}) => {
  return (
    <Box w='100%' bg='white' border='100%'  h="16" boxShadow='xl' >
       <Flex bg='white' w="100%" align='center' h='100%'  maxW='70rem'  justify='space-between' mx='auto' gap='4'>
      <Box ml='5' fontSize='30' display={{
        base:'flex',
        lg:'none',
       
      }}>

      <IoMenuOutline onClick={onOpen}/>
 </Box>
     
      
        <Heading fontWeight="medium" fontSize='28px'>
          {title}
        </Heading>
        <Menu>
  <MenuButton  >
    <Icon as={IoPersonSharp} fontSize="24px"/>
  </MenuButton>
  <MenuList>
    <MenuItem>Logout</MenuItem>
    <MenuItem>Support</MenuItem>
    
  </MenuList>
</Menu>
      
    </Flex>
    </Box>
   
  )
}

export default TopNav
