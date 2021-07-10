import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from 'mobx';
import agent from '../api/agent';
import { history } from '../App';
import { DASHBOARD_PAGE_ROUTE, LOGIN_PAGE_ROUTE } from '../constants/routes';
import { IUser, IUserFormValues } from '../models/users';
import { RootStore } from './rootStore';

export default class UserStore {
  @observable user: IUser | null = null;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @computed get isLoggedIn(): boolean {
    return !!this.user;
  }

  @action login = async (values: IUserFormValues) => {
    try {
      const user = await agent.User.login(values);
      runInAction(() => {
        this.user = user;
        history.push(DASHBOARD_PAGE_ROUTE);
        this.rootStore.commonStore.setToken(user.token);
      });
    } catch (error) {
      throw error;
    }
  };

  @action logout = () => {
    this.rootStore.commonStore.setToken(null);
    this.user = null;
    history.push(LOGIN_PAGE_ROUTE);
  }
}
