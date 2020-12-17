import { connect } from "react-redux";
import Total from './Total';


const mapStateToProps = (state) => {

    // function to map over gifts in order to get an array of prices
    let priceArray = state.gifts.map(gift => gift.price);

    // array reducer in order to get a total value
    let sum = (total, currentPrice) => +total + +currentPrice;
    let priceSum = priceArray.reduce(sum, 0);


    return {
        priceSum: priceSum,
    };
};

export default connect(mapStateToProps)(Total);