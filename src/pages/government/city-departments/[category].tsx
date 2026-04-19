import {
  Building2Icon,
  MailIcon,
  PhoneIcon,
  ExternalLinkIcon,
  LandmarkIcon,
  ClipboardPenLineIcon,
  ShieldBanIcon,
  HeartIcon,
  BoltIcon,
  UsersIcon,
  CalculatorIcon,
  PhilippinePesoIcon,
  BinocularsIcon,
  HeartPulseIcon,
  HandHeartIcon,
  ShieldAlertIcon,
  TrafficConeIcon,
  ScaleIcon,
  PersonStandingIcon,
  Wallet2Icon,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDivider,
  CardHeader,
} from '../../../components/ui/CardList';
import { cityDepartments } from './data';

export default function CityDepartmentsCategory() {
  const { category } = useParams<{ category: string }>();

  const categoryData = cityDepartments.find(item => item.slug === category);

  if (!categoryData) {
    return (
      <div className='bg-white rounded-lg p-6 shadow-xs'>
        <h1 className='text-2xl font-bold text-gray-900 mb-4'>
          Category Not Found
        </h1>
        <p className='text-gray-800'>
          The requested department category could not be found.
        </p>
      </div>
    );
  }

  const categoryIconMap = {
    'executive-offices': Building2Icon,
    'finance-administration': LandmarkIcon,
    'planning-economic': ClipboardPenLineIcon,
    'public-safety': ShieldBanIcon,
    'health-social': HeartIcon,
  };

  const toSlug = (value: string) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

  const categoryIcon =
    categoryIconMap[categoryData.slug as keyof typeof categoryIconMap] ??
    Building2Icon;

  const officeIconMap: Record<
    string,
    ComponentType<SVGProps<SVGSVGElement>>
  > = {
    'city-mayors-office': Building2Icon,
    'city-administrator': Building2Icon,
    'city-legal-office': ScaleIcon,

    'city-treasurer': LandmarkIcon,
    'city-assessor': PhilippinePesoIcon,
    'city-accountant': CalculatorIcon,
    'city-budget-office': Wallet2Icon,
    'city-human-resource-chrmdo': UsersIcon,
    'general-services-gso': BoltIcon,

    'city-planning-cpdo': ClipboardPenLineIcon,
    'city-tourism-office-cipto': BinocularsIcon,

    'city-health-officer': HeartPulseIcon,
    'social-welfare-cswdo': HandHeartIcon,
    'senior-citizen-affairs-osca': PersonStandingIcon,

    'city-drrmo': ShieldAlertIcon,
    'traffic-enforcement-cteu': TrafficConeIcon,
  };

  return (
    <div className='space-y-6 @container'>
      <div>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>
          {categoryData.category}
        </h1>
        <p className='text-gray-800'>
          Offices and contact points under this city government category.
        </p>
      </div>

      <div className='grid grid-cols-1 @lg:grid-cols-2 @3xl:grid-cols-3 gap-6'>
        {categoryData.offices.map(office => {
          const officeSlug = toSlug(office.office);
          const Icon =
            officeIconMap[officeSlug] ?? categoryIcon ?? Building2Icon;

          return (
            <Card
              key={office.office}
              hover={false}
              className='h-full flex flex-col'
            >
              <CardHeader className='flex-none min-h-[110px]'>
                <div className='flex items-start justify-between gap-3 h-full'>
                  <div className='flex-1'>
                    <h2 className='font-semibold text-base text-gray-900 leading-tight'>
                      {office.office}
                    </h2>
                    <p className='text-sm text-primary-600 font-medium mt-1'>
                      {office.head}
                    </p>
                  </div>
                  <div className='rounded-full bg-gray-100 p-2 shrink-0'>
                    <Icon className='h-5 w-5 text-gray-600' />
                  </div>
                </div>
              </CardHeader>

              <CardDivider />

              <CardContent className='flex-1 space-y-3'>
                {office.contact ? (
                  <div className='flex items-start gap-2 text-sm'>
                    <PhoneIcon className='h-4 w-4 text-gray-400 flex-shrink-0 mt-0.5' />
                    <span className='text-gray-700'>{office.contact}</span>
                  </div>
                ) : (
                  <span className='text-sm text-gray-400 italic'>
                    No contact available
                  </span>
                )}

                {office.email ? (
                  <a
                    href={`mailto:${office.email}`}
                    className='flex items-start gap-2 text-sm text-primary-600 hover:underline'
                  >
                    <MailIcon className='h-4 w-4 text-gray-400 flex-shrink-0 mt-0.5' />
                    <span className='break-all'>{office.email}</span>
                  </a>
                ) : null}
              </CardContent>
            </Card>
          );
        })}
      </div>

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
              Department listings are compiled from official Maasin City
              Government records and published office directories. Information
              may change without prior notice.
            </p>

            <div className='mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-yellow-800'>
              <span>
                <span>Source: </span>
                <a
                  href='https://maasincity.gov.ph/index.php/government/directory'
                  className='text-blue-600 underline'
                >
                  City Government Website
                  <ExternalLinkIcon className='h-3 w-3 inline-block ml-1 mb-0.75' />
                </a>
              </span>
              <span>Coverage: Offices per category</span>
              <span>Last verified: April 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
