import React, { useEffect, useReducer } from "react";
import store from "../../common/store";
import { getNextFriend } from "../../common/mockData";
import { addFriend } from "../state";
import FriendList from "../component/FriendList";

const FriendMain = () => {
  // useReducer 상태값 변경 함수를 호출 할 때 마다 상태값을 변경
  const [, forceUpdate] = useReducer((v) => v + 1, 0);

  useEffect(() => {
    let prevFriends = store.getState().friend.friends;
    const unsubscribe = store.subscribe(() => {
      const friends = store.getState().friend.friends;
      if (prevFriends !== friends) {
        forceUpdate();
      }
      prevFriends = friends;
    });
    return () => unsubscribe();
  }, []);

  const onAdd = () => {
    const friend = getNextFriend();
    store.dispatch(addFriend(friend));
  };

  console.log("FriendMain render");
  let friends = store.getState().friend.friends;
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friends} />
    </div>
  );
};

export default FriendMain;
