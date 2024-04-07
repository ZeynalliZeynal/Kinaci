import { useEffect, useState } from 'react'
import axios from 'axios'
import statsBg from '~/assets/img/stats.png'
import kinaciLogo from '~/assets/img/logo.png'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import LoaderCircular from '~/components/LoaderCircular.jsx'

const url = 'https://kinaci-server.onrender.com/data/statsData'

export default function StatisticsSection() {
  const [isLoading, setIsLoading] = useState(false)
  const [stats, setStats] = useState(null)
  const [counterOn, setCounterOn] = useState(false)
  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(url)
        const data = await res.data
        if (res.status === 200) {
          setStats(data)
        }
      } catch (err) {
        console.warn(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStatistics()
  }, [])

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)}>
      <section>
        <div className="container">
          <div className="relative">
            <div>
              <img src={statsBg} alt="Stats" />
            </div>
            <div className="absolute w-[270px] h-[210px] rounded-[1rem] bg-orange-100 flex justify-center items-center top-[30px] -left-[135px]">
              <span className="w-[165px]">
                <img src={kinaciLogo} alt="Kinaci" />
              </span>
            </div>
            {counterOn && (
              <div className="absolute rounded-[1rem] bg-blue-900/50 bottom-4 h-[180px] left-4 right-4">
                <ul className="text-white h-full items-center justify-evenly">
                  <li className="flex-col">
                    {isLoading ? (
                      <LoaderCircular />
                    ) : (
                      <CountUp
                        start={0}
                        end={stats?.pleasentCustomers}
                        duration={2}
                      >
                        {({ countUpRef }) => (
                          <span
                            className="text-6xl font-bold"
                            ref={countUpRef}
                          />
                        )}
                      </CountUp>
                    )}{' '}
                    <span className="text-xl">Məmnun Müştəri</span>
                  </li>
                  <li className="flex-col">
                    {isLoading ? (
                      <LoaderCircular />
                    ) : (
                      <CountUp start={0} end={stats?.officialSale} duration={2}>
                        {({ countUpRef }) => (
                          <span
                            className="text-6xl font-bold"
                            ref={countUpRef}
                          />
                        )}
                      </CountUp>
                    )}{' '}
                    <span className="text-xl">Rəsmi satış</span>
                  </li>
                  <li className="flex-col">
                    {isLoading ? (
                      <LoaderCircular />
                    ) : (
                      <CountUp start={0} end={stats?.estateExpert} duration={2}>
                        {({ countUpRef }) => (
                          <span
                            className="text-6xl font-bold"
                            ref={countUpRef}
                          />
                        )}
                      </CountUp>
                    )}{' '}
                    <span className="text-xl">Əmlak Eksperti</span>
                  </li>
                  <li className="flex-col">
                    {isLoading ? (
                      <LoaderCircular />
                    ) : (
                      <CountUp start={0} end={stats?.annualExp} duration={2}>
                        {({ countUpRef }) => (
                          <span
                            className="text-6xl font-bold"
                            ref={countUpRef}
                          />
                        )}
                      </CountUp>
                    )}{' '}
                    <span className="text-xl">İllik Təcrübə</span>
                  </li>
                  <li className="flex-col">
                    {isLoading ? (
                      <LoaderCircular />
                    ) : (
                      <CountUp
                        start={0}
                        end={stats?.servicePerYear}
                        duration={2}
                      >
                        {({ countUpRef }) => (
                          <span
                            className="text-6xl font-bold"
                            ref={countUpRef}
                          />
                        )}
                      </CountUp>
                    )}{' '}
                    <span className="text-xl">Əyalətdə Xidmət</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </ScrollTrigger>
  )
}
