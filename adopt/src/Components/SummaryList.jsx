import { useEffect } from 'react';
import { Card } from "semantic-ui-react";
import SummaryCard from './SummaryCard';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';


const SummaryList = ({ petData, loadPets, currentUser}) => {

  useEffect(()=>{
    loadPets()
  },[])


const params = useParams();


  const styles = {
    fontFamily: 'Unbounded',
    textAlign: 'center',
    color: "#32373b",
}

      const cards= petData.map((p, idx)=> {
        if (params.id == p.id)
          return(
            <div key={idx}>
              <SummaryCard
              key={idx}
              pet={p}
              currentUser={currentUser}
            />
            </div>
          )
    })  


return (
    <Card>
    <h1 className='primary'>Summaries for: </h1>
  <br></br>
  <br></br>
      {cards}
<br/>
<br/>
<Button variant="outlined" color="inherit" to="/pets" component={ Link } style={styles}> Return to Adoptable Pets</Button> 
  </Card>
)

}

export default SummaryList;