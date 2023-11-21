import React, { useState } from "react";
import { InvitationStory } from "assets/images";

type WeddingInvitationStoryProps = {
  userData: any;
};

const WeddingInvitationStory = (props: WeddingInvitationStoryProps) => {
  const { userData } = props;
  const [zoom, setZoom] = useState(false);

  return (
    <>
      <div className="event-photo-container">
        {zoom ? (
          <img
            src={InvitationStory}
            alt="home"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: "100%",
              width: "100%",
              objectFit: "cover",
              cursor: "zoom-out",
            }}
            className="image"
            onClick={() => setZoom(false)}
          ></img>
        ) : (
          <img
            src={InvitationStory}
            alt="home"
            onClick={() => setZoom(true)}
            style={{
              cursor: "zoom-in",
              maxHeight: "100%",
              maxWidth: "80%",
            }}
            className="image"
          ></img>
        )}
      </div>
      <div className="story-header-container">Story</div>
      <div className="story-container">
        {userData ? (
          <>{userData?.ourStory}</>
        ) : (
          <>
            The first time I saw him, we were both sitting at the same gate for
            a flight to San Diego. I remember glancing over at him and thinking,
            Oh, wow, he’s cute. When I got to my seat, I saw that the seat
            beside me was empty and thought, how awesome would it be if he ended
            up next to me? <br />
            <br />
            Well, he did. We started talking, and then he asked for my number
            and we went our separate ways. I was certain I would never hear from
            him again. I thought about him often, but eventually he faded into
            the ‘missed connections’ category. A few months later, out of the
            blue, he sent me [a message that said] ‘Happy New Year.’ We hit it
            off like nothing ever changed.
          </>
        )}
      </div>
    </>
  );
};

export default WeddingInvitationStory;
