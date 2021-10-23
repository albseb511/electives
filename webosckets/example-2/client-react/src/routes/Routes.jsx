import React from 'react'
import {Route} from 'react-router-dom'

const routes = [
    {
        path: "/",
        component: <>Home</>
    },
    {
        path: "/room/:id",
        component: <>Room</>
    },
]

const Routes = () => {
    return (
        <div>
            {
                routes.map(item=><Route key={item.path} path={item.path}> {item.component}</Route>)
            }
        </div>
    )
}

export default Routes
