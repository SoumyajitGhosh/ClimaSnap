import { gql } from "@apollo/client";

export const fetchWeatherQueries = gql`
  query MyQuery(
    $current: String = "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m"
    $daily: String = "weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max"
    $hourly: String = "temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,wind_gusts_10m,uv_index,uv_index_clear_sky"
    $latitude: String!
    $longitude: String!
    $timezone: String!
  ) {
    myQuery(
      current: $current
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
      current {
        apparent_temperature
        cloud_cover
        interval
        is_day
        precipitation
        pressure_msl
        rain
        relative_humidity_2m
        showers
        snowfall
        surface_pressure
        temperature_2m
        time
        weather_code
        wind_direction_10m
        wind_gusts_10m
        wind_speed_10m
      }
      current_units {
        apparent_temperature
        cloud_cover
        interval
        is_day
        precipitation
        pressure_msl
        rain
        relative_humidity_2m
        showers
        snowfall
        surface_pressure
        temperature_2m
        time
        weather_code
        wind_direction_10m
        wind_gusts_10m
        wind_speed_10m
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weather_code
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weather_code
      }
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        dew_point_2m
        precipitation
        precipitation_probability
        rain
        relative_humidity_2m
        showers
        snow_depth
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        wind_gusts_10m
      }
      hourly_units {
        apparent_temperature
        dew_point_2m
        precipitation
        precipitation_probability
        rain
        relative_humidity_2m
        showers
        snow_depth
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        wind_gusts_10m
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }
`;
