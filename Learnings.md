### Higher Order components - connect
A HOC is a React component that adds some additional functionality/behaviour to some existing component you have already written or plan to write. It's a function that takes a component and returns a new component.


So we combine a normal component with one or more higher order components and we get back an _enhanced_ or _composed_ component. This _enhanced_ component provides us with some additional functionality or data.

You've probably already been using HOC's without realizing, especially if you've used redux. _**Connect**_ is a higher order component. We call connect with some configuration option and whatever gets returned from connect we immediately invoke again with our component. This is a classic case of a HOC; We're taking the React Component we created and wrapping/enhancing/composing its functionality with some helper.

You might be wondering how connect is enhancing our store and what it's doing exactly. This is where the _Provider_ comes in. Connect is a HOC, specifically made to make communication with the Provider at the top of our application.


 The provider wraps our redux store, the actual library redux, the object that holds our global application state that's formed by all of our different reducers! The provider holds the redux store and watches it for any changes. Whenever there's a change to the state, the provider updates any child components. It broadcasts this change to any connected component. Therefore connect is a HOC that's making direct communication with the provider inside of our application and the provider has direct access to our redux store. It's therefore a HOC which is used to add some additional functionality/data to our components. In a lot of HOC which we'll write you'll end up exporting the enhanced component.



![hoc-provider-connect](https://user-images.githubusercontent.com/22747985/27192917-f6eb1042-51f4-11e7-80e4-f753d1b92a26.png)

```js

import React, { Component } from 'react';
import { connect } from 'react-redux';
class App extends Component {
  render() {
    return <div>React simple starter</div>;
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}
export default connect(mapStateToProps)(App);


```
