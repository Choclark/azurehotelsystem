import { ObjectiveDetails } from "@/app/component/interface/objectiveDetails"
import Settings from "@/app/component/Setting"
import { client } from "@/sanity/lib/client"
import { revalidatePath, revalidateTag } from "next/cache"

const getSetting = async () => {
    "use server"
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/setting`, { next: { tags: ["setting"] } })
    if(res.ok){
        const data = await res.json()
    
    return data.data
    }
    else {
        return []
    }
}
const updateData = async (objectivesSave:ObjectiveDetails) => {
    "use server"
    const res = await client.patch(objectivesSave._id ? objectivesSave._id : "").set(
        {
            bookingObjective:objectivesSave.bookingObjective,
            customerObjective:objectivesSave.customerObjective,
            roomObjective:objectivesSave.roomObjective,
            employeeObjective:objectivesSave.employeeObjective,
        }
    ).commit()
    revalidateTag('setting')
    revalidatePath('/settings')
    revalidatePath('/dashboard')
}
const SaveData = async (objectivesSave:ObjectiveDetails) => {
    "use server"
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/setting`)

    if(res.ok){
        const data:{data:ObjectiveDetails[]} = await res.json()
        if(data.data.length > 0){
            updateData(objectivesSave)
        }
        else{
            const responds = await fetch(`${process.env.NEXTAUTH_URL}/api/setting`,{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objectivesSave)
            })
            if(responds.ok){
                const data:{data:ObjectiveDetails[]} = await responds.json()
                revalidateTag('setting')
                revalidatePath('/settings')
                revalidatePath('/dashboard')
            }
        }
    }
}
const page = async () => {
    const objectives:ObjectiveDetails[] = await getSetting()

  return (
    <Settings objectives={objectives} onSave={SaveData}/>
  )
}

export default page
