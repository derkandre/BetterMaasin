import {
  Building2Icon,
  ExternalLinkIcon,
  ScrollTextIcon,
  ShieldAlertIcon,
} from 'lucide-react';
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
              <ScrollTextIcon className='h-5 w-5 text-primary-600' />
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

      {/* Data Source Card */}
      <div className='rounded-lg border border-yellow-100 bg-yellow-50/60 p-4 md:p-5'>
        <div className='flex items-start gap-3'>
          <div className='rounded-full bg-white p-2 border border-yellow-100'>
            <ShieldAlertIcon className='h-4 w-4 text-yellow-700' />
          </div>

          <div className='min-w-0'>
            <h2 className='text-sm font-semibold text-yellow-900'>
              Data Source and Freshness
            </h2>
            <p className='mt-1 text-sm text-yellow-900/90 leading-relaxed'>
              Information shown are sourced from official Maasin City Government
              records and publicly published office directories. Information may
              change without prior notice. Verify the information through the
              source link or contact the relevant office.
            </p>

            <div className='mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-yellow-800'>
              <span>
                <span>Source: </span>
                <a
                  href='https://maasincity.gov.ph/index.php/government/directory'
                  className='text-blue-600 underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  City Government Website
                  <ExternalLinkIcon
                    className='h-3 w-3 inline-block ml-1 mb-0.75'
                    aria-hidden='true'
                  />
                </a>
              </span>
              <span>Coverage: Executive and legislative officials</span>
              <span>Last verified: April 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
