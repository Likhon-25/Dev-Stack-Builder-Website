import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../types/Type";
import { FaRegTrashAlt } from "react-icons/fa";
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
          <div
            key={selectTech.id}
            className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 shadow-xs"
          >
            <div className="flex items-center gap-3">
              <img
                className="h-7 w-7 object-contain"
                src={selectTech.icon}
                alt={selectTech.name}
              />
              <div className="name">
                <h2 className="text-xs font-bold text-slate-900">
                  {selectTech.name}
                </h2>
                <p className="text-[10px] text-slate-400 font-medium">
                  {selectTech.category}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleReomveTech(selectTech)}
              className="p-1 text-slate-400 "
            >
              <FaRegTrashAlt className="text-sm" />
            </button>
          </div>
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
