import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../types/Type";

interface ISelectedTechnologyesProp {
    selectedTechnologies: ITechnology
     setSelectedTechnologies: Dispatch<SetStateAction<ITechnology>>
}


const SelectedTechnologyes = ({selectedTechnologies,setSelectedTechnologies} : ISelectedTechnologyesProp ) => {
    return (
        <div >
            <h2>Selected Technologies</h2>
            <p>{selectedTechnologies.length} Technology Selected</p>
            {
                selectedTechnologies.map((selectTech) => {
                    <div>
                        <div className="card">
                            <img src={selectTech.icon} alt="" />
                            <div className="name">
                                <h2>{selectTech.name}</h2>
                                <p>{selectTech.category}</p>
                            </div>
                        </div>
                    </div>
                })
            }
                       
        </div>
    );
};

export default SelectedTechnologyes;