import {
  Building2Icon,
  ShieldBanIcon,
  LandmarkIcon,
  HeartIcon,
  ClipboardPenLineIcon,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import StandardSidebar from '../../../../components/ui/StandardSidebar';
import { cityDepartments } from '../data';

export default function CityDepartmentsSidebar() {
  const categoryIconMap = {
    'executive-offices': Building2Icon,
    'finance-administration': LandmarkIcon,
    'planning-economic': ClipboardPenLineIcon,
    'public-safety': ShieldBanIcon,
    'health-social': HeartIcon,
  };

  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <StandardSidebar>
      <nav className='p-2 pt-4'>
        <h3 className='px-3 text-xs font-medium text-gray-800 uppercase tracking-wider mb-2'>
          City Department Categories
        </h3>

        <ul className='space-y-1'>
          {cityDepartments.map(item => {
            const path = `/government/city-departments/${encodeURIComponent(item.slug)}`;

            const Icon =
              categoryIconMap[item.slug as keyof typeof categoryIconMap] ??
              Building2Icon;

            return (
              <li key={item.slug}>
                <Link
                  to={path}
                  state={{ scrollToContent: true }}
                  title={item.category}
                  className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                    isActive(path)
                      ? 'bg-primary-50 text-primary-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className='h-4 w-4 mr-2 text-gray-400 flex-shrink-0' />
                  <span>{item.category}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </StandardSidebar>
  );
}
