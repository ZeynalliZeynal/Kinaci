import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { HiChevronDown } from 'react-icons/hi2';
import { useEffect, useState } from 'react';

export default function SidebarLink({ props }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsAccordionOpen(false);
  }, [location.pathname]);
  return (
    <li className="h-full group w-full justify-between flex-col">
      <span className="inline-flex w-full justify-between">
        <NavLink
          to={props.to}
          className="font-semibold h-full hover:translate-x-1"
        >
          {({ isActive }) => (
            <span className={classNames({ 'text-orange-500': isActive })}>
              {props.name}
            </span>
          )}
        </NavLink>{' '}
        {props.extendable && (
          <button
            className={`size-5 hover:translate-y-0.5 ${isAccordionOpen ? 'text-orange-500 rotate-180' : ''}`}
            onClick={() => setIsAccordionOpen((prevState) => !prevState)}
          >
            <HiChevronDown />
          </button>
        )}
      </span>{' '}
      {isAccordionOpen && (
        <ul className="overflow-hidden flex-col w-full text-sm items-start py-3 px-4">
          {props.extendable?.map((prop) => (
            <li
              key={prop.to}
              className="relative before:absolute before:top-0 before:left-0 before:w-0.5 before:h-full before:bg-blue-900 px-2 py-1"
            >
              <NavLink
                to={prop.to}
                className="font-semibold h-full hover:translate-x-1"
              >
                {({ isActive }) => (
                  <span className={classNames({ 'text-orange-500': isActive })}>
                    {prop.name}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
