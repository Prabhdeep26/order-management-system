import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PrintingServiceForm = () => {
	const [pages, setPages] = useState(1);
	const [type, setType] = useState("coloured");
	const [urgencyCharges, setUrgencyCharges] = useState(0);
	const [isUrgent, setIsUrgent] = useState(false);
	const [discount, setDiscount] = useState(0);
	const [subtotal, setSubtotal] = useState(0);
	const [total, setTotal] = useState(0);
	const navigator = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		sessionStorage.setItem("printing", [{
			subtotal: subtotal,
			total: total,
		}]);
		navigator("/tax");
	};

	const handleChange = () => {
		if (isUrgent) {
			setUrgencyCharges(50);
		}
		if (pages > 100) {
			setDiscount(10);
			if (type == "coloured") {
				setSubtotal(pages * 10 + urgencyCharges);
				setTotal(subtotal - subtotal * 0.1);
			}
			if (type == "black") {
				setSubtotal(pages * 5 + urgencyCharges);
				setTotal(subtotal - subtotal * 0.1);
			}
		} else if (type == "coloured") {
			setSubtotal(pages * 10 + urgencyCharges);
			setTotal(subtotal);
		} else if (type == "black") {
			setSubtotal(pages * 5 + urgencyCharges);
			setTotal(subtotal);
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="pages">No. of Pages</label>
					<input
						type="number"
						name="pages"
						id="pages"
						value={pages}
						onChange={(e) => {
							setPages(e.target.value);
							handleChange();
						}}
					/>
				</div>
				<div>
					<label htmlFor="type">Type: </label>
					<select
						name="type"
						id="type"
						value={type}
						onChange={(e) => {
							setType(e.target.value);
							handleChange();
						}}
					>
						<option value="coloured">Coloured</option>
						<option value="black">Black & White</option>
					</select>
				</div>
				<div>
					<label htmlFor="urgentDelivery">Urgent Delivery</label>
					<input
						type="checkbox"
						name="urgentDelivery"
						id="urgentDelivery"
						onChange={() => {
							setIsUrgent(!isUrgent);
							handleChange();
						}}
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

export default PrintingServiceForm;
