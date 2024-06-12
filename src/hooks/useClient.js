// @hooks/useClient.js
import { useState } from 'react'

const useClient = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const post = async (url, data) => {
    setLoading(true)
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const responseData = await response.json()
      setLoading(false)
      return responseData
    } catch (error) {
      setLoading(false)
      setError(error)
      throw error
    }
  }

  return { loading, error, post }
}

export default useClient
