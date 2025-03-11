import { useContext } from "react"
import { TaskContent } from "../../App"
import { MyIcons } from "../../Myassets/MyIcons"
import { format } from "date-fns"

export const Upcoming = () => {

    const {upcoming} = useContext(TaskContent)

    return (

        <>
            <div className="flex flex-col h-full w-full justify-evenly p-10 gap-y-8" id="fade-in">
        
        
                    <div className="flex flex-row justify-evenly items-center border-b-2 ">
                            
                            <div className="flex flex-row gap-x-10">   
                                <img src={MyIcons.Upcoming} alt="projectIcon" className="h-[24px] w-[24px]"/>
                                <div>Upcoming</div>
                            </div>
        
                            <div className="flex flex-row">   
                                <div>{`${format(new Date(), 'MMMM, do, yyyy')}`}</div>
                            </div>
                            
                        </div>
        
                        <div className="grid grid-cols-2 grid-rows-1 gap-10">
        
                            {upcoming.map((task, i) => 
        
                                <div key={i} className="flex flex-col gap-y-5">
        
                                    <div className="w-[500px] h-[300px] bg-[#A0E7E5] rounded-[14px]">
        
                                        <div className="flex flex-col h-full items-start justify-evenly p-10" >
                                            
                                            <div>
                                                <div>{task.title}</div>
                                                <hr className="flex w-48" />
                                            </div>
        
                                            <div>{task.Description}</div>
        
                                            <div>{`This task is due on: ${format(new Date(`${task.date}`), 'MMMM. do, yyyy')}`}</div>
                                            
        
                                        </div>
        
                                    </div>

                                </div>
                            )}
        
                        </div>
        
                    </div>
        </>
    )
}