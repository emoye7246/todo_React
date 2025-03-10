import { useContext } from "react"
import { MyIcons } from "../Myassets/MyIcons"
import { Link } from "react-router-dom"
import { TaskContent } from "../App"

export const Dashboard = () => {


    return (

        <>
            <div className='flex flex-col h-full justify-evenly grow'>
            
                <div>
                    <div className='font-[caveatVariant]'>Dashboard</div>
                    <hr />
                </div>

                <div className='flex flex-row'>

                    <Link to='/' className='flex flex-row w-full justify-between gap-x-10'>

                    <div>Home</div>
                    <img src={MyIcons.Home} alt="homeIcon" className='h-[24px] w-[24px]'/>

                    </Link>

                </div>

                <div className='flex flex-row w-full justify-between gap-x-10'>
                    <div>Upcoming</div>
                    <img src={MyIcons.Upcoming} alt="upcomingIcon" className='h-[24px] w-[24px]' />
                </div>

                <div className='flex flex-row w-full justify-between gap-x-10'>

                    <div>Completed</div>
                    <img src={MyIcons.check} alt="checkIcon" className='h-[24px] w-[24px]' />

                </div>


                <div className='flex flex-row gap-x-10 w-full justify-between'>
                    <div>Due</div>
                    <img src={MyIcons.alert} alt="alertIcon" className='h-[24px] w-[24px]' />
                </div>
            </div>
        </>
    )
}

export const TaskComponents = () => {

    const {myTask, setAddTask, setDate, setDateInput, setTitle, setTitleInput, setDescription, setDescriptionInput, Addtask, addTask, titleInput, descriptionInput, dateInput, title, description, date} = useContext(TaskContent)


    return (

        <>
            <div className='flex flex-col h-full justify-evenly'>

                    <div className='flex flex-col'>

                      <div className='flex flex-row w-full justify-between'>

                        <div className='font-[caveatVariant]'>Tasks</div>
                        <div>{`${myTask.length}`}</div>
                      </div>
                      <hr />

                    </div>
                    
                    <div className='flex flex-row gap-x-10  items-center'>
                      <div>Add Task</div>
                      <img src={MyIcons.add} alt='addIcon' onClick={() => setAddTask(true)} className='w-[8px] h-[8px]'/>


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

        </>
    )
}

export const ProjectComponents = () => {

    const {title, myProjects, titleInput, descriptionInput, description, AddProject, setAddProject, setTitle, setTitleInput, setDescription, setDescriptionInput, addProject } = useContext(TaskContent)

    return (
        
        <>
            <div>
                <div className='flex flex-col h-full justify-evenly'>

                    <div className='flex flex-row w-full justify-between'>
                    <div className='font-[caveatVariant]'>Projects</div>
                    <div>{`${myProjects.length}`}</div>
                    </div>
                    <hr />
                    
                </div>

                <div className='flex flex-row gap-x-10  items-center mb-8'>
                    <div>Add Project</div>
                    <img src={MyIcons.add} alt='addIcon' onClick={() => setAddProject(true)} className='w-[8px] h-[8px]'/>
                </div>

                <div>See All</div>

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
        </>

    )
}