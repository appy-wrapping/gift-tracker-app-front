const Total = ({priceSum}) => {

    return (
        <>
            <h2 className="footer">£{priceSum.toFixed(2)}</h2>
        </>
    );

};

export default Total;
