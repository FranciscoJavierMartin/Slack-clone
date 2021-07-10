import { makeObservable, action, observable } from 'mobx';
import { LOCAL_STORAGE_JWT } from '../constants/localStorage';
import { RootStore } from './rootStore';

export default class CommonStore {
  rootStore: RootStore;
  @observable token: string | null;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
    this.token = null;
  }

  @action setToken = (token: string | null) => {
    if (token) {
      localStorage.setItem(LOCAL_STORAGE_JWT, token);
    } else {
      localStorage.removeItem(LOCAL_STORAGE_JWT);
    }
    this.token = token;
  };
}
