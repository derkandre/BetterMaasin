import { FC } from 'react';
import { Card, CardContent } from '../ui/Card';
import { useTranslation } from 'react-i18next';
import { Building2, HouseIcon } from 'lucide-react';

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
      id: 'city',
      title: t('government.city'),
      description: t('government.cityDescription'),
      link: '/government/executive',
      icon: <Building2 className='h-6 w-6' />,
    },
    {
      id: 'barangay',
      title: t('government.barangays'),
      description: t('government.barangaysDescription'),
      link: '/contact-us',
      icon: <HouseIcon className='h-6 w-6' />,
    },
  ];

  return (
    <section className='py-12 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-10'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
            {t('government.title')}
          </h2>
          <p className='text-gray-700 max-w-2xl mx-auto'>
            {t('government.description')}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
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
