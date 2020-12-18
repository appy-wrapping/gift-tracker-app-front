// import react from "react";
const Friend = ({ friendName }) => (
	<div className="friendHolder">
		<h2 className="card friendCard">{friendName}</h2>
		<button className="button editButtonTwo" />
		{/* <button className="button addButtonTwo" /> */}
	</div>
);

export default Friend;
