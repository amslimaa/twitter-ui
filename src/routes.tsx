import { createBrowserRouter } from "react-router-dom";
import { Status } from "./pages/Status";
import { Default } from "./layouts/Default";
import { Timeline } from "./pages/Timeline";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Timeline />
      },
      {
        path: '/status',
        element: <Status />
      }
    ]
  },
])