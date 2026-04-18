import { WeatherData } from '../types';

/**
 * Map OpenWeatherMap icon codes to Lucide icon names
 * @param iconCode OpenWeatherMap icon code
 * @returns Corresponding Lucide icon name
 */
export const mapWeatherIconToLucide = (iconCode: string): string => {
  const iconMap: Record<string, string> = {
    '01d': 'Sun', // clear sky day
    '01n': 'Moon', // clear sky night
    '02d': 'CloudSun', // few clouds day
    '02n': 'CloudMoon', // few clouds night
    '03d': 'Cloud', // scattered clouds
    '03n': 'Cloud',
    '04d': 'Cloud', // broken clouds
    '04n': 'Cloud',
    '09d': 'CloudDrizzle', // shower rain
    '09n': 'CloudDrizzle',
    '10d': 'CloudRain', // rain
    '10n': 'CloudRain',
    '11d': 'CloudLightning', // thunderstorm
    '11n': 'CloudLightning',
    '13d': 'CloudSnow', // snow
    '13n': 'CloudSnow',
    '50d': 'Cloud', // mist
    '50n': 'Cloud',
  };

  return iconMap[iconCode] || 'Cloud'; // Default to Cloud if icon code not found
};

/**
 * Fetch weather data from the API
 * @returns Transformed weather data
 */
export const fetchWeatherData = async (): Promise<WeatherData[]> => {
  // Use OpenWeatherMap directly for Maasin. Set your key in
  // VITE_OPENWEATHERMAP_API_KEY (this will be bundled into the frontend).
  const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY as string;
  if (!apiKey) {
    throw new Error('VITE_OPENWEATHERMAP_API_KEY is not defined');
  }

  // OpenWeatherMap city id for Maasin: 1704758
  const url = `https://api.openweathermap.org/data/2.5/weather?id=1704758&units=metric&appid=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`OpenWeather error: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();

  // Transform to WeatherData array (single-entry for Maasin)
  const transformedData: WeatherData[] = [
    {
      location: data.name || 'Maasin',
      temperature: Math.round(data?.main?.temp ?? 0),
      condition: data?.weather?.[0]?.description ?? '',
      icon: mapWeatherIconToLucide(data?.weather?.[0]?.icon ?? ''),
      humidity: data?.main?.humidity ?? 0,
      windSpeed: data?.wind?.speed ?? 0,
      pressure: data?.main?.pressure ?? 0,
      visibility: Math.round((data?.visibility ?? 0) / 1000),
    },
  ];

  return transformedData;
};
