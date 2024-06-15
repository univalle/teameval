export const getAllUsersAdmin = async () => {
  try {
    const response = await fetch(
      'https://teameval-api.onrender.com/admins/users'
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getAllCoursesAdmin = async () => {
  try {
    const response = await fetch(
      'https://teameval-api.onrender.com/admins/courses'
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getAllEvaluationsAdmin = async () => {
  try {
    const response = await fetch(
      'https://teameval-api.onrender.com/admins/evaluations'
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getAllGroupsAdmin = async () => {
  try {
    const response = await fetch(
      'https://teameval-api.onrender.com/admins/groups'
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const deleteUserAdmin = async id => {
  try {
    await fetch(`https://teameval-api.onrender.com/admins/users/${id}`, {
      method: 'DELETE'
    })
  } catch (error) {
    console.log(error)
  }
}

export const getOneUserAdmin = async id => {
  try {
    const response = await fetch(
      `https://teameval-api.onrender.com/admins/users/${id}`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getCoursesByUserAdmin = async id => {
  try {
    const response = await fetch(
      `https://teameval-api.onrender.com/admins/courses-user/${id}`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getStudentProfile = async id => {
  try {
    const response = await fetch(
      'https://teameval-api.onrender.com/students/profile'
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getStudentEvaluations = async id => {
  try {
    const response = await fetch(
      'https://teameval-api.onrender.com/students/evaluations'
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getStudentCourses = async id => {
  try {
    const response = await fetch(
      'https://teameval-api.onrender.com/students/courses'
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getStudentGroups = async id => {
  try {
    const response = await fetch(
      'https://teameval-api.onrender.com/students/groups'
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getProfessorProfile = async id => {
  try {
    const response = await fetch(
      'https://teameval-api.onrender.com/professors/profile'
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getProfessorCourses = async id => {
  try {
    const response = await fetch(
      'https://teameval-api.onrender.com/professors/courses'
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getProfessorGroups = async id => {
  try {
    const response = await fetch(
      'https://teameval-api.onrender.com/professors/groups'
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getProfessorEvaluations = async id => {
  try {
    const response = await fetch(
      'https://teameval-api.onrender.com/professors/evaluations'
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
