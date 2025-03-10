import { App } from "./App"
import { Homepage } from "./Homepage/Homepage"
import { Projects } from "./Projects/Projects"
import { Tasks } from "./Tasks/Tasks"



export const routes = [

    {
        path: '/', 
        element: <App />, 
        children: [

            {index: true, element: <Homepage />},
            {path: 'tasks', element: <Tasks />}, 
            {path: 'projects', element: <Projects />}
        ]
    }
]