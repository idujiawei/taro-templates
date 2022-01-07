import { observable, makeObservable, action } from "mobx";

export default class <%= _.capitalize(pageName) %>Store {
  constructor() {
    makeObservable(this);
  }
}
