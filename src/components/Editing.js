// import react from "react";
import Inputs from "./Inputs";

const Editing = ({ item_name, price, bought, handleGiftName, handlePrice, handleBought }) => (
    <>
        <Inputs
            label="Gift Name"
            value={item_name}
            type="text"
            handleChange={handleGiftName}
        />
        <Inputs
            label="Price"
            value={price}
            type="text"
            handleChange={handlePrice}
        />
        <Inputs
            label="Bought"
            type="checkbox"
            handleChange={handleBought}
        />
    </>
);

export default Editing;
