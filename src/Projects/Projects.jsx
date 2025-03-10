import { useContext } from "react"
import { TaskContent } from "../App"
import { MyIcons } from "../Myassets/MyIcons"
import { format } from "date-fns"

export const Projects = () => {

    const {myProjects} = useContext(TaskContent)

    return (

        <>
        
            <div className="flex flex-col h-full w-full justify-evenly p-10 gap-y-8">


            <div className="flex flex-row justify-evenly items-center border-b-2 ">
                    
                    <div className="flex flex-row">   
                        <img src={MyIcons.project} alt="projectIcon" className="h-[24px] w-[24px]"/>
                        <div>Projects</div>
                    </div>

                    <div className="flex flex-row">   
                        <div>{`${format(new Date(), 'MMMM, do, yyyy')}`}</div>
                    </div>
                    
                </div>

                <div className="grid grid-cols-2 grid-rows-1 gap-10">

                    {myProjects.map((task) => 

                        <div className="flex flex-col gap-y-5">

                            <div className="w-[500px] h-[300px] bg-yellow-100 rounded-[14px]">

                                heloo

                            </div>

                            <div className="flex flex-row w-full justify-between">
                                <button>Add to Completed</button>
                                <button>Edit this task</button>
                                <button>Delete this task</button>
                            </div>
                        </div>
                    )}

                </div>

            </div>
        </>
    )

}