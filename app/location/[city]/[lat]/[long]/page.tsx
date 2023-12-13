import React from "react";
import { getClient } from "@/apollo-client";
import {fetchWeatherQueries} from "@/graphql/queries/fetchWeatherQueries"

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};
async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQueries,
    variables: {
      current: "true",
      longitude: long,
      latitude: lat,
      timezone: "GMT",
    },
  });

  const results = data.myQuery;

  console.log(results);
  return (
    <div>
      WeatherPage: {city} {lat} {long}
    </div>
  );
}

export default WeatherPage;
