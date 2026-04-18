import departmentsData from '../../../data/lgu/departments.json';

export interface DepartmentOffice {
  office: string;
  head: string;
  contact: string | null;
  email: string | null;
}

export interface DepartmentCategory {
  category: string;
  offices: DepartmentOffice[];
  slug: string;
}

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

export const cityDepartments = (
  departmentsData as Omit<DepartmentCategory, 'slug'>[]
).map(item => ({
  ...item,
  slug: toSlug(item.category),
}));
