import { deleteUserAdmin } from '@/lib/services'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export default async function Page ({ params }) {
  const { id } = params
  await deleteUserAdmin(id)

  revalidatePath('/admin/users')
  redirect('/admin/users')
}
