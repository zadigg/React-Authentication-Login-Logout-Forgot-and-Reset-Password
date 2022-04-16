import React from "react";

import MadeForYou from "./MadeForYou";
import MusicVibe from "./MusicVibe";
import RecentlyPlayed from "./RecentlyPlayed";

function MainBody() {
  return (
    <div className="ml-[99px] mt-4">
      <div className="text-2xl font-bold">ደስታ: የሚሰማዎትን ይጫወቱ</div>
      <div className="text-sm">ማለቂያ የሌለው፣ ለግል የተበጀ የሚወዱት ሙዚቃ እና አዲስ ግኝቶች</div>
      <MusicVibe />
      <div className="mt-[73px] overflow-scroll scrollbar-hide  ">
        <MadeForYou />
        <RecentlyPlayed />
      </div>
    </div>
  );
}

export default MainBody;
