import { Building2Icon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import StandardSidebar from '../../../../components/ui/StandardSidebar';
import { barangays } from '../data';

export default function BarangaysSidebar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <StandardSidebar>
      <nav className='p-2 pt-4'>
        <h3 className='px-3 text-xs font-medium text-gray-800 uppercase tracking-wider mb-2'>
          Barangays
        </h3>

        <ul className='space-y-1'>
          {barangays.map(item => {
            const path = `/government/barangays/${encodeURIComponent(item.slug)}`;

            return (
              <li key={item.slug}>
                <Link
                  to={path}
                  state={{ scrollToContent: true }}
                  title={item.name}
                  className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                    isActive(path)
                      ? 'bg-primary-50 text-primary-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Building2Icon className='h-4 w-4 mr-2 text-gray-400 flex-shrink-0' />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </StandardSidebar>
  );
}
