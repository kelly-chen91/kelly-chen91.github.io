import '../css/@flaticon/flaticon-uicons/css/all/all.css'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
export default function Navigation() {
    return (
        <nav>
            <a href="#about" className="navigationIcon"><PersonRoundedIcon /></a>
            <a href="#education" className="navigationIcon"><SchoolRoundedIcon /></a>
            <a href="#experience" className="navigationIcon"><FeedRoundedIcon /></a>
        </nav>
    );
}