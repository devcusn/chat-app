import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

// Define the shape of your context
interface ChatContextType {
  messages: string[];
  setMessages: Dispatch<SetStateAction<string[]>>;
}

const ChatContext = createContext<ChatContextType>({
  messages: [],
  setMessages: () => {},
});

const ChatProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <ChatContext.Provider value={{ messages, setMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };
