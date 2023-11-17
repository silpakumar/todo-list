import { createBrowserRouter } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import App from "./App";
import Greeting from "./components/Greeting";
import ListPosts from "./components/blog/ListPosts";
import CreatePosts from "./components/blog/CreatePosts";
import ViewPosts from "./components/blog/ViewPosts";
import EditPosts from "./components/blog/EditPosts";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";



const router = createBrowserRouter([
    {path:'',element: <App/>},
    {path:'aboutus', element: <Aboutus/>},
    {path:'greeting/:name',element:<Greeting/>},
    {path:'blog/posts',element:<ListPosts/>},
    {path:'blog/posts/create', element:<CreatePosts/>},
    {path:'blog/posts/:postId', element: <ViewPosts/>},
    {path:'blog/posts/:postId/edit',element:<EditPosts/>},
    {path: 'register', element:<Register/>},
    {path: 'login', element:<Login/>}

]);

export default router;