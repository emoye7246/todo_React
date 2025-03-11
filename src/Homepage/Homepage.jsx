import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { TaskContent } from "../App"
import { MyIcons } from "../Myassets/MyIcons"
import { format } from "date-fns"

export const Homepage = () => {

    const {completed, due, upcoming, myTask, myProjects} = useContext(TaskContent)

    useEffect(() => {



    }, [due, upcoming])

    return (

        <>
            <div className="flex flex-col h-full w-full justify-evenly p-20 gap-y-30 " id="fade-in">

                <div className="flex flex-row justify-evenly items-center border-b-2 ">
                    
                    <div className="flex flex-row gap-x-8">   
                       <img src={MyIcons.Home} alt="homeIcon" className=" w-[24px] h-[24px]" />
                        <div>Home</div>
                    </div>

                    <div className="flex flex-row">   
                        <div>{`${format(new Date(), 'MMMM, do, yyyy')}`}</div>
                    </div>
                    
                </div>
                


                <div className="flex flex-row justify-evenly">

                        <div>
                            <div>Completed</div>
                            <div className="flex w-[250px] h-[400px] rounded-[14px] bg-[#B4F8C8] items-center justify-center text-2xl">{
                            `${completed.length}`}
                            </div>
                        </div>
                        <div>
                            <div>Upcoming</div>
                            <div className="flex w-[250px] h-[400px] rounded-[14px] bg-[#A0E7E5] items-center justify-center text-2xl">{
                            `${upcoming.length}`}
                            </div>
                        </div>
                        <div>
                            <div>Due</div>
                            <div className="flex w-[250px] h-[400px] rounded-[14px] bg-[#FFAEBC] items-center justify-center text-2xl">{
                            `${due.length}`}
                            </div>
                        </div>

                </div>

                <div className="flex flex-col justify-center text-center gap-y-8">

                    <h2 className="text-3xl">Your Tasks</h2>

                    <div>You have {`${myTask.length}`} Tasks</div>
                    

                    <div className="grid grid-cols-2 grid-rows-1 content-center gap-x-10">

                    {myTask.slice(0, 2).map((task, i) => 

                            <div className="max-w-[500px] min-h-[300px]  bg-purple-50 rounded-[14px]" key={i}>
                                    
                                    <div className="flex flex-col h-full items-start justify-evenly p-10">

                                        <div>
                                            <div>{task.title}</div>
                                            <hr className="flex w-48" /> 
                                        </div>

                                        <div>{task.Description}</div>

                                        <div>{`This task is due on: ${format(new Date(`${task.date}`), 'MMMM. do, yyyy')}`}</div>


                                    </div>
                            </div>
                        
                    )}
                    </div>


                </div>

                 <div className="flex flex-col justify-center text-center gap-y-8">

                    <h2 className="text-3xl">Your Projects</h2>
                    <div>You have {`${myProjects.length}`} Projects</div>

                    <div className="grid grid-cols-2 grid-rows-1 content-center gap-x-10">

                    {myProjects.slice(0, 2).map((task, i) => 

                            <div className="max-w-[500px] min-h-[300px] bg-yellow-100 rounded-[14px]" key={i}>
                                    
                                    <div className="flex flex-col h-full items-start justify-evenly p-10">

                                        <div>
                                            <div>{task.title}</div>
                                            <hr className="flex w-48" /> 
                                        </div>

                                        <div>{task.description}</div>

                                        <div>{`You have ${task.tasks.length} tasks in this project`}</div>


                                    </div>
                            </div>
                        
                    )}
                    </div>

                </div>

            </div>
        </>
    )
}