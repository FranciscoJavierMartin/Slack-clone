import {
  observable,
  action,
  makeObservable,
  runInAction,
} from 'mobx';
import { IChannel } from '../models/channels';
import agent from '../api/agent';
import { RootStore } from './rootStore';

export default class ChannelStore {
  @observable channels: IChannel[] = [];
  @observable isModalVisible: boolean = false;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
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
