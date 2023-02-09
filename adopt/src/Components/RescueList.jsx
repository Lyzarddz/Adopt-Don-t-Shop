import { useEffect } from 'react';
import { Card } from "semantic-ui-react";
import RescueCard from './RescueCard';


const RescueList = ({ loadRescues, rescueData }) => {

    useEffect(()=>{
        loadRescues()
      },[])



      const cards= rescueData.map((r, idx)=> {
        return(
          <div key={idx}>
            <RescueCard
            key={idx}
            rescue={r}
          />
          </div>
        )
    })  


return (
    <Card>
    <h1 className='primary'>Meet our Rescue Organizations</h1>
  <br></br>
  <br></br>
      {cards}
<br/>
<br/>
  </Card>
)

}

export default RescueList;