import { Box, Button, Divider, Flex, Heading, Input, Link,Stack,Text } from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@chakra-ui/react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import {BsBoxSeam,BsFacebook,BsInstagram,BsPinterest,BsTruck, BsTwitter, BsYoutube} from 'react-icons/bs'
import {RiExchangeBoxLine} from 'react-icons/ri'


const Footer = () => {
  return (
    <>
<Box  w="100%"  bg="#f0f2f5" p="3rem" mt="2rem">
    <Flex justifyContent="space-evenly">
        <Box m="2rem">
        <Box ><Icon as={AiOutlineQuestionCircle} w={80} h={80}  color="gray"/></Box>
        <Link color="blue" fontSize="smaller">Visit our Support Center</Link>
        </Box>
        <Box m="2rem">
        <Box ><Icon as={BsBoxSeam} w={80} h={80}  color="gray"/></Box>
        <Link color="blue" fontSize="smaller">Check your Order Status</Link>
            </Box>
            <Box m="2rem">
        <Box ><Icon as={BsTruck} w={80} h={80}  color="gray"/></Box>
        <Link color="blue" fontSize="smaller">Shipping, Delivery & Store Pickup</Link>
            </Box>
            <Box m="2rem">
        <Box ><Icon as={RiExchangeBoxLine} w={80} h={80}  color="gray"/></Box>
        <Link color="blue" fontSize="smaller">Returns & Exchanges</Link>
            </Box>
    </Flex>
    <hr />
    <Flex  justifyContent="space-between" flexWrap="wrap" mt="2rem">
        <Flex w="700px" justifyContent="space-between" textAlign="left" margin="auto">
        <Box  lineHeight="25px">
            <Heading fontSize="smaller" >Order & Purchases</Heading>
            <Text><Link color="blue" fontSize="smaller">Check Order Status</Link></Text>
            <Text><Link color="blue" fontSize="smaller">Shipping, Delivery & Pickup</Link></Text>
            <Text><Link color="blue" fontSize="smaller">Returns & Exchanges</Link></Text>
            <Text><Link color="blue" fontSize="smaller">Price Match Guarantee</Link></Text>
            <Text><Link color="blue" fontSize="smaller">Product Recalls</Link></Text>
            <Text><Link color="blue" fontSize="smaller">Trade-In Program</Link></Text>
            <Text><Link color="blue" fontSize="smaller">CGift Cards</Link></Text>
            <Box  lineHeight="25px" mt="40px">
        <Heading fontSize="smaller">Payment Options</Heading>
        <Text><Link color="blue" fontSize="smaller">My Best Buy® Credit Card</Link></Text>
            <Text><Link color="blue" fontSize="smaller">Pay Your Bill at Citibank</Link></Text>
            <Text><Link color="blue" fontSize="smaller">Lease to Own</Link></Text>
           
            
        </Box>
        </Box>
        <Box  lineHeight="25px">
        <Heading fontSize="smaller">Support & Services</Heading>
        <Text><Link color="blue" fontSize="smaller">Visit our Support Center</Link></Text>
            <Text><Link color="blue" fontSize="smaller">Shop with an Expert</Link></Text>
            <Text><Link color="blue" fontSize="smaller">Schedule a Service</Link></Text>
            <Text><Link color="blue" fontSize="smaller">Manage an Appointment</Link></Text>
            <Text><Link color="blue" fontSize="smaller">Protection & Support Plans</Link></Text>
            <Text><Link color="blue" fontSize="smaller">Haul Away & Recycling</Link></Text>
            <Text><Link color="blue" fontSize="smaller">Contact Us</Link></Text>
            <Box  lineHeight="25px" mt="40px">
        <Heading fontSize="smaller">Rewards & Membership</Heading>
        <Text><Link color="blue" fontSize="smaller">Rewards & Membership</Link></Text>
            <Text><Link color="blue" fontSize="smaller">My Best Buy</Link></Text>
            <Text><Link color="blue" fontSize="smaller">View Points & Certificates</Link></Text>
            <Text><Link color="blue" fontSize="smaller">Member Offers </Link></Text>
           
        </Box>
        </Box>
        <Box  lineHeight="25px">
        <Heading fontSize="smaller">Partnerships</Heading>
        <Text><Link color="blue" fontSize="smaller">Affiliate Program</Link></Text>
            <Text><Link color="blue" fontSize="smaller">Advertise with Us</Link></Text>
            <Text><Link color="blue" fontSize="smaller">Developers</Link></Text>
            <Text><Link color="blue" fontSize="smaller">Best Buy Health</Link></Text>
            <Text><Link color="blue" fontSize="smaller">Best Buy Education</Link></Text>
            <Text><Link color="blue" fontSize="smaller">Best Buy Business</Link></Text>
            <Box  lineHeight="25px" mt="40px">
        <Heading fontSize="smaller">About Best Buy</Heading>
        <Text><Link color="blue" fontSize="smaller">Corporate Information</Link></Text>
            
            <Text><Link color="blue" fontSize="smaller">Careers</Link></Text>
            <Text><Link color="blue" fontSize="smaller">Corporate Responsibility & Sustainability</Link></Text>
            <Text><Link color="blue" fontSize="smaller">Discover & Learn</Link></Text>
           
            
        </Box>
        </Box>
        </Flex>
        <Box bg="white" p="20px" mt="10px" w="35%"  margin="auto">
            <Text ><Link color="blue" fontSize="smaller" textAlign="left">Sign in or Create Account</Link></Text>
<hr style={{margin:"10px 1px"}}/>
        <Heading fontSize="smaller" textAlign="left">Get the latest deals and more.</Heading>
        <Flex mt="20px" flexWrap="wrap">
        <Input placeholder='Enter email address 'mr="20px" />
    <button style={{width:"25%", padding:"5px", borderRadius:"4px",border:"none",backgroundColor:"teal",fontWeight:"bold",color:"white"}}>
        Sign Up</button>
        </Flex>
   <hr style={{margin:"25px 1px"}}/>
        <Heading fontSize="2xl" textAlign="left">Best Buy app</Heading>
        <Link color="blue" ><Text textAlign="left">Learn More</Text></Link>
        <hr style={{margin:"25px 1px"}}/>
        <Flex justifyContent="space-between" mt="20px" flexWrap="wrap">
      <Box>
      <Icon as={BsFacebook} w={30} h={30} pt="0.2rem" color="teal"/>
      </Box>
      <Box>
      <Icon as={BsTwitter} w={30} h={30} pt="0.2rem" color="teal"/>
      </Box>
      <Box>
      <Icon as={BsInstagram} w={30} h={30} pt="0.2rem" color="teal"/>
      </Box>
      <Box>
      <Icon as={BsPinterest} w={30} h={30} pt="0.2rem" color="teal"/>
      </Box>
      <Box>
      <Icon as={BsYoutube} w={30} h={30} pt="0.2rem" color="teal"/>
      </Box>
        </Flex>
        <hr style={{margin:"25px 1px"}}/>
        <Box>
            <Link color="blue"><Text textAlign="left" fontSize="smaller">Forums, blogs & more</Text></Link>
        </Box>
        </Box>
    </Flex>
    <hr style={{margin:"25px 1px"}}/>
    <Flex fontSize="sm" justifyContent="space-between">
        <Box >
        <Text fontSize="smaller">How was your experience?
         <Link color="blue" fontSize="smaller" > Give feedback about our website</Link></Text>
        </Box>
        <Box >
            <Text fontSize="smaller">Best Buy <Link color="blue">Canada</Link></Text>
        </Box>
    </Flex>
</Box>
    </>
  )
}

export default Footer