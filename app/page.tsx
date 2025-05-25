import Footer from '@/components/shared/Footer/Footer';
import Header from '@/components/shared/Header/Header';
import HomeBanner from '@/components/home/Banner/HomeBanner';

export default function Home() {
    return (
        <div>
            <main className="mx-auto">
              <Header />
              <HomeBanner/>
              {/*Properties*/}
              {/*Company standards*/}
              {/*Galerie*/}
              {/*Rezensionen*/}
            </main>
            <Footer />
        </div>
    );
}
