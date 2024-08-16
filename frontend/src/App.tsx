import Chat from "./components/Chat";
import { io } from "socket.io-client";
const socket = io("http://localhost:4001");

function App() {
  socket.on("connect", () => {
    console.log("hello", socket.id);
  });
  return (
    <>
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
    </>
  );
}

export default App;
