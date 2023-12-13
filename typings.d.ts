interface Current {
  apparent_temperature: string;
  cloud_cover: number;
  interval: number;
  is_day: number;
  precipitation: number;
  pressure_msl: string;
  rain: number;
  relative_humidity_2m: number;
  showers: number;
  snowfall: number;
  surface_pressure: string;
  temperature_2m: string;
  time: string;
  weather_code: number;
  wind_direction_10m: number;
  wind_gusts_10m: string;
  wind_speed_10m: string;
}

interface CurrentUnits {
  apparent_temperature: string;
  cloud_cover: string;
  interval: string;
  is_day: string;
  precipitation: string;
  pressure_msl: string;
  rain: string;
  relative_humidity_2m: string;
  showers: string;
  snowfall: string;
  surface_pressure: string;
  temperature_2m: string;
  time: string;
  weather_code: string;
  wind_direction_10m: string;
  wind_gusts_10m: string;
  wind_speed_10m: string;
}

interface Daily {
  apparent_temperature_max: [number];
  apparent_temperature_min: [number];
  sunrise: [string];
  sunset: [string];
  temperature_2m_max: [number];
  temperature_2m_min: [number];
  time: [string];
  uv_index_clear_sky_max: [number];
  uv_index_max: [number];
  weather_code: [number];
}

interface DailyUnits {
  apparent_temperature_max: string;
  apparent_temperature_min: string;
  sunrise: string;
  sunset: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  time: string;
  uv_index_clear_sky_max: string;
  uv_index_max: string;
  weather_code: string;
}

interface Hourly {
  apparent_temperature: string;
  dew_point_2m: string;
  precipitation: string;
  precipitation_probability: string;
  rain: string;
  relative_humidity_2m: string;
  showers: string;
  snow_depth: string;
  snowfall: string;
  temperature_2m: string;
  time: string;
  uv_index: string;
  uv_index_clear_sky: string;
  wind_gusts_10m: string;
}

interface Hourly {
  apparent_temperature: [number];
  dew_point_2m: [number];
  precipitation: [number];
  precipitation_probability: [number];
  rain: [number];
  relative_humidity_2m: [number];
  showers: [number];
  snow_depth: [number];
  snowfall: [number];
  temperature_2m: [number];
  time: [string];
  uv_index: [number];
  uv_index_clear_sky: [number];
  wind_gusts_10m: [number];
}

interface HourlyUnits {
  apparent_temperature: string;
  dew_point_2m: string;
  precipitation: string;
  precipitation_probability: string;
  rain: string;
  relative_humidity_2m: string;
  showers: string;
  snow_depth: string;
  snowfall: string;
  temperature_2m: string;
  time: string;
  uv_index: string;
  uv_index_clear_sky: string;
  wind_gusts_10m: string;
}

interface Root {
  current: Current;
  current_units: CurrentUnits;
  daily: Daily;
  daily_units: DailyUnits;
  elevation: Int;
  generationtime_ms: Float;
  hourly: Hourly;
  hourly_units: HourlyUnits;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}
