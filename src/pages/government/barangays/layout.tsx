import { Outlet } from 'react-router-dom';
import GovernmentPageContainer from '../GovernmentPageContainer';
import BarangaysSidebar from './components/BarangaySidebar';

export default function BarangaysLayout() {
  return (
    <GovernmentPageContainer sidebar={<BarangaysSidebar />}>
      <Outlet />
    </GovernmentPageContainer>
  );
}
