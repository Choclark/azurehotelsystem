import Taxes from "@/app/component/Accounts/Taxes"
import { Tax } from "@/app/component/interface/taxDetails"
import { revalidatePath ,revalidateTag } from "next/cache"
const getTax  = async () => {
    "use server"
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/account/taxes`,{next:{tags:["tax"]}})
    if(res.ok){
        const data:{data:Tax[]} = await res.json()
        return data.data
    }
    return []
}

const AddTax = async (newTax:Tax) => {
    "use server"
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/account/taxes`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newTax),
        next:{tags:["tax"]}
    })
    const data = await res.json()
    if(res.ok){
        revalidateTag("/account")
        revalidatePath("/accounts/taxes")
        revalidatePath("/dashboard")
        revalidatePath("/")
        return data.data
    }
    else {
        revalidatePath("/accounts/taxes")
    }
}
const page = async () => {
    const taxes:Tax[] = await getTax()
    let z = 0
  if(taxes.length == 0 && z<2){
    revalidateTag('tax')
    revalidatePath("/accounts/taxes")
    z+=1;
  }
  console.log(taxes)
  return (
    <Taxes Taxes={taxes} onAddTax={AddTax}/>
  )
}

export default page
