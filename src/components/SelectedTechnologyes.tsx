import type { ITechnology } from "../types/Type";

interface SelectedTechnologyesProps {
    selectedTechnologies: ITechnology[];
}

const SelectedTechnologyes = ({
    selectedTechnologies,
}: SelectedTechnologyesProps) => {
    return (
        <div>
                        <h2>Selected Technologies</h2>
                        {selectedTechnologies.map((technology) => (
                                <p key={technology.id}>{technology.name}</p>
                        ))}
        </div>
    );
};

export default SelectedTechnologyes;