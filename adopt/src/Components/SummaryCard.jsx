import Card from '@mui/material/Card';



const SummaryCard = ({pet}) => {



    return(
    <Card variant="outlined">
            <div className="content" >
            </div>
            <h3>
            <div className="primary">
                <ul>
                Pet: {pet.name}
                <br/>
                <br/>
                Date:
                <br/>
                <br/>
                Notes:
                <br/>
                <br/>
                </ul>
                <br/>
            </div>
            </h3>
        </Card>
    )
}

export default SummaryCard;