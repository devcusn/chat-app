import RouterProviderComponent from "./bootstrap/router";
import { AuthProvider } from "./context/auth";
import { ChatProvider } from "./context/chat";
import socket from "./socket";

const App = () => {
  socket.on("connect", () => {
    console.log("welcome", socket.id);
  });

  return (
    <AuthProvider>
      <ChatProvider>
        <RouterProviderComponent />
      </ChatProvider>
    </AuthProvider>
  );
};

export default App;
