import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import DetailedInformation from "./pages/Skills";
import HobbyProjects from "./pages/Hobby";
import ProjectsWorkedOn from "./pages/Project";
import { BASE_URL, SKILLS_URL, PROJECT_URL, HOBBY_URL, BASE_TITLE, SKILLS_TITLE, HOBBY_TITLE, PROJECT_TITLE } from "./constant/pageInfo";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home title={BASE_TITLE} />,
  },
  {
    path: SKILLS_URL,
    element: <DetailedInformation title={SKILLS_TITLE} />,
  },
  {
    path: HOBBY_URL,
    element: <HobbyProjects title={HOBBY_TITLE} />,
  },
  {
    path: PROJECT_URL,
    element: <ProjectsWorkedOn title={PROJECT_TITLE} />,
  },
], {
  basename: BASE_URL,
});


export default function ApplictionRoutes() {
  return (
    <RouterProvider router={router} />
  )
}