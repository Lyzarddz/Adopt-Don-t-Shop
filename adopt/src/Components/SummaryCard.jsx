import Card from '@mui/material/Card';
import Button from '@material-ui/core/Button';


const SummaryCard = () => {




    return(
    <Card variant="outlined">
            <div className="content" >
            </div>
            <h3>
            <div className="primary">
                <ul>
                Pet: 
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