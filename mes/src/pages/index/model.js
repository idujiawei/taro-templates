import { observable, makeObservable, action } from "mobx";

export default class <%= _.upperFirst(pageName) %>Store {
 @observable data = [];

  constructor() {
    makeObservable(this);
  }

  @action.bound
  setData(data) {
    this.data = data;
  }
}
