/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Props{
  title: string;
}

interface State{
}

class Component<Props> {
  constructor (public props: Props) {

  }
}

class Page extends Component<Props> {
  pageInfo() {
    console.log(this.props.title);
  }
}
import React, { Component } from 'react'

/*type Props = {}

type State = {}*/

export default class ClassComponent extends Component<Props, State> {
  state: State = {},

  render() {
    return (
      <div>ClassComponent</div>
    )
  }
}

export {};
