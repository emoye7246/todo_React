import { useContext } from "react"
import { TaskContent } from "../App"
import { MyIcons } from "../Myassets/MyIcons"
import { format } from "date-fns"

export const Tasks = () => {

    const {myTask, setCompleted, setMyTasks, setUpcoming, setDue} = useContext(TaskContent)

    const AddtoCompleted = (title, description, id) => {

        const newTask = {id: crypto.randomUUID(), title: title, description: description,  message: `This task was completed on ${format(new Date(), 'MMMM, do, yyyy')}`}
        setCompleted((prevCompleted) => [...prevCompleted, newTask])

        myTask.splice(myTask.indexOf(id), 1)
        localStorage.setItem('tasks', JSON.stringify(myTask))
        
    }

    const removeTask = (itemRemove) => {

        setMyTasks(myTask.filter((item) => item.id !== itemRemove))
        setUpcoming(myTask.filter((item) => item.id !== itemRemove))
        setDue(myTask.filter((item) => item.id !== itemRemove))
    }

    return (

        <>
            <div className="flex flex-col h-full w-full justify-evenly p-10 gap-y-8">


            <div className="flex flex-row justify-evenly items-center border-b-2 ">
                    
                    <div className="flex flex-row">   
                        <img src={MyIcons.task} alt="projectIcon" className="h-[24px] w-[24px]"/>
                        <div>Tasks</div>
                    </div>

                    <div className="flex flex-row">   
                        <div>{`${format(new Date(), 'MMMM, do, yyyy')}`}</div>
                    </div>
                    
                </div>

                <div className="grid grid-cols-2 grid-rows-1 gap-10">

                    {myTask.map((task, i) => 

                        <div key={i} className="flex flex-col gap-y-5">

                            <div className="w-[500px] h-[300px] bg-blue-400 rounded-[14px]">

                                <div className="flex flex-col h-full items-start justify-evenly p-10" >
                                    
                                    <div>
                                        <div>{task.title}</div>
                                        <hr className="flex w-48" />
                                    </div>

                                    <div>{task.Description}</div>

                                    <div>{`This task is due on: ${format(new Date(`${task.date}`), 'MMMM. do, yyyy')}`}</div>
                                    

                                </div>

                            </div>

                            <div className="flex flex-row w-full justify-between">
                                <button onClick={() => AddtoCompleted(task.title, task.Description, task.id)}>Add to Completed</button>
                                <button onClick={() => removeTask(task.id)}>Delete this task</button>
                            </div>
                        </div>

                        
                    )}

                </div>

            </div>
        </>
    )
}