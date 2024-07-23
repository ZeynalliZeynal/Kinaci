import { useState } from 'react';
import statsBg from '~/assets/img/stats.png';
import kinaciLogo from '~/assets/img/logo.png';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import LoaderCircular from '~/components/LoaderCircular.jsx';
import { useStats } from '~/features/stats/useStats.js';

export default function StatisticsSection() {
  const [counterOn, setCounterOn] = useState(false);
  const { stats, isPending } = useStats();

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
                  {stats?.map(({ number, title }) => (
                    <li className="flex-col" key={title}>
                      {isPending ? (
                        <LoaderCircular />
                      ) : (
                        <CountUp
                          start={0}
                          end={number}
                          duration={2}
                          className="stats-text font-bold"
                        />
                      )}{' '}
                      <span className="stats-title text-center">{title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
}
