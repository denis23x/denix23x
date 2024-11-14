import { Metadata } from "next";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export const metadata: Metadata = {
	title: "???",
	description: "???",
};

export default function Page() {
	return <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />;
}

// http://localhost:3000/demo/rest-api/swagger
