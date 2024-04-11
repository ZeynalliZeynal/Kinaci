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
          <div
            className="h-[500px] p-4 grid place-content-stretch lg:grid-cols-1 grid-cols-2 rounded-xl overflow-hidden"
            style={{
              backgroundImage: `url(${statsBg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className="w-[135px] h-[105px] rounded-[1rem] bg-orange-100 flex justify-center items-center">
              <span className="w-[90px]">
                <img src={kinaciLogo} alt="Kinaci" />
              </span>
            </div>
            {counterOn && (
              <div className="rounded-[1rem] bg-blue-900/50 lg:w-full lg:h-[180px] h-full w-fit lg:p-0 p-4 justify-self-end lg:place-self-end">
                <ul className="text-white h-full items-center justify-evenly grid lg:grid-cols-5 overflow-y-scroll">
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
                            className="stats-text font-bold"
                            ref={countUpRef}
                          />
                        )}
                      </CountUp>
                    )}{' '}
                    <span className="stats-title">Məmnun Müştəri</span>
                  </li>
                  <li className="flex-col">
                    {isLoading ? (
                      <LoaderCircular />
                    ) : (
                      <CountUp start={0} end={stats?.officialSale} duration={2}>
                        {({ countUpRef }) => (
                          <span
                            className="stats-text font-bold"
                            ref={countUpRef}
                          />
                        )}
                      </CountUp>
                    )}{' '}
                    <span className="stats-title">Rəsmi satış</span>
                  </li>
                  <li className="flex-col">
                    {isLoading ? (
                      <LoaderCircular />
                    ) : (
                      <CountUp start={0} end={stats?.estateExpert} duration={2}>
                        {({ countUpRef }) => (
                          <span
                            className="stats-text font-bold"
                            ref={countUpRef}
                          />
                        )}
                      </CountUp>
                    )}{' '}
                    <span className="stats-title">Əmlak Eksperti</span>
                  </li>
                  <li className="flex-col">
                    {isLoading ? (
                      <LoaderCircular />
                    ) : (
                      <CountUp start={0} end={stats?.annualExp} duration={2}>
                        {({ countUpRef }) => (
                          <span
                            className="stats-text font-bold"
                            ref={countUpRef}
                          />
                        )}
                      </CountUp>
                    )}{' '}
                    <span className="stats-title">İllik Təcrübə</span>
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
                            className="stats-text font-bold"
                            ref={countUpRef}
                          />
                        )}
                      </CountUp>
                    )}{' '}
                    <span className="stats-title">Əyalətdə Xidmət</span>
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
