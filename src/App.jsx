import { use, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { createContext } from 'react'
import { Link } from 'react-router-dom'
import { differenceInCalendarDays, differenceInDays, format } from 'date-fns'
import { da } from 'date-fns/locale'

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
      if(difference >= 8){

        const newTask = {id: crypto.randomUUID(), title: title, date: date}
        setUpcoming((prevTask) => [...prevTask, newTask])
      }
      else if(difference <= 0){

        const newTask = {id: crypto.randomUUID(), title: title, date: date}
        setDue((prevTask) => [...prevTask, newTask])

      }
     


      setAddTask(false)
      setTitle('')
      setDescription('')
      setDate('')

      console.log(myTask)

  }

  const AddProject = (title, description) => {

    if(title.trim() === "" || description.trim() === "") return

    const newProject = {id: crypto.randomUUID(), title: title, description: description}
    setMyprojects((prevProject) => [...prevProject, newProject])

    setAddProject(false)
    setTitle('')
    setDescription('')
    console.log(myProjects)

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

        <div className='flex flex-row min-h-screen max-w-screen'>
          
          <TaskContent.Provider value={{completed, due, upcoming, myTask, myProjects}}>

          <div className='flex flex-col w-[25vw] h-screen border-2 border-black items-start justify-evenly p-20 bg-[#EBFCFC]'>

                <div>
                    <div>Dashboard</div>
                    <hr />

                    <div className='flex flex-row'>

                      <Link to='/'>
                        <div>Icon</div>
                        <div>Home</div>
                      </Link>

                    </div>

                    <div className='flex flex-row'>
                      <div>Icon</div>
                      <div>Upcoming</div>
                    </div>

                    <div className='flex flex-row'>
                      <div>Icon</div>
                      <div>Completed</div>
                    </div>


                    <div className='flex flex-row'>
                      <div>Icon</div>
                      <div>Due</div>
                    </div>
                </div>

                <div>

                    <div>Task</div>
                    <hr />
                    
                    <div className='flex flex-row'>
                      <div>Icon</div>
                      <button onClick={() => setAddTask(true)}>Add Task</button>


                    </div>

                      {addTask && (

                            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs">

                            <div className="flex flex-col justify-evenly bg-[#FBE7C6] p-6 rounded shadow-lg w-[500px] h-fit gap-y-6">

                              <h2 className="text-xl">Add Title</h2>
                              <input type="text" className='border-b' onChange={(e) => setTitleInput(e.target.value)} />
                              
                              <h2 className="text-xl">Add Description</h2>
                              <input type="text" className='border-b' onChange={(e) => setDescriptionInput(e.target.value)} />

                              <h2 className="text-xl">Add Due Date</h2>
                              <input type='datetime-local' className='border-b' onChange={(e) => setDateInput(e.target.value)}  />

                              <button onClick={() => {

                                  setTitle(titleInput)
                                  setDescription(descriptionInput)
                                  setDate(dateInput)
                                  Addtask(title, description, date)
                              }} 
                              className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
                            </div>
                            </div>
                      )}

                      <Link to='tasks'>
                        <button>See All</button>
                    </Link>


                </div>

                <div>
                    <div>Projects</div>
                    <hr />

                    <div className='flex flex-row'>
                      <div>Icon</div>
                      <button onClick={() => setAddProject(true)}>Add Project</button>

                    </div>

                    {addProject && (
                            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs">

                            <div className="flex flex-col justify-evenly bg-[#FBE7C6] p-6 rounded shadow-lg w-[500px] h-fit gap-y-6">

                              <h2 className="text-xl">Add Title</h2>
                              <input type="text" className='border-b' onChange={(e) => setTitleInput(e.target.value)} />
                              
                              <h2 className="text-xl">Add Description</h2>
                              <input type="text" className='border-b' onChange={(e) => setDescriptionInput(e.target.value)} />

                              <button onClick={() => {

                                  setTitle(titleInput)
                                  setDescription(descriptionInput)
                                  AddProject(title, description)
                              }} 
                              className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
                            </div>
                            </div>

                    )}
                </div>
              
          </div>

          <div className='w-[75vw] h-screen overflow-y-scroll'>
            <Outlet />
          </div>
          </TaskContent.Provider>

          
        </div>

    </>
  )
}

