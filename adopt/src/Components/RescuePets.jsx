import PetList from "./PetList";
import { useParams } from 'react-router-dom';

const RescuePets = ({ petData, currentUser, loadPets}) => {

    const params = useParams();
    const  rescuePets = petData.filter(p => p.rescue.id == params.id)

    return (
     <PetList petData={rescuePets} currentUser={currentUser} loadPets= {loadPets}/>
    )
}

export default RescuePets;