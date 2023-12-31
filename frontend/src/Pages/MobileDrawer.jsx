import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    useDisclosure
} from "@chakra-ui/react";
import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import Sidebar from "../Components/Sidebar";
import { backgroundColorSidebar } from "../constants/color";

function MobileDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                onClick={onOpen}
            >
                <GiHamburgerMenu color="white" size={"18px"} />
            </Box>

            <Drawer onClose={onClose}  placement='left' isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent bgColor={backgroundColorSidebar}>
                    <DrawerCloseButton color={"white"} fontSize="xl" />
                    <DrawerBody>
                        <DrawerCloseButton />
                        <Sidebar />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}
export default MobileDrawer;