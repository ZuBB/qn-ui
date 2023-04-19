import React from 'react';
import {
  Button,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

export const InfoModalToggle = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        onClick={onOpen}
        variant="link"
        icon={<InfoIcon />}
        aria-label="Details"
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>To Do App</ModalHeader>
          <ModalCloseButton />
          <ModalBody px="10">
            <h4>Check-list</h4>
            <ul>
              <li><a href='http://[2a01:4f8:192:3277:10c::a365]:8000/'>demo (this site)</a></li>
              <li><a href='https://github.com/ZuBB/qn-api'>back-end</a></li>
              <li><a href='https://github.com/ZuBB/qn-ui'>front-end</a></li>
              <li>
                features:
                <ul>
                  <li></li>

                </ul>
              </li>
            </ul>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              OK
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
