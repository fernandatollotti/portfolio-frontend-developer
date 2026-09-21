import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaDribbble, FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { SocialLink } from "@/types";

const brandIconMap: Partial<Record<SocialLink["icon"], IconType>> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  dribbble: FaDribbble,
  x: FaXTwitter,
};

export function SocialIcon({ icon, className }: { icon: SocialLink["icon"]; className?: string }) {
  if (icon === "mail") {
    return <Mail className={className} aria-hidden="true" strokeWidth={1.75} />;
  }

  const BrandIcon = brandIconMap[icon];
  if (!BrandIcon) return null;

  return <BrandIcon className={className} aria-hidden="true" />;
}
