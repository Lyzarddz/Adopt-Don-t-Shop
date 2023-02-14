import Card from '@mui/material/Card';
import React from 'react';



const SummaryCard = ({pet}) => {


    return(
    <Card variant="outlined">
            <div className="content" >
            </div>
            <h3>
            <div className="primary">
                Pet: {pet.name}
                <br/>
                <br/>
                { pet.summaries.map((s) =>{
                    return(
                        <React.Fragment>
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
            </div>
            </h3>
        </Card>
    )
}

export default SummaryCard;