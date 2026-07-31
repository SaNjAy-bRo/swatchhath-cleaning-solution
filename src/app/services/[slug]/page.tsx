import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/servicesData";
import ServiceDetailView from "./ServiceDetailView";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    return {
      title: "Service Not Found | Swachhath Cleaning Solution",
    };
  }

  return {
    title: `${service.name} Service in Karnataka`,
    description: `${service.desc} ${service.whyItMatters.slice(0, 140)}... Contact Swachhath Cleaning Solution for a free quote in Udupi & Mangalore!`,
    keywords: [
      service.name,
      `${service.name} Udupi`,
      `${service.name} Mangalore`,
      `${service.name} Karnataka`,
      "Swachhath Cleaning Solution",
      service.category,
      "deep cleaning services",
    ],
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.name} | Swachhath Cleaning Solution`,
      description: service.desc,
      url: `https://swachhathcleaning.com/services/${service.slug}`,
      siteName: "Swachhath Cleaning Solution",
      images: [
        {
          url: service.image,
          alt: service.name,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} | Swachhath Cleaning Solution`,
      description: service.desc,
      images: [service.image],
    },
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  return <ServiceDetailView slug={resolvedParams.slug} />;
}
