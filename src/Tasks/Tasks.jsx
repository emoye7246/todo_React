import { useContext } from "react"
import { TaskContent } from "../App"

export const Tasks = () => {

    const {myTask} = useContext(TaskContent)

    return (

        <>
            <div className="flex flex-col h-full w-full justify-evenly p-10 gap-y-8">


            <div className="flex flex-row justify-evenly items-center border-b-2 ">
                    
                    <div className="flex flex-row">   
                        <div>Icon</div>
                        <div>Home</div>
                    </div>

                    <div className="flex flex-row">   
                        <div>March 9th 2025</div>
                    </div>
                    
                </div>

                <div className="grid grid-cols-2 grid-rows-1 gap-x-10">

                    {myTask.map((task) => 

                        <div className="w-[500px] h-[300px] bg-blue-400">

                            heloo

                        </div>
                    )}

                </div>

            </div>
        </>
    )
}