import { ReactNode } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Building2Icon, StarIcon, HouseIcon } from 'lucide-react';
import { cn } from '../../lib/utils';
import officialsData from '../../data/lgu/officials.json';

interface GovernmentLayoutProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function GovernmentLayout({ children }: GovernmentLayoutProps) {
  // Get current path to highlight active tab
  const location = useLocation();
  const currentPath = location.pathname;

  // Define branch data
  const branches = [
    {
      title: 'City Officials',
      description: `Meet the City Mayor, Vice Mayor, and ${officialsData.legislative.officials.length} Sangguniang Panlungsod members serving Maasin City.`,
      icon: <StarIcon className='h-4 w-4' />,
      path: '/government/city-officials',
    },
    {
      title: 'City Departments',
      description:
        'Browse the city offices and departments that handle public services, programs, and daily administration.',
      icon: <Building2Icon className='h-4 w-4' />,
      path: '/government/city-departments',
    },
    {
      title: 'The Barangays',
      description:
        'Explore the barangays of Maasin City and access community-level contact and local information.',
      icon: <HouseIcon className='h-4 w-4' />,
      path: '/government/barangays',
    },
  ];

  // Check if we're on the main government page
  const isMainPage =
    currentPath === '/government' || currentPath === '/government/';

  return (
    <div className='container mx-auto px-4 md:px-0'>
      <div className='py-8 md:py-12 text-center flex flex-col justify-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
          The Maasin City Government Directory
        </h2>
        <p className='text-sm md:text-base text-gray-800'>
          Explore local officials, city offices, and barangays in one place.
        </p>
      </div>

      {/* Card Tabs Navigation */}
      <div className='mb-8 md:mb-12 overflow-x-auto'>
        <div className='inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 min-w-full md:min-w-0 px-4 py-2'>
          {branches.map(branch => {
            const isActive = currentPath.includes(branch.path);
            return (
              <Link
                key={branch.path}
                to={branch.path}
                className={cn(
                  'group flex flex-col p-3 md:p-4 rounded-md shadow-sm ring-1 ring-neutral-300',
                  'hover:bg-primary-500/95',
                  isActive && 'text-neutral-50  bg-primary-500'
                )}
                state={{ scrollToContent: true }}
              >
                <div className='flex items-center gap-1 mb-1 group-hover:text-neutral-200'>
                  <div className='mr-2 text-xs md:text-sm'>{branch.icon}</div>
                  {branch.title}
                </div>
                <div
                  className={cn(
                    'text-neutral-500 group-hover:text-neutral-200 text-xs md:text-sm',
                    isActive && 'text-neutral-200'
                  )}
                >
                  {branch.description}
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {!isMainPage && (
        <div className='px-4 md:px-0 pb-12'>{children || <Outlet />}</div>
      )}
    </div>
  );
}
