import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignInPage from "../../container/sign-in";
import ChatPage from "../../container/chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
]);

const RouterProviderComponent = () => {
  return <RouterProvider router={router} />;
};

export default RouterProviderComponent;
