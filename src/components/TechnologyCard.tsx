import { FaStar } from "react-icons/fa";
import type { ITechnology } from "../types/Type";
import type { Dispatch, SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";

interface ITechnologyCardProps {
  technology: ITechnology;
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}
const TechnologyCard = ({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
}: ITechnologyCardProps) => {
  const isSelected = selectedTechnologies.find(
    (item) => item.id === technology.id,
  );

  const handleButtonType = () => {
    setSelectedTechnologies((currentTechnologies) => [
      ...currentTechnologies,
      technology,
    ]);

    toast.success(`${technology.name} Add to Stack `, {
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
    <div>
      <div
        className={`rounded-2xl border ${isSelected ? "border-pink-500" : "border-slate-200"}  bg-white p-5 shadow-sm hover:shadow-md transition-all`}
      >
        <div>
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 p-2 border border-slate-100">
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-8 w-8 object-contain"
              />
            </div>
            <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-600 border border-sky-100">
              {technology.badge}
            </span>
          </div>

          <h3 className="mt-4 text-xl font-bold text-slate-900">
            {technology.name}
          </h3>
          <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-3">
            {technology.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-slate-600">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="rounded-md bg-slate-100 px-2.5 py-1 text-slate-700">
                {technology.category}
              </span>
              <span className="rounded-md bg-slate-100 px-2.5 py-1 text-slate-700">
                {technology.difficulty}
              </span>
            </div>
            <div className="flex items-center gap-1 font-semibold text-slate-800">
              <FaStar className="text-amber-400 text-sm" />
              <span>{technology.rating}</span>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-6">
          <button
            type="button"
            onClick={handleButtonType}
            disabled={isSelected}
            className={`w-full rounded-xl ${isSelected ? "bg-slate-400" : "bg-slate-900 hover:bg-slate-800"}  py-2.5 text-sm font-semibold text-white transition-colors `}
          >
            {isSelected ? "Added" : "Add to Stack"}
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TechnologyCard;
