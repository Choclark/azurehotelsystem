import Expenses from "@/app/component/Accounts/Expenses"
import { Expense } from "@/app/component/interface/expensesDetails"
import { client } from "@/sanity/lib/client"
import { revalidatePath,revalidateTag } from "next/cache"
const getExpenses = async () => {
  "use server"
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/account/expenses`,{next:{tags:["expenses"]}})
  if(res.ok){
      const data:{data:Expense[]} = await res.json()
      return data.data
  }
  return []
}
const onDelete =  async (_id:string) => {
  "use server"
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/account/expenses`,{
    method:"DELETE",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(_id),
  })
  const data:{data:Expense[]} = await res.json()
  if(res.ok){
    revalidateTag("expenses")
    revalidatePath("/accounts/expenses")
    revalidatePath("/dashboard")
    return data.data
  }
  else{
  }
  revalidatePath("/accounts/expenses")
}
const onEditExpenses = async (updateExpenses:Expense) => {
  "use server"
  const res = await client.patch(updateExpenses._id? updateExpenses._id : "").set({
    id:updateExpenses.id,
    category:updateExpenses.category,
    amount:updateExpenses.amount,
    date:updateExpenses.date,
  }).commit()
  revalidateTag('expenses')
  revalidatePath("/amounts/expenses")
  revalidatePath("/dashboard")  
}

const AddExpenses= async (newExpenses:Expense) => {
  "use server"
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/account/expenses`,{
      method:'POST',
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify(newExpenses),
  })
  const data = await res.json()
  if(res.ok){
      revalidateTag("expenses")
      revalidatePath("/accounts/expenses")
      revalidatePath("/dashboard")
      revalidatePath("/")
      return data.data
  }
  else {
      revalidatePath("/accounts/expenses")
  }
}
const page = async () => {
  const expenses:Expense[] = await getExpenses()
  let z = 0
  if(expenses.length === 0 && z<2){
    revalidateTag('expenses')
    revalidatePath("/accounts/expenses")
    z+=1
  }
  return (
    <Expenses expenses={expenses} onAdd={AddExpenses} onEdit={onEditExpenses} onDelete={onDelete}  />
  )
}

export default page