import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL } from '~/data/consts.js'

export const useEstate = (id) => {
  const [estateItem, setEstateItem] = useState(null)
  const [estates, setEstates] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        if (id) {
          // Fetch estate item if ID is present
          const response = await axios.get(`${baseURL}/data/estates/${id}`)
          setEstateItem(response.data)
        } else {
          // Fetch all estates if no ID
          const response = await axios.get(`${baseURL}/data/estates`)
          setEstates(response.data)
        }
      } catch (err) {
        console.warn(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  if (id) return [estateItem, isLoading]
  else if (!id) return [estates, isLoading]
}
