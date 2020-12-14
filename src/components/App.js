import Friend from "./Friend";
import Row from "./Row";
const App = () => (
	<>
		<nav>
			<h1>Gift Tracker App</h1>
		</nav>

		<Friend friendName={"bob"} />

		<h2>"Budget Here"</h2>

		<table>
			<tr>
				<th></th>
				<th></th>
				<th>Description</th>
				<th>Price</th>
				<th>Bought?</th>
			</tr>

			{/* Stick a row component here */}
			<Row />
		</table>

		<h2>Total Goes Here</h2>
	</>
);

export default App;
