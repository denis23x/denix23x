import { ReactNode } from "react";
import MaterialsFooter from "@/components/dashboard/materials/materials-footer";
import MaterialsScrollProgress from "@/components/dashboard/materials/materials-scroll-progress";

export default function MaterialsLayout({ children }: { children: ReactNode }) {
	return (
		<div className={"flex flex-col gap-4 max-w-4xl mx-auto px-4"}>
			<MaterialsScrollProgress type={"bar"} />
			<div className={"prose max-w-full"}>{children}</div>
			<MaterialsFooter />
		</div>
	);
}
