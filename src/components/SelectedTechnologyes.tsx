import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../types/Type";

interface ISelectedTechnologyesProp {
    selectedTechnologies: ITechnology
     setSelectedTechnologies: Dispatch<SetStateAction<ITechnology>>
}


const SelectedTechnologyes = ({selectedTechnologies,setSelectedTechnologies} : ISelectedTechnologyesProp ) => {
    return (
        <div>
            <h2>Selected Technologies</h2>
            <p>{selectedTechnologies.length}</p>
           
                       
        </div>
    );
};

export default SelectedTechnologyes;