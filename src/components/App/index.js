
import App from "./App";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        gifts: state.gifts
    }
}

export default connect(mapStateToProps)(App); // wraps the component with mapStateToProps