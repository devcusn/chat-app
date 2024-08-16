import Chat from "./components/Chat";
import { ChatProvider } from "./context/chatStore";
import socket from "./socket";

function App() {
  socket.on("connect", () => {
    console.log("welcome", socket.id);
  });

  return (
    <ChatProvider>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Chat />
      </div>
    </ChatProvider>
  );
}

export default App;
