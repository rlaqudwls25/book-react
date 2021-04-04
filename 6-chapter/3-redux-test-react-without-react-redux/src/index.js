import React from "react";
import ReactDOM from "react-dom";
import TimelineMain from "./timeline/container/TimelineMain";
import FriendMain from "./friend/container/FriendMain";
import { Provider } from "react-redux";
import store from "./common/store";

ReactDOM.render(
  <Provider store={store}>
    <FriendMain />
    <TimelineMain />
  </Provider>,
  document.getElementById("root")
);
