import { Outlet } from 'react-router-dom';
import GovernmentPageContainer from '../GovernmentPageContainer';
import CityDepartmentsSidebar from './components/CityDepartmentsSidebar';

export default function CityDepartmentsLayout() {
  return (
    <GovernmentPageContainer sidebar={<CityDepartmentsSidebar />}>
      <Outlet />
    </GovernmentPageContainer>
  );
}
