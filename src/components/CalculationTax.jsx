import React, { useEffect, useState } from "react";

const CalculationTax = () => {
	const [stationarySubtotal, setStationarySubtotal] = useState("");
	const [printingSubtotal, setPrintingSubtotal] = useState("");

	useEffect(() => {
		const stationary = sessionStorage.getItem("stationary");
		const printing = sessionStorage.getItem("printing");
	}, []);
	return <div></div>;
};

export default CalculationTax;
