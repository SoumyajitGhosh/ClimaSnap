const cleanData = (data: Root, city: string) => {
  const { current, timezone, hourly, hourly_units, timezone_abbreviation } =
    data;

  const {
    temperature_2m,
    wind_speed_10m,
    wind_direction_10m,
    weather_code,
    time,
  } = current;

  const {
    snowfall,
    rain,
    relative_humidity_2m,
    precipitation_probability,
    uv_index,
  } = hourly;

  return {
    current: {
      temperature_2m,
      wind_speed_10m,
      wind_direction_10m,
      weather_code,
      time,
    },
    hourly: {
      snowfall: snowfall.slice(0, 24),
      rain: rain.slice(0, 24),
      relative_humidity_2m: relative_humidity_2m.slice(0, 24),
      precipitation_probability: precipitation_probability.slice(0, 24),
      uv_index: uv_index.slice(0, 24),
    },
    timezone,
    timezone_abbreviation,
    hourly_units,
    city,
  };
};

export default cleanData;
