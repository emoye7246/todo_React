import { useContext } from "react"
import { MyIcons } from "../../Myassets/MyIcons"
import { TaskContent } from "../../App"
import { format } from "date-fns"

export const Due = () => {
    
    const {due} = useContext(TaskContent)

    return (

        <>
            <div className="flex flex-col h-full w-full justify-evenly p-10 gap-y-8" id="fade-in">
        
        
                    <div className="flex flex-row justify-evenly items-center border-b-2 ">
                            
                            <div className="flex flex-row gap-x-10">   
                                <img src={MyIcons.alert} alt="projectIcon" className="h-[24px] w-[24px]"/>
                                <div>Due</div>
                            </div>
        
                            <div className="flex flex-row">   
                                <div>{`${format(new Date(), 'MMMM, do, yyyy')}`}</div>
                            </div>
                            
                        </div>
        
                        <div className="grid grid-cols-2 grid-rows-1 gap-10">
        
                            {due.map((task, i) => 
        
                                <div key={i} className="flex flex-col gap-y-5">
        
                                    <div className="w-[500px] h-[300px] bg-[#FFAEBC] rounded-[14px]">
        
                                        <div className="flex flex-col h-full items-start justify-evenly p-10" >
                                            
                                            <div>
                                                <div>{task.title}</div>
                                                <hr className="flex w-48" />
                                            </div>
        
                                            <div>{task.Description}</div>
        
                                            <div>{task.message}</div>
                                            
        
                                        </div>
        
                                    </div>

                                </div>
                            )}
        
                        </div>
        
                    </div>
        </>
    )
}