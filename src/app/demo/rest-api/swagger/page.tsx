import { Metadata } from "next";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import aaa from "../../../../../public/denis23x.openapi.json";

export const metadata: Metadata = {
	title: "???",
	description: "???",
};

export default function Page() {
	return <SwaggerUI spec={aaa} />;
}

// http://localhost:3000/demo/rest-api/swagger
