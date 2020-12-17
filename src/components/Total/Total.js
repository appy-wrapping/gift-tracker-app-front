import { Component } from "react";
// function to map over gifts in order to get an array of prices
// let priceArray = gifts.map(gift => gift.price);

// // array reducer in order to get a total value
// let sum = (total, currentPrice) => total + currentPrice;
// let PriceSum = priceArray.reduce(sum);

class Total extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getGifts();
    }


    render() {
        console.log(this.props.gifts);
        return (
            <>
                <h2 className="footer">{PriceSum}</h2>
            </>
        );
    }
};

export default Total;

// bring in all gifts
// use reducer to get the total of all the prices
// return that



// let gifts = state.gifts;
// console.log(gifts);