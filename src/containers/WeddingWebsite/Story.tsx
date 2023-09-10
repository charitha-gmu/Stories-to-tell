import { InvitationStory } from "assets/images";
import React from "react";

const WeddingInvitationStory = () => {
  return (
    <>
      <div className="event-photo-container">
        <img src={InvitationStory} alt="home" className="image"></img>
      </div>
      <div className="story-header-container">Story</div>
      <div className="story-container">
        The first time I saw him, we were both sitting at the same gate for a
        flight to San Diego. I remember glancing over at him and thinking, Oh,
        wow, he’s cute. When I got to my seat, I saw that the seat beside me was
        empty and thought, how awesome would it be if he ended up next to me?{" "}
        <br /> <br />
        Well, he did. We started talking, and then he asked for my number and we
        went our separate ways. I was certain I would never hear from him again.
        I thought about him often, but eventually he faded into the ‘missed
        connections’ category. A few months later, out of the blue, he sent me
        [a message that said] ‘Happy New Year.’ We hit it off like nothing ever
        changed.
      </div>
    </>
  );
};

export default WeddingInvitationStory;
