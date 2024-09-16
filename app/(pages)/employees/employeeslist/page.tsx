import Leave from "@/app/component/leave"

import {StaffDetails} from "@/app/component/interface/staffDetails"
const getStaff  = async () => {
    "use server"
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/staff`,{next:{tags:["staff"]}})
    const data:{data:StaffDetails[]} = await res.json()
    return data.data
}

const page = async () => {
    const AllEmployee:StaffDetails[] = await getStaff()
const SheetParams = {
    title:"Employees List",
    tableParams:[
        "ID",
        "Name",
        "Email",
        "From",
        "To",
        "Enterprise Postion",
    ]
}

  return (
    <Leave sheetParams={SheetParams} data={AllEmployee}/>

  )
}

export default page
