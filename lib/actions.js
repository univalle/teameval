'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createUser (formData) {
  const newUser = {
    name: formData.get('name') + ' ' + formData.get('lastname'),
    email: formData.get('email'),
    password: formData.get('password'),
    code: formData.get('code'),
    role: [formData.get('role').toUpperCase()]
  }

  const response = await fetch(
    'https://teameval-api.onrender.com/admins/users',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    }
  )

  if (!response.ok) {
    console.error('Error al crear el usuario')
    return
  }

  revalidatePath('/admin/users')
  redirect('/admin/users')
}

export async function updateUser (formData) {
  const id = formData.get('id')

  const updatedUser = {
    name: formData.get('name'),
    email: formData.get('email'),
    code: formData.get('code')
  }

  if (formData.get('role').toUpperCase() !== '') {
    updatedUser.role = [formData.get('role').toUpperCase()]
  }

  const response = await fetch(
    'https://teameval-api.onrender.com/admins/users/' + id,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    }
  )

  if (!response.ok) {
    console.error('Error al actualizar el usuario')
    return
  }

  revalidatePath('/admin/users')
  redirect('/admin/users')
}

export async function createGroup (formData) {
  const newGroup = {
    name: formData.get('name'),
    code: formData.get('code'),
    course: formData.get('course')
  }

  const response = await fetch(
    'https://teameval-api.onrender.com/admins/groups',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGroup)
    }
  )

  if (!response.ok) {
    console.error('Error al crear el grupo')
    return
  }

  revalidatePath('/admin/groups')
  redirect('/admin/groups')
}
