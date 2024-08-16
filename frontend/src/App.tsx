import RouterProviderComponent from "./bootstrap/router";
import { ChatProvider } from "./context/chatStore";
import socket from "./socket";

const App = () => {
  socket.on("connect", () => {
    console.log("welcome", socket.id);
  });

  return (
    <ChatProvider>
      <RouterProviderComponent />
    </ChatProvider>
  );
};

export default App;
