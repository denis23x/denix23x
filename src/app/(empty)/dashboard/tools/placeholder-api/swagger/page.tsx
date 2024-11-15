import { Metadata } from "next";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import openapi from "../../../../../../../prisma/openapi/denis23x.openapi.json";

export const metadata: Metadata = {
	title: "Lorem Ipsum Swagger",
	description:
		"Explore the Lorem Ipsum Swagger page: A comprehensive mock API documentation for testing, prototyping, and showcasing demo. Perfect for developers!",
};

export default function Page() {
	return <SwaggerUI spec={openapi} />;
}
