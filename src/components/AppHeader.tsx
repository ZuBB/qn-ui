import React from 'react';
import {
  Button,
  Flex,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Spacer,
  useDisclosure,
  useToast
} from '@chakra-ui/react';
import { createNanoEvents } from 'nanoevents';
import axios from 'axios';

const clearTodosUrl = '/api/todos/wipe';

export const AppHeader = () => {
  const toast = useToast();
  const emitter = createNanoEvents();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onDelete = async () => {
    try {
      await axios.delete(clearTodosUrl);
      emitter.emit('load-todos');
      onClose()
    } catch (error) {
      console.log('Smth happened', error)
      toast({ status: 'error', title: 'Error occured during loading of todos' })
    }
  }

  return (
    <>
      <Flex verticalAlign="center">
        <Heading>Marvelous v2.0</Heading>
        <Spacer />
        <Button variant='link' onClick={onOpen}>
          Delete all tasks
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Do you want to delete all todos?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Pleace click <b>Delete</b> button to confirm deletion of all todos
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onDelete}>
              Delete
            </Button>
            <Button variant='ghost' onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
