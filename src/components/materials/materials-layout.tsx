import { ReactNode } from "react";
import MaterialsFooter from "@/components/materials/materials-footer";

export default function MaterialsLayout({ children }: { children: ReactNode }) {
	return (
		<div className={"flex flex-col gap-4 max-w-4xl mx-auto px-4"}>
			<div className={"prose max-w-full"}>{children}</div>
			<MaterialsFooter />
		</div>
	);
}
