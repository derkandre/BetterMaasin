import {
  Building2Icon,
  CalendarIcon,
  PhoneIcon,
  ExternalLinkIcon,
} from 'lucide-react';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDivider,
  CardHeader,
} from '../../../components/ui/CardList';
import { barangays } from './data';

export default function BarangayDetailsPage() {
  const { barangay } = useParams<{ barangay: string }>();

  const barangayData = barangays.find(item => item.slug === barangay);

  if (!barangayData) {
    return (
      <div className='bg-white rounded-lg p-6 shadow-xs'>
        <h1 className='text-2xl font-bold text-gray-900 mb-4'>
          Barangay Not Found
        </h1>
        <p className='text-gray-800'>
          The requested barangay could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className='space-y-6 @container'>
      <div>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>
          Barangay {barangayData.name}
        </h1>
        <p className='text-gray-800'>
          Barangay leadership and contact information.
        </p>
      </div>

      <Card hover={false} className='h-full flex flex-col'>
        <CardHeader className='flex-none min-h-[110px]'>
          <div className='flex items-start justify-between gap-3 h-full'>
            <div className='flex-1'>
              <h2 className='font-semibold text-base text-gray-900 leading-tight'>
                Barangay Captain
              </h2>
              <p className='text-sm text-primary-600 font-medium mt-1'>
                {barangayData.barangay_captain}
              </p>
            </div>
            <div className='rounded-full bg-gray-100 p-2 shrink-0'>
              <Building2Icon className='h-5 w-5 text-gray-600' />
            </div>
          </div>
        </CardHeader>

        <CardDivider />

        <CardContent className='flex-1 space-y-3'>
          <div className='flex items-start gap-2 text-sm'>
            <CalendarIcon className='h-4 w-4 text-gray-400 flex-shrink-0 mt-0.5' />
            <span className='text-gray-700'>Fiesta: {barangayData.fiesta}</span>
          </div>

          <div className='space-y-2'>
            <p className='text-sm font-medium text-gray-700'>Contact Numbers</p>
            {barangayData.contact_numbers.length > 0 ? (
              <div className='space-y-1'>
                {barangayData.contact_numbers.map(contact => (
                  <div key={contact} className='flex items-start gap-2 text-sm'>
                    <PhoneIcon className='h-4 w-4 text-gray-400 flex-shrink-0 mt-0.5' />
                    <span className='text-gray-700'>{contact}</span>
                  </div>
                ))}
              </div>
            ) : (
              <span className='text-sm text-gray-400 italic'>
                No contact available
              </span>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Data Source Card */}
      <div className='rounded-lg border border-yellow-100 bg-yellow-50/60 p-4 md:p-5'>
        <div className='flex items-start gap-3'>
          <div className='rounded-full bg-white p-2 border border-yellow-100'>
            <Building2Icon className='h-4 w-4 text-yellow-700' />
          </div>

          <div className='min-w-0'>
            <h2 className='text-sm font-semibold text-yellow-900'>
              Data Source and Freshness
            </h2>
            <p className='mt-1 text-sm text-yellow-900/90 leading-relaxed'>
              Barangay listings are compiled from official Maasin City
              Government records. Information may change without prior notice.
            </p>

            <div className='mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-yellow-800'>
              <span>
                <span>Source: </span>
                <a
                  href='https://maasincity.gov.ph/index.php/government/barangay'
                  className='text-blue-600 underline'
                >
                  City Government Website
                  <ExternalLinkIcon className='h-3 w-3 inline-block ml-1 mb-0.75' />
                </a>
              </span>
              <span>Coverage: Barangay officials and contacts</span>
              <span>Last verified: April 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
