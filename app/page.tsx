import { Header } from '../components/Header/Header';
import { Explore } from '../components/Explore/Explore';
import { SkinCareTest } from '../components/SkinCareTest/SkinCareTest';
import { BestSellers } from '@/components/BestSellers/BestSellers';
import { UniqueOffer } from '@/components/UniqueOffer/UniqueOffer';

export default function HomePage() {
  return (
    <>
      <Header />
      <Explore />
      <SkinCareTest />
      <BestSellers />
      <UniqueOffer />
    </>
  );
}
