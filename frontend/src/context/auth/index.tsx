import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type UserModel = {
  username: string;
};
interface AuthContextType {
  user: UserModel;

  setUser: Dispatch<SetStateAction<UserModel>>;
}

const AuthContext = createContext<AuthContextType>({
  user: {
    username: "",
  },
  setUser: () => {},
});

const AuthProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserModel>({
    username: "",
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
