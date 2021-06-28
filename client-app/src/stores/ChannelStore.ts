import { createContext } from 'react';
import { observable } from 'mobx';

class ChannelStore {
  @observable title = 'Hello world from Mobx';
}

export default createContext(new ChannelStore())