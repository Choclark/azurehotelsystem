import ProvidentFund from "@/app/component/Accounts/ProvidentFund"
import { Contributor } from "@/app/component/interface/contributorDetail"
import { revalidatePath,revalidateTag } from "next/cache"
const getContributor = async () => {
  "use server"
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/account/contributor`,{next:{tags:["contributor"]}})
  if(res.ok){
      const data:{data:Contributor[]} = await res.json()
      return data.data
  }
  return []
}

const AddContributor= async (newContributor:Contributor) => {
  "use server"
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/account/contributor`,{
      method:'POST',
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify(newContributor),
      next:{tags:["contributor"]}
  })
  const data = await res.json()
  if(res.ok){
      revalidateTag("/account")
      revalidatePath("/accounts/providentfund")
      revalidatePath("/dashboard")
      revalidatePath("/")
      return data.data
  }
  else {
      revalidatePath("/accounts/taxes")
  }
}
const page = async () => {
  const constributors:Contributor[] = await getContributor()
  let z = 0
  if(constributors.length == 0 && z<2){
    revalidateTag('contributor')
    revalidatePath("/accounts/providentfunds")
    z+=1;
  }
  return (
    <ProvidentFund contributors={constributors} onAddContributor={AddContributor}/>
    )
}

export default page
