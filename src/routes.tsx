import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import DetailedInformation from "./pages/Cv";
import HobbyProjects from "./pages/Hobby";
import ProjectsWorkedOn from "./pages/Project";
import { BASE_URL, CV_URL, PROJECT_URL, HOBBY_URL } from "./constant/urls";
import { BASE_TITLE, CV_TITLE, HOBBY_TITLE, PROJECT_TITLE } from "./constant/pageTitles";


// TODO extract array to constant file 
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home title={BASE_TITLE}/>,
    },
    {
        path: CV_URL,
        element: <DetailedInformation title={CV_TITLE} />,
    },
    {
        path: HOBBY_URL,
        element: <HobbyProjects title={HOBBY_TITLE} />,
    },
    {
        path: PROJECT_URL,
        element: <ProjectsWorkedOn title={PROJECT_TITLE}/>,
    },
], {
    basename: BASE_URL,
});


export default function ApplictionRoutes() {
    return (
        <RouterProvider router={router} />
    )
}