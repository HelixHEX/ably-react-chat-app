import { Center } from "@chakra-ui/react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Chat from "./pages/Chat";

const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  return (
    <ClerkProvider frontendApi={frontendApi} navigate={(to) => navigate(to)}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <Chat />
              </SignedIn>
              <SignedOut>
                <Center w="100%" h="100vh">
                <SignIn />
                </Center>
              </SignedOut>
            </>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Center w="100%" h="100vh">
              <SignIn signUpUrl="sign-up" routing="path" path="/sign-in" />
            </Center>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Center w="100%" h="100vh">
              <SignUp signInUrl="sign-in" routing="path" path="/sign-up" />
            </Center>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}

export default App;
