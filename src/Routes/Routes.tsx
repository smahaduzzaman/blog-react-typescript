import { createBrowserRouter } from "react-router-dom";
import BlogPost from "../Components/BlogPost";
import Home from "./../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/posts/:postId",
    element: <BlogPost></BlogPost>,
  },
]);

export default router;

// return fetch(``)
// .then((response) => response.json())
// .then((data) => data.find((item) => item.id === params.id));
