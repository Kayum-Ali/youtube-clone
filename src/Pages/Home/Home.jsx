
import Feed from '../../Components/Feed/Feed';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Home.css'
import PropTypes from 'prop-types';
const Home = ({sidebar}) => {
    return (
        <>
            <Sidebar sidebar={sidebar}></Sidebar>

            <div className={`container ${sidebar ? "":"large-container"}`}>
                <Feed></Feed>

            </div>
            
        </>
    );
};

Home.propTypes = {
    sidebar: PropTypes.bool,
};
export default Home;