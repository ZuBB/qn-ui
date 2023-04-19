import React from 'react';
import {
  Button,
  IconButton,
  Link,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  UnorderedList,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

export const InfoModalToggle = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const getCheckList = () => (
    <UnorderedList fontSize="sm">
      <ListItem><Link href='http://[2a01:4f8:192:3277:10c::a365]:8000/'>demo (this site)</Link></ListItem>
      <ListItem><Link href='https://github.com/ZuBB/qn-api'>back-end source code</Link></ListItem>
      <ListItem><Link href='https://github.com/ZuBB/qn-ui'>front-end source code</Link></ListItem>
      <ListItem>
        <Link href="https://nestjs.com/">Nest</Link> as Node.js framework for the API server
      </ListItem>
      <ListItem>
        The content is stored in <Link href="https://sqlite.org/index.html">SQLite</Link>
      </ListItem>
      <ListItem>
        <Link href="https://chakra-ui.com/">Chakra UI</Link> as CSS framework,&nbsp;
        <Link href="https://react.dev/">React</Link> as Front-end framework
      </ListItem>
      <ListItem><code>readme.md</code>'s</ListItem>
      <ListItem>No login/authentication/authorization</ListItem>
      <ListItem>Use provided sketch for UI</ListItem>
      <ListItem><s>Both alphabetically sorted</s>; conflict in reqs. see below</ListItem>
      <ListItem>Check/Uncheck</ListItem>
      <ListItem>The “To Do” list is unlimited, sorted alphabetically</ListItem>
      <ListItem>The “Done” list shows only 10, sorted by recently completed</ListItem>
      <ListItem>“Delete all tasks”</ListItem>
      <ListItem>Searching</ListItem>
      <ListItem>UI is SPA, all business logic exist on the API side</ListItem>
      <ListItem>
        Goodies:
        <UnorderedList>
          <ListItem>Syncing</ListItem>
          <ListItem>Limit inserts & Rotate db: because of open access</ListItem>
          <ListItem>...</ListItem>
        </UnorderedList>
      </ListItem>
    </UnorderedList>
  )

  return (
    <>
      <IconButton
        mt="3"
        onClick={onOpen}
        variant="link"
        icon={<InfoIcon />}
        aria-label="Details"
      />

      <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>To Do App</ModalHeader>
          <ModalCloseButton />
          <ModalBody px="10">
            <Text mb="3" fontWeight="bold" fontSize="1xl">Check list</Text>

            {getCheckList()}
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
