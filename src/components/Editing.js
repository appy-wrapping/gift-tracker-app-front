// import react from "react";
import Inputs from "./Inputs";

const Editing = ({ item_name, price, bought, handleGiftName, handlePrice, handleBought }) => (
    <>
        <td className="tdNarrow"><button className="deleteButton tableButtons"></button></td>
        <td className="tdNarrow"><button className="saveButton tableButtons"></button></td>
        <Inputs
            label="Gift Name"
            value={item_name}
            checkbox={false}
            handleChange={handleGiftName}
        />
        <Inputs
            label="Price"
            value={price}
            checkbox={false}
            handleChange={handlePrice}
        />
        <Inputs
            label="Bought"
            checkbox={true}
            handleChange={handleBought}
        />
    </>
);

export default Editing;
