import React from "react"
import {Box,Flex,Container,useDisclosure} from "@chakra-ui/react"
import Sidenav from "./Sidenav"
import TopNav from "./TopNav"
import SideDrawer from "./SideDrawer"
const DashboardLayout = ({title,children}) => {
  const {isOpen,onClose,onOpen} = useDisclosure();
  return (
   <Box>
    
<Flex>
     
     <Box display={{
      base:'none',
      lg:'flex',
     
     
     }} bg='white' >
     <Sidenav />
     </Box>
     <SideDrawer isOpen={isOpen} onClose={onClose} />
     <Box w='100%'>
     <TopNav title={title} onOpen={onOpen}  />
     <Container mt='6' maxW='70rem'>{children}</Container>
     </Box>
    
</Flex>
   </Box>
  )
}

export default DashboardLayout
