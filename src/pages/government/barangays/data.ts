import barangaysData from '../../../data/lgu/barangays.json';

interface BarangaySourceItem {
  name: string;
  barangay_captain: string;
  fiesta: string;
  contact_numbers: string[];
}

export interface Barangay {
  name: string;
  barangay_captain: string;
  fiesta: string;
  contact_numbers: string[];
  slug: string;
}

const toSlug = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

export const barangays: Barangay[] = (
  barangaysData.barangays as BarangaySourceItem[]
).map(item => ({
  ...item,
  slug: toSlug(item.name),
}));
