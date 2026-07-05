import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function normalizePhoneNumber(phone: string) {
  const digits = phone.replace(/[^\d]/g, "");
  return phone.trim().startsWith("+") ? `+${digits}` : digits;
}

export function getWhatsAppUrl(phone: string) {
  return `https://wa.me/${normalizePhoneNumber(phone).replace(/^\+/, "")}`;
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(date));
}

export function getDateParts(date: string) {
  const parsed = new Date(date);
  return {
    day: new Intl.DateTimeFormat("en", { day: "2-digit" }).format(parsed),
    month: new Intl.DateTimeFormat("en", { month: "short" }).format(parsed).toUpperCase(),
    year: new Intl.DateTimeFormat("en", { year: "numeric" }).format(parsed)
  };
}

export function slugTitle(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
