import React, { useContext } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  Search2Icon,
  ChevronDownIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
// import NorthAnchorage from "../images/NorthAnchorage.png"
// 1. Import
import { Icon } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { GiShop} from 'react-icons/gi'
import { Link } from "react-router-dom";
// GiShop

const NavBar = () => {
 
  return (
    
    <>
<Box>
      <Flex
        bg="teal"
        alignItems="center"
        justifyContent="space-between"
        gap="1rem"
        w="100%"
        h="3.5rem"
        flexShrink="1rem"
      position="fixed"
      zIndex="2"
      >
        <Box h="100%">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img
              src="data:image/png;base64,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"
              alt="logo"
              style={{ height: "3.5rem", minHeight:"1rem"}}
            />
          </Link>
        </Box>
        <Box>
          <Popover>
            <PopoverTrigger >
              <Button
                colorScheme="white"
                variant="link"
                bg="teal"
                fontSize="1.5rem"
                fontWeight="2rem"
                color="white"
                border="none"
              >
                <HamburgerIcon />
                Menu
              </Button>
            </PopoverTrigger>
            <PopoverContent bg="white" p="1rem" >
              <PopoverArrow />
              <PopoverCloseButton ml="12rem" bg="white" border="0"/>
              <PopoverHeader color="blue" m="0.5rem">Deals </PopoverHeader>
              <Divider h="0.1rem" bg="lightgray" orientation="horizontal" />
              <PopoverHeader color="blue" m="0.5rem">Support & Services </PopoverHeader>
              <Divider h="0.1rem" bg="lightgray" orientation="horizontal" />
              <PopoverHeader color="blue" m="0.5rem"> Brands</PopoverHeader>
              <Divider h="0.1rem" bg="lightgray" orientation="horizontal" />
              <PopoverHeader color="blue">Featured </PopoverHeader>
              <Divider h="0.1rem" bg="white" orientation="horizontal" />
              <Divider h="0.1rem" bg="gray" orientation="horizontal" />
              <PopoverHeader m="1rem"> Shop By Department </PopoverHeader>
              <PopoverBody color="blue" m="0.5rem">Appliances</PopoverBody>
              <PopoverBody color="blue" m="0.5rem">Movies & Music</PopoverBody>
              <PopoverBody color="blue" m="0.5rem">Computers & Tablets</PopoverBody>
              <PopoverBody color="blue" m="0.5rem">TV & Home Theater</PopoverBody>
              <PopoverBody color="blue" m="0.5rem">
                Cameras, Camcorders & Drones
              </PopoverBody>
              <PopoverBody color="blue" m="0.5rem">Cell Phones</PopoverBody>
              <PopoverBody color="blue" m="0.5rem"> Audio</PopoverBody>
              <PopoverBody color="blue" m="0.5rem">Video Games</PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
        <Box m="1" w="30rem" minW="2rem">
          <InputGroup >
            <InputRightElement
              pointerEvents="none" mt="0.8rem" mr="0.8rem" color="blue"
              children={<Search2Icon />}
            />
            <Input type="tel" placeholder="Search Best Buy" bg="white" border="0" p="0.8rem" borderRadius="0.2rem"  w="100%"/>
          </InputGroup>
        </Box>
        <Box ml="">
        </Box>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Box color="white" fontSize="1.5rem" fontWeight="0.6rem" flexDirection="column-reverse">
            <Heading size="lg" fontSize="1.5rem">
              <Icon as={GiShop} w={25} h={25}  />
             Aiea
            </Heading>
          </Box>
        </Link>
        <Link to="/Cart" style={{ textDecoration: 'none' }}>
          <Box color="white" fontSize="1.2rem" pl="1.5rem" pr="1.5rem">
            <Heading size="lg" fontSize="1.5rem" fontWeight="0.6rem">
              <Icon as={AiOutlineShoppingCart} w={30} h={30}  />
              <Text
                m="-10px"
                p="2px"
                mr="0.8rem"
                borderRadius="40%"
                color="black"
                bg="yellow"
                as="sub"
              >
                2
              </Text>
              Cart
            </Heading>
          </Box>
        </Link>
      </Flex>
 </Box>  
<Box>
      <Flex
   position="absolute"
  zIndex="1"
        bg="teal"
        alignItems="center"
        justifyContent="space-evenly"
        // p="1rem"
        mt="57px"
        gap="1rem"
        w="100%"
       h="2rem"
       minH="1rem"
      >
      
        <Link to="/DealsofDay" style={{ textDecoration: 'none' }} >
          <Box color="white" fontSize="sm" textDecoration="none" textTransform="none" bg="teal" >
            Top Deals
          </Box>
        </Link>
        <Link to="/DealsofDay" style={{ textDecoration: 'none' }}>
          <Box color="white" fontSize="sm" >
            Deals of the Day
          </Box>
        </Link>
        <Link to="/DealsofDay" style={{ textDecoration: 'none' }}>
          <Box color="white" fontSize="sm">
            Totaltech Membership
          </Box>
        </Link>
        <Link to="/DealsofDay" style={{ textDecoration: 'none' }}>
          <Box color="white" fontSize="sm">
            Credits Cards
          </Box>
        </Link>
        <Link to="/DealsofDay" style={{ textDecoration: 'none' }}>
          <Box color="white" fontSize="sm">
            Gifts Cards
          </Box>
        </Link>
        <Box color="white" fontSize="sm">
          <Icon as={VscAccount} /> Account <ChevronDownIcon />
        </Box>
      
      </Flex>
</Box>
    </>
  );
};

export default NavBar;
