import FeaturedProducts from "@/components/homeComponents/FeaturedProducts";
import HomeBanner from "@/components/homeComponents/HomeBanner";
import HomeCategory from "@/components/homeComponents/HomeCategory";
import FooterLayout from "@/components/layout/FooterLaylout";

import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
    <Header/>
    <HomeBanner/>
    <HomeCategory/>
    <FeaturedProducts />
    <FooterLayout/>
    </>
  )
}
