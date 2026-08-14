import { MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  className?: string;
  floating?: boolean;
  label?: string;
}

export function WhatsAppButton({
  className,
  floating = false,
  label = "WhatsApp",
}: WhatsAppButtonProps) {
  return (
    <a
      href={`https://wa.me/${profile.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Me contacter sur WhatsApp"
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-transform hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2",
        floating && "fixed bottom-5 right-5 z-40 md:hidden",
        className,
      )}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}
