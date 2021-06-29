import { createContext } from 'react';
import {
  observable,
  action,
  makeObservable,
  configure,
  runInAction,
} from 'mobx';
import { IChannel } from '../models/channels';
import agent from '../api/agent';

configure({ enforceActions: 'always' });
class ChannelStore {
  @observable channels: IChannel[] = [];
  @observable isModalVisible: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action loadChannels = async () => {
    try {
      const response = await agent.Channels.list();
      runInAction(() => {
        this.channels = response;
      });
    } catch (error) {
      console.log(error);
    }
  };

  @action toggleModal = () => {
    this.isModalVisible = !this.isModalVisible;
  };

  @action createChannel = async (channel: IChannel) => {
    try {
      await agent.Channels.create(channel);
      await this.loadChannels();
    } catch (error) {
      console.log(error);
    }
  };
}

export default createContext(new ChannelStore());
