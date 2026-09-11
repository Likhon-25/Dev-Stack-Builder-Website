import { use, useState } from "react";
import type { ITechnology } from "../types/Type";
import TechnologyCard from "./TechnologyCard";
import SelectedTechnologyes from "./SelectedTechnologyes";

interface TechnologyProps {
  TechnologyPromise: Promise<ITechnology[]>;
}

const Technologies = ({ TechnologyPromise }: TechnologyProps) => {
  const technologies = use(TechnologyPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<ITechnology[]>([]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
        Explore the{" "}
        <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="mt-2 text-sm md:text-base text-slate-400 font-normal">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="mt-10 flex flex-col lg:flex-row gap-8 items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              selectedTechnologies={selectedTechnologies}
              setSelectedTechnologies={setSelectedTechnologies}
            />
          ))}
        </div>

        <div className="w-full lg:w-80 shrink-0 sticky top-6">
          <SelectedTechnologyes
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
