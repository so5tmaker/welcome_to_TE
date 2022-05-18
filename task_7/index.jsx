import { useState } from "react";

export const MainComponent = ({
  callbackFunction,
  content,
  isImage = true,
}) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    callbackFunction();
  };

  const divBlock = isImage ? (
    <img src={content.imgSrc} alt={content.imgAlt} />
  ) : (
    <p>BLock2 content: {content}</p>
  );

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {divBlock}
    </div>
  );
};
