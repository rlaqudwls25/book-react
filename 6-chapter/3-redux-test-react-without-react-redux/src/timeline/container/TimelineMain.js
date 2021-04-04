import React, { useEffect, useReducer } from "react";
import store from "../../common/store";
import { getNextTimeline } from "../../common/mockData";
import { addTimeline } from "../state";
import TimelineList from "../component/TimelineList.js";

// 리팩터링 후

const TimelineMain = () => {
  const [, forceUpdate] = useReducer((v) => v + 1, 0);

  useEffect(() => {
    let prevTimeline = store.getState().timeline.timelines;
    const unsubscribe = store.subscribe(() => {
      const friends = store.getState().timeline.timelines;
      if (prevTimeline !== friends) {
        forceUpdate();
      }
      prevTimeline = timelines;
    });
    return () => unsubscribe();
  }, []);

  const onAdd = () => {
    const timeline = getNextTimeline();
    store.dispatch(addTimeline(timeline));
  };
  const timelines = store.getState().timeline.timelines;
  console.log("Timeline render");
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} />
    </div>
  );
};

export default TimelineMain;
