import { App } from "./App"
import { Homepage } from "./Homepage/Homepage"
import { Tasks } from "./Tasks/Tasks"



export const routes = [

    {
        path: '/', 
        element: <App />, 
        children: [

            {index: true, element: <Homepage />},
            {path: 'tasks', element: <Tasks />}
        ]
    }
]