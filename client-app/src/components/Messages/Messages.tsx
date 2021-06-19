import React from 'react';
import { Segment, Comment } from 'semantic-ui-react';
import MessageForm from './MessageForm';
import MessagesHeader from './MessagesHeader';

const Messages: React.FC = () => {
  return (
    <>
      <MessagesHeader />
      <Segment>
        <Comment.Group></Comment.Group>
      </Segment>
      <MessageForm />
    </>
  );
};

export default Messages;
