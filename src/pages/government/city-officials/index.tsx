import { Building2Icon, UsersIcon } from 'lucide-react';
import {
  Card,
  CardContent,
  CardGrid,
  CardTitle,
} from '../../../components/ui/CardList';
import officialsData from '../../../data/lgu/officials.json';

type Official = {
  role: string;
  name: string;
};

type OfficialsData = {
  executive: {
    officials: Official[];
  };
  legislative: {
    officials: Official[];
  };
};

const officials = officialsData as OfficialsData;

export default function CityOfficialsIndex() {
  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>
          City Officials
        </h1>
        <p className='text-gray-800 max-w-2xl'>
          View the current executive and legislative officials serving the City
          of Maasin.
        </p>
      </div>

      <CardGrid columns={2} breakpoint='lg' gap='lg'>
        <Card variant='featured' className='border-t-4 border-primary-500'>
          <CardContent>
            <div className='flex items-center gap-2 mb-4'>
              <Building2Icon className='h-5 w-5 text-primary-600' />
              <CardTitle level='h2'>Executive Officials</CardTitle>
            </div>

            <div className='space-y-3'>
              {officials.executive.officials.map(official => (
                <div
                  key={official.name}
                  className='rounded-md border border-gray-200 bg-gray-50 px-4 py-3'
                >
                  <p className='text-xs font-medium uppercase tracking-wide text-primary-600'>
                    {official.role}
                  </p>
                  <p className='text-base font-semibold text-gray-900'>
                    {official.name}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card variant='featured' className='border-t-4 border-primary-500'>
          <CardContent>
            <div className='flex items-center gap-2 mb-4'>
              <UsersIcon className='h-5 w-5 text-primary-600' />
              <CardTitle level='h2'>Legislative Officials</CardTitle>
            </div>

            <div className='space-y-3'>
              {officials.legislative.officials.map(official => (
                <div
                  key={`${official.role}-${official.name}`}
                  className='rounded-md border border-gray-200 bg-gray-50 px-4 py-3'
                >
                  <p className='text-xs font-medium uppercase tracking-wide text-primary-600'>
                    {official.role}
                  </p>
                  <p className='text-base font-semibold text-gray-900'>
                    {official.name}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </CardGrid>
    </div>
  );
}
