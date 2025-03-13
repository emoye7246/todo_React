import { useContext, useState } from "react"
import { TaskContent } from "../App"
import { MyIcons } from "../Myassets/MyIcons"
import { format } from "date-fns"



export const Projects = () => {

    const {myProjects, addTaskProject} = useContext(TaskContent)

    const [addToProject, setAddToProject] = useState(false)

    const [title, setTitle] = useState('')
    const [titleInput, setTitleInput] = useState('')
  
    const [description, setDescription] = useState('')
    const [descriptionInput, setDescriptionInput] = useState('')
  
    const [date, setDate] = useState('')
    const [dateInput, setDateInput] = useState('')
  

    return (

        <>
        
            <div className="flex flex-col h-full w-full justify-evenly p-10 gap-y-8" id="fade-in">


            <div className="flex flex-row justify-evenly items-center border-b-2 ">
                    
                    <div className="flex flex-row">   
                        <img src={MyIcons.project} alt="projectIcon" className="h-[24px] w-[24px]"/>
                        <div>Projects</div>
                    </div>

                    <div className="flex flex-row">   
                        <div>{`${format(new Date(), 'MMMM, do, yyyy')}`}</div>
                    </div>
                    
                </div>

                <div className="grid grid-cols-1 grid-rows-1 gap-10">

                    {myProjects.map((task, i) => 

                        <div key={i} className="flex flex-col gap-y-5">

                            <div>

                                <div>
                                    <div>{task.title}</div>
                                    <hr className="w-48" />

                                    <button onClick={() => setAddToProject(true)}>Add Task</button>
                                    {addToProject && (

                                            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs" id="fade-in">

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
                                                addTaskProject(task.id, title, description, date)
                                                setAddToProject(false)
                                            }} 
                                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
                                            </div>
                                            </div>
                                    )}
                                </div>

                            </div>
                            
                            <div className="flex flex-col gap-y-6">
                                
                                {task.tasks.map((item, i) => 
                            
                                <div key={i} className="flex flex-col p-10  max-w-[500px] min-h-[300px]  bg-purple-50 rounded-[14px]">

                                    <div>
                                        <div>{item.title}</div>
                                        <hr className="flex w-48" />
                                    </div>

                                    <div>{item.Description}</div>

                                </div>
                            
                            )}</div>
                        </div>
                    )}

                </div>

            </div>
        </>
    )

}