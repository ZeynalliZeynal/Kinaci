import { useFindUser } from '~/features/auth/useFindUser.js';

export default function UserInfo({ estateItem = {} }) {
  const { user_id } = estateItem;
  const { user } = useFindUser(user_id);
  return (
    <div className="p-[30px] bg-white shadow-section rounded-xl">
      <h3 className="text-4xl font-semibold text-blue-900 mb-5">Sual ver</h3>
      <div>
        <div className="size-[200px] rounded-full overflow-hidden hidden justify-center mx-auto md:flex">
          <img
            src={user?.user_metadata.avatar || '/image/default_user_pp.png'}
            alt={user?.user_metadata.fullName}
          />
        </div>
        <div className="grid gap-4">
          <div className="mt-4">
            <h4 className="text-3xl font-bold">
              {user?.user_metadata.fullName}
            </h4>
            <p>{user?.user_metadata.job_status || 'Elan Sahibi'}</p>
          </div>

          <div>
            E-mail:
            <a
              href={`mailto:${user?.email}`}
              className="text-xxs sm:text-md text-orange-500 hover:text-orange-500/70"
            >
              {user?.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
