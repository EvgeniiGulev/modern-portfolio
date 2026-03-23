import { Route, Routes } from "react-router-dom";
import { CursorBubble } from "./components/layout/CursorBubble.tsx";
import { RootLayout } from "./components/layout/RootLayout";
import { SmoothScroll } from "./components/layout/SmoothScroll.tsx";
import { NotFoundPage } from "./pages/NotFoundPage";
import { UIKitPage } from "./pages/dev/ui-kit/UIKitPage";
import { HomePage } from "./pages/HomePage";

const App = () => {
  const isLocalhost = ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);

  return (
    <>
      <SmoothScroll />
      <CursorBubble />
      <Routes>
        <Route path="/ui" element={isLocalhost ? <UIKitPage /> : <NotFoundPage />} />
        <Route
          path="/"
          element={
            <RootLayout>
              <HomePage />
            </RootLayout>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
