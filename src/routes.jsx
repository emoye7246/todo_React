import { App } from "./App"
import { Homepage } from "./Homepage/Homepage"
import { Completed } from "./Pages/Completed/completed"
import { Due } from "./Pages/Due/Due"
import { Upcoming } from "./Pages/Upcoming/upcoming"
import { Projects } from "./Projects/Projects"
import { Tasks } from "./Tasks/Tasks"



export const routes = [

    {
        path: '/', 
        element: <App />, 
        children: [

            {index: true, element: <Homepage />},
            {path: 'tasks', element: <Tasks />}, 
            {path: 'projects', element: <Projects />},
            {path: 'upcoming', element: <Upcoming />},
            {path: 'completed', element: <Completed />},
            {path: 'due', element: <Due />}
        ]
    }
]