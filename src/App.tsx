import { Suspense } from "react";
import Banner from "./Banner";
import Technologies from "./components/Technologies";
import Footer from "./Footer";
import Nav from "./Nav";
import type { ITechnology } from "./types/Type";

const TechnologyFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const TechnologyPromise = TechnologyFetch();
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={'Loadding......'}>
        <Technologies TechnologyPromise={TechnologyPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
