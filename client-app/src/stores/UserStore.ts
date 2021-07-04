import { action, computed, observable } from 'mobx';
import agent from '../api/agent';
import { IUser, IUserFormValues } from '../models/users';

export default class UserStore {
  @observable user: IUser | null = null;

  @computed get isLoggedIn(): boolean {
    return !!this.user;
  }

  @action login = async (values: IUserFormValues) => {
    try {
      this.user = await agent.User.login(values);
    } catch (error) {
      console.log(error);
    }
  };
}
