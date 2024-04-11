import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '~/components/loader.jsx'

const url = 'https://kinaci-server.onrender.com/data/crewData'

export default function OurCrew() {
  const [isLoading, setIsLoading] = useState(false)
  const [crew, setCrew] = useState([])
  useEffect(() => {
    const fetchCrew = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(url)
        const data = await res.data

        if (res.status === 200) setCrew(data)
      } catch (err) {
        console.warn(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCrew()
  }, [])
  return (
    <section className="text-blue-900 py-[50px]">
      <div className="container">
        <div className="grid gap-12">
          <div className="text-blue-900 text-center">
            <h2 className="mb-4">Bizim Heyət</h2>
            <p className="text-sm">Kinaci Group</p>
          </div>
          {isLoading ? (
            <Loader />
          ) : (
            <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
              {crew.map((member) => (
                <li
                  key={member?.id}
                  className="grid justify-center px-7 gap-3 text-center"
                >
                  <div>
                    <h3 className="text-5xl font-semibold">
                      {member.memberName}
                    </h3>
                    <p className="text-xl">{member.jobStatus}</p>
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-xl h-[300px]">
                    <img src={member.profile_photo} alt={member.memberName} />
                  </div>
                  <div className="text-xl leading-[200%]">
                    <a
                      href={`tel:${member.phone_number}`}
                      className="hover:scale-105 hover:text-orange-500"
                    >
                      {member.phone_number}
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="hover:scale-105 hover:text-orange-500"
                    >
                      {member.email}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
