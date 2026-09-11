import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../types/Type";
import { FaRegTrashAlt } from "react-icons/fa";
import SelectedTechnologyCard from "./SelectedTechnologyCard";
interface ISelectedTechnologyesProp {
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const SelectedTechnologyes = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: ISelectedTechnologyesProp) => {
  const handleReomveTech = (tech: ITechnology) => {
    const removeTech = selectedTechnologies.filter(
      (selectTechnology) => selectTechnology.id !== tech.id,
    );
    setSelectedTechnologies(removeTech);
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>
      <p className="mt-1 text-xs font-medium text-slate-400">
        {selectedTechnologies.length} Technology Selected
      </p>

      <div className="mt-5 space-y-3">
        {selectedTechnologies.map((selectTech) => (
          <SelectedTechnologyCard selectTech={selectTech} handleReomveTech={handleReomveTech}  />
        ))}
      </div>

      <button
        onClick={() => handleRemoveAll()}
        className="mt-6 flex w-full items-center justify-center gap-4 rounded-xl border border-red-500 bg-white py-3 text-xs font-semibold text-red-500  cursor-pointer"
      >
        <span>Remove All</span>
        <FaRegTrashAlt className="text-sm" />
      </button>
    </div>
  );
};

export default SelectedTechnologyes;
