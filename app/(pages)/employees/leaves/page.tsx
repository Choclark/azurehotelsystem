import {StaffDetails} from "@/app/component/interface/staffDetails"
import Leave from "@/app/component/leave"
const getStaff  = async () => {
    "use server"
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/staff`,{next:{tags:["staff"]}})
    const data:{data:StaffDetails[]} = await res.json()
    return data.data
}
const page = async () => {
    const SheetParams = {
        title:"Employees Leaves",
        tableParams:[
            "ID",
            "Name",
            "Email",
            "From",
            "To",
            "Enterprise Postion",
        ]
    }
    const AllStaff = await getStaff()
    const leaveStaff = AllStaff.filter(staff => staff.leave == false)
  return (
    <Leave sheetParams={SheetParams} data={leaveStaff}/>
  )
}

export default page
