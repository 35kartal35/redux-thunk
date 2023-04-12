import { useState } from "react";
import ChatAi from "./component/ChatAi";
import ImageAi from "./component/imageAi";


function App() {
  const [isChatMode, setIsChatMode] = useState(true);

  const handleClick = () => {
    setIsChatMode(!isChatMode);
  };
  return (
    <div className="chat-bot">
      <h1>
        YAPAY ZEKA
      </h1>
      <button onClick={handleClick}>
        {isChatMode ? "RESİM MODU" : "CHAT GPT"}

      </button>
      {isChatMode ? <ChatAi /> : <ImageAi />}

    </div>
  );
}

export default App;
