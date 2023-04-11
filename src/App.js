import { useState } from "react";
import ChatAi from "./component/ChatAi";
import ImageAi from "./component/ImageAi";

function App() {
  const [isChatMode, setIsChatMode] = useState(true);

  const handleClick = () => {
    setIsChatMode(!isChatMode);
  };
  return (
    <div className="chat-bot">
      <h1>
        Hayal Et
      </h1>
      <button onClick={handleClick}>
        {isChatMode ? "resim moduna geç" : "chat Moduna geç"}

      </button>
      {isChatMode ? <ChatAi /> : <ImageAi />}

    </div>
  );
}

export default App;
