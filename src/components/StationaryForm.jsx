import React, { useState } from "react";

const StationaryForm = () => {
	const [item, setItem] = useState("pen");
	const [quantity, setQuantity] = useState(1);
	const [unitPrice, setUnitPrice] = useState(10);
	const [discount, setDiscount] = useState(0);
	const [subtotal, setSubtotal] = useState(0);
	const [total, setTotal] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(item);
		console.log(quantity);
	};

	const handleChange = (e) => {
		setItem(e.target.value);
		console.log(item);
		if (item == "pen") {
			setUnitPrice(10);
			console.log(unitPrice);
		}
		if (item == "notebook") {
			setUnitPrice(50);
			console.log(unitPrice);
		}
		if (item == "stapler") {
			setUnitPrice(120);
			console.log(unitPrice);
		}
		if (item == "marker") {
			setUnitPrice(30);
			console.log(unitPrice);
		}
	};

	const handleDiscount = () => {
		if (quantity >= 20) {
			setDiscount(20);
			setTotal(subtotal - subtotal * 0.2);
		} else {
			setTotal(subtotal);
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="stationary">Choose Item: </label>
					<select
						name="stationary"
						id="stationary"
						onChange={handleChange}
					>
						<option value="pen">Pen</option>
						<option value="notebook">Notebook</option>
						<option value="stapler">Stapler</option>
						<option value="marker">Marker</option>
					</select>
				</div>

				<div>
					<label htmlFor="unitPrice">Unit Price: </label>
					<input
						type="text"
						name="unitPrice"
						id="unitPrice"
						readOnly
						value={`₹${unitPrice}`}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label htmlFor="quantity: ">Quantity</label>
					<input
						type="number"
						id="quantity"
						onChange={(e) => {
							setQuantity(e.target.value);
							setSubtotal(unitPrice * quantity);
							handleDiscount();
						}}
						value={quantity}
					/>
				</div>
				<div>
					<label htmlFor="subtotal">Subtotal: </label>
					<input
						type="text"
						name="subtotal"
						id="subtotal"
						value={subtotal}
						readOnly
					/>
				</div>
				<div>
					<label htmlFor="discount">Discount: </label>
					<input
						type="text"
						id="discount"
						value={discount}
						readOnly
					/>
				</div>
				<div>
					<label htmlFor="total">Total: </label>
					<input
						type="text"
						name="total"
						id="total"
						value={total}
						readOnly
					/>
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default StationaryForm;
