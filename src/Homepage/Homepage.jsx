import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { TaskContent } from "../App"

export const Homepage = () => {

    const {completed, due, upcoming, myTask, myProjects} = useContext(TaskContent)

    useEffect(() => {



    }, [due, upcoming])

    return (

        <>
            <div className="flex flex-col h-full w-full justify-evenly p-20 gap-y-30 ">

                <div className="flex flex-row justify-evenly items-center border-b-2 ">
                    
                    <div className="flex flex-row">   
                        <div>Icon</div>
                        <div>Home</div>
                    </div>

                    <div className="flex flex-row">   
                        <div>March 9th 2025</div>
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

                    <h2>Your Tasks</h2>
                    

                    <div className="grid grid-cols-2 grid-rows-1 content-center gap-x-10">

                    {myTask.slice(0, 2).map((task) => 

                            <div className="max-w-[500px] min-h-[300px] border">
                                    Hello
                            </div>
                        
                    )}
                    </div>



                </div>

                 <div className="flex flex-col justify-center text-center gap-y-8">

                    <h2>Your Projects</h2>
                    

                    <div className="grid grid-cols-2 grid-rows-1 content-center gap-x-10">

                    {myProjects.slice(0, 2).map((task) => 

                            <div className="max-w-[500px] min-h-[300px] border">
                                    Hello
                            </div>
                        
                    )}
                    </div>

                    <div>See All</div>

                </div>

                


            </div>
        </>
    )
}