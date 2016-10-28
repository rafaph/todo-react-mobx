import {observable, action} from 'mobx';

export default class TodoModel {
  @observable text: string = '';
  @observable completed: boolean = false;

  constructor(text: string) {
    this.text = text;
  }

  @action toggle = (): void => {
    this.completed = !this.completed;
  };

  @action updateText = (text: string): void => {
    this.text = text;
  };
}
