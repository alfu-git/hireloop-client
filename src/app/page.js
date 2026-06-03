import Banner from "@/components/homePage/Banner";
import FeaturesJob from "@/components/homePage/FeaturesJob";
import SmartJob from "@/components/homePage/SmartJob";
import Stats from "@/components/homePage/Stats";

export default function Home() {
  return (
    <>
      <Banner />
      <Stats />
      <SmartJob />
      <FeaturesJob />
    </>
  );
}
