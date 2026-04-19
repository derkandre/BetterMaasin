import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { barangays } from './data';

export default function BarangaysIndexRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    if (barangays.length > 0) {
      navigate(
        `/government/barangays/${encodeURIComponent(barangays[0].slug)}`
      );
    }
  }, [navigate]);

  return (
    <div className='flex items-center justify-center h-64'>
      <div className='text-center'>
        <div className='animate-spin h-8 w-8 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-4'></div>
        <p className='text-gray-800'>Loading barangay directory...</p>
      </div>
    </div>
  );
}
