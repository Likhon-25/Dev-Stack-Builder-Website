import { use, useState } from "react";
import type { ITechnology } from "../types/Type";
import TechnologyCard from "./TechnologyCard";
import SelectedTechnologyes from "./SelectedTechnologyes";

interface TechnologyProps {
  TechnologyPromise: Promise<ITechnology[]>;
}
const Technologies = ({TechnologyPromise}: TechnologyProps) => {
  const technologies = use(TechnologyPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<ITechnology[]>([]);
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
        Explore the{" "}
        <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="mt-2 text-sm md:text-base text-slate-400 font-normal">
        Pick one technology per category to build your ideal stack.
      </p>
      <div className="grid grid-cols-3 mr-150 mt-10 gap-7">
        {technologies.map((technology) => {
          return (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              selectedTechnologies={selectedTechnologies}
              setSelectedTechnologies={setSelectedTechnologies}
            />
          );
        })}
      </div>
      <SelectedTechnologyes selectedTechnologies={selectedTechnologies} />
    </div>
  );
};

export default Technologies;
