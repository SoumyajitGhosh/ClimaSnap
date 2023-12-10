"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Subtitle, Text, Divider } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#18387E] p-10 flex flex-xol justify-center items-center">
      <Card className="max-w-4xl"> 
        <Text className="text-6xl font-bold text-center mb-10">
          ClimaSnap
        </Text>
        {/* <h1>Let's build something</h1> */}
        <Subtitle className="text-xl text-center">
          Powered by OpenAI, NextJS, Tailwind CSS, Tremor and More
        </Subtitle>

        <Divider className="my-10" />

        <Card className="bg-gradient-to-br from-[#394F68] to-[#18387E]">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
