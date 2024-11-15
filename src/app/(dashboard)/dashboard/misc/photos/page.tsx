import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { navMainPhotos } from "@/stores/useNavMain";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

export const metadata: Metadata = {
	title: navMainPhotos.title,
	description: navMainPhotos.description,
};

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Photos</h1>
			<p className={"leading-7"}>
				This page showcases a collection of photographs captured during my travels, offering a glimpse into diverse
				landscapes, and moments that have inspired me. Each image tells a story, from serene natural vistas to vibrant
				city scenes, inviting you to experience the world through my lens.
			</p>
			<Separator />
			<ParallaxScroll images={images} />
		</div>
	);
}

const images = [
	{
		url: "IMG_0392.webp",
		plusCode:
			"97QQ+XMM, Jl. Sahadewa, Banjar Wangbung, Guwang, Kec. Sukawati, Kabupaten Gianyar, Bali 80582, Indonesia",
	},
	{
		url: "IMG_6742.webp",
		plusCode: "53CM+8X Pecatu, Badung Regency, Bali, Indonesia",
	},
	{
		url: "IMG_9586.webp",
		plusCode: "F7W3+HW Sayan, Gianyar Regency, Bali, Indonesia",
	},
	{
		url: "IMG_7421.webp",
		plusCode: "7HGW+P9P, Suana, Nusa Penida, Klungkung Regency, Bali 80771, Indonesia",
	},
	{
		url: "IMG_5360.webp",
		plusCode: "PG7P+F9 Kaliningrad, Kaliningrad Oblast, Russia",
	},
	{
		url: "IMG_5419.webp",
		plusCode: "9VW9+94 Baku, Azerbaijan",
	},
	{
		url: "IMG_7192.webp",
		plusCode: "6FXF+XF4, Bunga Mekar, Nusa Penida, Klungkung Regency, Bali 80771, Indonesia",
	},
	{
		url: "IMG_6197.webp",
		plusCode: "H78H+2M Tegallalang, Gianyar Regency, Bali, Indonesia",
	},
	{
		url: "IMG_2826.webp",
		plusCode: "4538+RV6, Unnamed Rd, Lum Sum, Sai Yok District, Kanchanaburi 71150",
	},
	{
		url: "IMG_7021.webp",
		plusCode: "8GG2+X2 Ped, Klungkung Regency, Bali, Indonesia",
	},
	{
		url: "IMG_4726.webp",
		plusCode: "2854+99 Chebarkul, Chelyabinsk Oblast, Russia",
	},
	{
		url: "IMG_3200.webp",
		plusCode: "9X43+526, Unnamed Road,, Tha Sao, Sai Yok District, Kanchanaburi 71150",
	},
	{
		url: "IMG_8342.webp",
		plusCode: "538Q+53 Pecatu, Badung Regency, Bali, Indonesia",
	},
	{
		url: "IMG_8646.webp",
		plusCode: "Padangbai, Manggis, Karangasem Regency, Bali 80871, Indonesia",
	},
	{
		url: "IMG_9112.webp",
		plusCode: "J2RJ+XJ Gili Indah, North Lombok Regency, West Nusa Tenggara, Indonesia",
	},
	{
		url: "IMG_2479.webp",
		plusCode: "889Q+XCQ, Na Hin Lat, Mueang Nakhon Nayok District, Nakhon Nayok 26000",
	},
];
