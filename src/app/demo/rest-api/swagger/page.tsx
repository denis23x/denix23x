import { Metadata } from "next";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import aaa from "../../../../../prisma/openapi/denis23x.openapi.json";

export const metadata: Metadata = {
	title: "???",
	description: "???",
};

export default function Page() {
	return <SwaggerUI spec={aaa} />;
}
