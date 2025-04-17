import Dashboard from "@pages/Dashboard/Dashboard"
import Login from "@pages/Login/Login"

const PublicRoutes =[
{path:"/", element:<Dashboard/>},
{path:"/dashboard", element:<Dashboard/>}, 
{path:"/login", element:<Login/>}    

]

export default PublicRoutes;