import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StationaryForm from "./components/StationaryForm";
import PrintingServiceForm from "./components/PrintingServiceForm";
import CalculationTax from "./components/CalculationTax";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <StationaryForm />,
	},
	{
		path: "/printing",
		element: <PrintingServiceForm />,
	},
	{
		path: "/tax",
		element: <CalculationTax />,
	},
	{
		path: "/invoice",
	},
]);

const App = () => {
	return <div>
    <RouterProvider router={appRouter}/>
  </div>;
};

export default App;
