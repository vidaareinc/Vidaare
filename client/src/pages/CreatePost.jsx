import React from "react";

import SchedulePost from "../components/vidcreate/SchedulePost";
import PostQueues from "../components/vidcreate/PostQueues";

export default function CreatePost() {
  return (
    <div className="container p-4 rounded-lg grid grid-cols-2">
      {/* Displaying scheduling */}
      <SchedulePost />
      {/* Displaying entered data */}
      <PostQueues />
    </div>
  );
}
