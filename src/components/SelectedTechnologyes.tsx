import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../types/Type";
import SelectedTechnologyCard from "./SelectedTechnologyCard";
import { Bounce, toast } from "react-toastify";

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
    toast.error(`${tech.name} Remove to stack`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
    // Tosfify
    toast.error(`Remove all stack...`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="w-80 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>

      <p className="mt-1 text-xs font-medium text-slate-400">
        {selectedTechnologies.length === 0
          ? "No technologies selected yet."
          : `${selectedTechnologies.length} Technology Selected`}
      </p>

      <div className="mt-5 space-y-3">
        {selectedTechnologies.length === 0 ? (
          <div className="flex h-24 items-center justify-center rounded-2xl border border-dashed border-slate-200">
            <p className="text-xs font-medium text-slate-400">
              Your stack is empty.
            </p>
          </div>
        ) : (
          selectedTechnologies.map((selectTech) => (
            <SelectedTechnologyCard
              key={selectTech.id}
              selectTech={selectTech}
              handleReomveTech={handleReomveTech}
            />
          ))
        )}
      </div>

      {selectedTechnologies.length != 0 && (
        <button
          type="button"
          onClick={handleRemoveAll}
          className="mt-6 w-full rounded-xl border border-red-500 bg-white py-3 text-xs font-semibold text-red-500 transition-colors hover:bg-rose-50 cursor-pointer"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default SelectedTechnologyes;
