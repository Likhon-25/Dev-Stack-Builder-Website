import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../types/Type";
import { FaRegTrashAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

interface ISelectedTechnologyesProp {
  selectedTechnologies: ITechnology;
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology>>;
}

const SelectedTechnologyes = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: ISelectedTechnologyesProp) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>
      <p className="mt-1 text-xs font-medium text-slate-400">
        {selectedTechnologies.length} Technology Selected
      </p>

      {/* Cards List */}
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

            {/* Remove Icon */}
            <FaRegTrashAlt className="text-slate-400 text-base cursor-pointer hover:text-slate-600 transition-colors" />
          </div>
        ))}
      </div>

      <button className="mt-6 flex w-full items-center justify-center gap-4 rounded-xl border border-rose-200 bg-white py-2.5 text-xs font-semibold text-rose-500 transition-colors hover:bg-rose-50 cursor-pointer">
        <span>Remove All</span>
        <FaRegTrashAlt className="text-sm" />
      </button>
    </div>
  );
};

export default SelectedTechnologyes;
