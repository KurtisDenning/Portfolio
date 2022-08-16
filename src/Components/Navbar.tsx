import { ReactNode } from 'react';
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Links = ['Home', 'About', 'Contact'];
const NavLink = ({ children, href }: { children: ReactNode, href: string }) => {

    let navigate = useNavigate();
    return (
        <Link
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }} onClick={() => navigate(href)}>
            {children}
        </Link>
    )
};

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>Logo</Box>
                    <HStack spacing={8} alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link} href={link}>{link}</NavLink>
                            ))}
                            <ColorModeSwitcher />
                        </HStack>
                    </HStack>
                    <HStack display={{ md: 'none' }}
                    >
                        <ColorModeSwitcher />
                        <IconButton
                            size={'md'}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={'Open Menu'}
                            onClick={isOpen ? onClose : onOpen}
                        />
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link} href={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}