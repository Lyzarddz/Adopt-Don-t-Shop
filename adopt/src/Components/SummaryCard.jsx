import Card from '@mui/material/Card';
import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const SummaryCard = ({pet, currentUser}) => {


    return(
    <Card variant="outlined">
            <div className="content" >
            </div>
            <h3>
            <div className="primary">
                Pet: {pet.name}
                <br/>
                { pet.summaries.map((s) =>{
                    return(
                        <React.Fragment>
                            <br/>
                            <br/>
                            Date: {s.date}
                            <br/>
                            <br/>
                            Notes: {s.notes}
                            <br/>
                            <br/>
                        </React.Fragment>
                         )
                  })
                }
                <br/>
                  { currentUser ? 
                      <Button variant="outlined" color="inherit" disableElevation > Adopt </Button> : ""
                  }
                <br/>
                <br/>
            </div>
            </h3>
        </Card>
    )
}

export default SummaryCard;