import "../Styles/sortbuttonsstyles.css"
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

function Sortbuttons() {
    return ( <div className="sortbuttonsdiv margin10">
        <div className="buttonsort margin10">Old</div>
        <div className="buttonsort margin10">New</div>
        <div className="buttonsort margin10"><LocalFireDepartmentIcon/><div>Hot</div></div>
    </div> );
}

export default Sortbuttons;