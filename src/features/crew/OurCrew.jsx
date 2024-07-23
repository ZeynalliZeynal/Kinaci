import Loader from '~/components/loader.jsx';
import { useCrew } from '~/features/crew/useCrew.js';

export default function OurCrew() {
  const { crew, isPending } = useCrew();
  return (
    <section className="text-blue-900 py-[50px]">
      <div className="container">
        <div className="grid gap-12">
          <div className="text-blue-900 text-center">
            <h2 className="mb-4">Bizim Heyət</h2>
            <p className="text-sm">Kinaci Group</p>
          </div>
          {isPending ? (
            <Loader />
          ) : (
            <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
              {crew?.map((member) => (
                <li
                  key={member?.id}
                  className="grid justify-center px-7 gap-3 text-center"
                >
                  <div>
                    <h3 className="text-5xl font-semibold">{member.name}</h3>
                    <p className="text-xl">{member.job_status}</p>
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-xl h-[300px]">
                    <img src={member.avatar} alt={member.name} />
                  </div>
                  <div className="text-xl leading-[200%]">
                    <a
                      href={`tel:${member.phone}`}
                      className="hover:scale-105 hover:text-orange-500"
                    >
                      {member.phone}
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
  );
}
