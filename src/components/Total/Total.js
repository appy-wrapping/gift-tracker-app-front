const Total = ({ priceSum, budget }) => {

    return (
        <>
            <h2 className="footer" style={(priceSum > budget ? { color: "red" } : {})}>£{priceSum.toFixed(2)}</h2>
        </>
    );

};

export default Total;
