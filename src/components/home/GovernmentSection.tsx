import { FC } from 'react';
import { Card, CardContent } from '../ui/Card';
import { useTranslation } from 'react-i18next';

const ArrowRightIcon: FC = () => (
  <svg
    className='ml-1 h-4 w-4'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <line x1='5' y1='12' x2='19' y2='12'></line>
    <polyline points='12 5 19 12 12 19'></polyline>
  </svg>
);

const IconBadge: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600'>
    {children}
  </div>
);

const GovernmentSection: FC = () => {
  const { t } = useTranslation('common');

  const offices = [
    {
      id: 'mayor',
      title: t('government.localMayorTitle', 'City Mayor Office'),
      description: t(
        'government.localMayorDescription',
        'Programs, executive orders, and city-wide priorities.'
      ),
      link: '/government/executive',
      icon: (
        <svg
          className='h-6 w-6'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M12 17.8L5.8 21 7 14.1 2 9.3l7-1L12 2l3 6.3 7 1-5 4.8 1.2 6.9-6.2-3.2z'></path>
        </svg>
      ),
    },
    {
      id: 'council',
      title: t('government.localCouncilTitle', 'Sangguniang Panlungsod'),
      description: t(
        'government.localCouncilDescription',
        'Ordinances, resolutions, and legislative updates.'
      ),
      link: '/government/legislative',
      icon: (
        <svg
          className='h-6 w-6'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <rect x='2' y='7' width='20' height='14' rx='2' ry='2'></rect>
          <path d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'></path>
        </svg>
      ),
    },
    {
      id: 'services',
      title: t('government.localServicesTitle', 'Public Service Offices'),
      description: t(
        'government.localServicesDescription',
        'Find contacts for health, permits, social welfare, and emergency help.'
      ),
      link: '/contact-us',
      icon: (
        <svg
          className='h-6 w-6'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M3 21h18'></path>
          <path d='M12 3v18'></path>
          <path d='M5 8h14'></path>
          <path d='M5 16h14'></path>
        </svg>
      ),
    },
  ];

  return (
    <section className='py-12 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-10'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
            {t('government.localTitle', 'City Government')}
          </h2>
          <p className='text-gray-700 max-w-2xl mx-auto'>
            {t(
              'government.localDescription',
              'Access your city offices, local legislation, and essential public services in one place.'
            )}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {offices.map(office => (
            <Card
              key={office.id}
              hoverable
              className='h-full border border-gray-200 text-center'
            >
              <CardContent className='p-6 h-full flex flex-col'>
                <IconBadge>{office.icon}</IconBadge>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  {office.title}
                </h3>
                <p className='text-gray-700 mb-5 flex-1'>
                  {office.description}
                </p>
                <a
                  href={office.link}
                  className='text-primary-600 hover:text-primary-700 font-medium inline-flex items-center justify-center transition-colors'
                >
                  {t('government.learnMore', 'Learn More')}
                  <ArrowRightIcon />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernmentSection;
