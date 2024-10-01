import React,{ useRef } from 'react'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
  import {Button} from  '@chakra-ui/react'
import Sidenav from './Sidenav';

const SideDrawer = ({isOpen,onClose,}) => {
    const btnRef = useRef(null); 
   
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
         
  
            <DrawerBody>
                <Sidenav/>

            </DrawerBody>
  

          </DrawerContent>
        </Drawer>
      </>
    )
    
}

export default SideDrawer
