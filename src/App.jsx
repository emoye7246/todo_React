import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { createContext } from 'react'
import { differenceInCalendarDays, differenceInDays, format } from 'date-fns'
import { Dashboard, ProjectComponents, TaskComponents } from './Navbar/NavComponents'

export const TaskContent = createContext(null)

export const App = () => {

  const [completed, setCompleted] = useState(() => {

    try{

      const savedCompleted = localStorage.getItem('completed')
      return savedCompleted ? JSON.parse(savedCompleted) : []

    }catch(error){

      console.log(error)
      return []
    }
  })
  const [due, setDue] = useState(() => {

    try{

      const savedDue = localStorage.getItem('due')
      return savedDue ? JSON.parse(savedDue) : []

    }catch(error){

      console.log(error)
      return []
    }
  })
  const [upcoming, setUpcoming] = useState(() => {


    try{

      const savedUpcoming = localStorage.getItem('upcoming')
      return savedUpcoming ? JSON.parse(savedUpcoming) : []

    }catch(error){

      console.log(error)
      return []
    }
  })

  const [addTask, setAddTask] = useState(false)
  const [myTask, setMyTasks] = useState(() => {

    try {

      const savedTasks = localStorage.getItem('tasks')
      return savedTasks ? JSON.parse(savedTasks) : []
    }catch(error){

      console.log(error)
      return []
      
    }

  })

  const [addProject, setAddProject] = useState(false)
  const [myProjects, setMyprojects] = useState(() => {

    try{

      const savedProjects = localStorage.getItem('projects')
      return savedProjects ? JSON.parse(savedProjects) : []

    }catch(error){

      console.log(error)
      return []
    }

  })

  const [title, setTitle] = useState('')
  const [titleInput, setTitleInput] = useState('')

  const [description, setDescription] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')

  const [date, setDate] = useState('')
  const [dateInput, setDateInput] = useState('')



  const Addtask = (title, Description, date) => {

    if (title.trim() === "" || description.trim() === "" || date.trim() === "") return;

      const newTask = {id: crypto.randomUUID(), title: title, Description: Description, date: date}
      setMyTasks((prevTask) => [...prevTask, newTask])

      const difference = differenceInCalendarDays(date, new Date())
      if(difference > 0){

        setUpcoming((prevTask) => [...prevTask, newTask])
        
      }
      else if(difference <= 0){

        const newTaskDue = {id: crypto.randomUUID(), title: title, Description: Description, date: date, message: `This task was due ${differenceInCalendarDays(new Date(), date)} days ago`}
        setDue((prevTask) => [...prevTask, newTaskDue])

      }
     
      setAddTask(false)
      setTitle('')
      setDescription('')
      setDate('')

  }

  const AddProject = (title, description) => {

    if(title.trim() === "" || description.trim() === "") return

    const newProject = {id: crypto.randomUUID(), title: title, description: description, tasks: [] || []}
    setMyprojects((prevProject) => [...prevProject, newProject])

    setAddProject(false)
    setTitle('')
    setDescription('')

  }

  const addTaskProject = (id, title, description, date) => {
    
    const difference = differenceInCalendarDays(date, new Date())
    const newTask = {id: crypto.randomUUID(), title: title, description: description, date: date}
    setMyprojects((prevProject) => prevProject.map((project) => project.id === id ? {...project, tasks: [...project.tasks, newTask]} : project))


    if (title.trim() === "" || description.trim() === "" || date.trim() === "") return;
      

      if(difference > 0){

        setUpcoming((prevTask) => [...prevTask, newTask])
        
      }
      else if(difference <= 0){

        setDue((prevTask) => [...prevTask, newTask])

      }else{

        setUpcoming((prevTask) => [...prevTask, newTask])


      }
    
  }



  useEffect(() => {

    localStorage.setItem('tasks', JSON.stringify(myTask))
    localStorage.setItem('projects', JSON.stringify(myProjects))
    localStorage.setItem('upcoming', JSON.stringify(upcoming))
    localStorage.setItem('completed', JSON.stringify(completed))
    localStorage.setItem('due', JSON.stringify(due))



  }, [myTask, myProjects, due, upcoming, completed])


  return (
    <>

        <div className='flex flex-row min-h-screen max-w-screen text-[24px] ' style={{fontFamily: 'Caveat'}}>
          
          <TaskContent.Provider value={{title, description, descriptionInput, dateInput, titleInput, date, completed, due, upcoming, myTask, myProjects, addTask, addProject,  setAddTask, setTitleInput, setDescriptionInput, setDateInput, setTitle, setDescription, setDate, Addtask, setAddProject, AddProject, setCompleted, setMyTasks, setUpcoming, setDue, addTaskProject}}>

          <div className='flex flex-col w-[25vw] min-h-full border-2 border-black items-start justify-evenly p-20 bg-[#EBFCFC] overflow-y-scroll'>
                <Dashboard />
                <TaskComponents/>
                <ProjectComponents/>
          </div>

          <div className='w-[75vw] h-screen overflow-y-scroll'>
            <Outlet />
          </div>
          </TaskContent.Provider>

          
        </div>

    </>
  )
}

