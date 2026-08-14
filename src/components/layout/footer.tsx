import { Separator } from "@/components/ui/separator";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="pb-10 pt-6">
      <Separator className="mb-5" />
      <div className="flex flex-col gap-1 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        {/* <p className="font-mono">Conçu et développé avec Next.js</p> */}
      </div>
    </footer>
  );
}
