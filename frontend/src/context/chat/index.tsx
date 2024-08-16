import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type MessagesType = Array<{
  from: string;
  message: string;
  room: number;
}>;

interface ChatContextType {
  room: number | null;
  messages: MessagesType;
  setMessages: Dispatch<SetStateAction<MessagesType>>;
  setRoom: Dispatch<SetStateAction<number | null>>;
}

const ChatContext = createContext<ChatContextType>({
  room: null,
  messages: [],
  setMessages: () => {},
  setRoom: () => {},
});

const ChatProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = useState<MessagesType>([]);
  const [room, setRoom] = useState<number | null>(null);

  return (
    <ChatContext.Provider value={{ messages, setMessages, room, setRoom }}>
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };
