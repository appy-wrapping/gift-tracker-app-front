import { useState } from "react";

const Budget = ({ id, name, propBudget, editFriend }) => {
    const [editingBudget, setEditingBudget] = useState(false);

    const [budget, setBudget] = useState(propBudget);

    const handleEditingBudget = () => {
        if (editingBudget) {
            editFriend({
                id: id,
                name: name,
                budget: budget,
            });
        }
        setEditingBudget(!editingBudget);
    };

    const handleBudget = (e) => {
        setBudget(e.currentTarget.value);
    };

    return (
        <>
            {editingBudget ? (
                <div className="budgetHolder">
                    <input
                        type="number"
                        onChange={handleBudget}
                        className="card budgetCard editing"
                        value={`${budget}`}
                    />

                    <button className={!editingBudget ? "button editButtonTwo" : "button saveButtonTwo"} id="pencil" onClick={handleEditingBudget}></button>
                </div>
            ) : (
                    <div className="budgetHolder">
                        <h2 className="card budgetCard">Budget: £{budget}</h2>
                        <button className="button editButtonTwo" id="pencil" onClick={handleEditingBudget}></button>
                    </div>
                )
            }
        </>
    )
}

export default Budget;
