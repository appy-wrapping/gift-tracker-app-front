const Total = ({ priceSum }) => {

    return (
        <>
            <h2 className="footer">Total spent: £{priceSum.toFixed(2)}</h2>
        </>
    );

};

export default Total;
