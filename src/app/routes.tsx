import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
import { MapView } from "./pages/MapView";
import { Profile } from "./pages/Profile";
import { Notifications } from "./pages/Notifications";
import { Chat } from "./pages/Chat";
import { CityDetails } from "./pages/CityDetails";
import { PlaceDetails } from "./pages/PlaceDetails";
import { TourGuideProfile } from "./pages/TourGuideProfile";
import { Challenges } from "./pages/Challenges";
import { AddMemory } from "./pages/AddMemory";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/add-memory",
    Component: AddMemory,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "map", Component: MapView },
      { path: "notifications", Component: Notifications },
      { path: "profile", Component: Profile },
      { path: "chat", Component: Chat },
      { path: "city/:cityName", Component: CityDetails },
      { path: "place/:placeId", Component: PlaceDetails },
      { path: "guide/:guideId", Component: TourGuideProfile },
      { path: "challenges", Component: Challenges },
    ],
  },
]);
