import { Metadata } from "next";
import SwaggerUI from "swagger-ui-react";
import openapi from "~/dashboard/tools/placeholder-api/swagger/denis23x.openapi.json";
import "swagger-ui-react/swagger-ui.css";

export const metadata: Metadata = {
	title: "Lorem Ipsum Swagger",
	description:
		"Explore the Lorem Ipsum Swagger page: A comprehensive mock API documentation for testing, prototyping, and showcasing demo. Perfect for developers!",
};

export default function Page() {
	return <SwaggerUI spec={openapi} />;
}
