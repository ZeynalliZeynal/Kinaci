import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Kinaci - 404'
  }, [])
  return <main>Page not found. error: 404</main>
}
