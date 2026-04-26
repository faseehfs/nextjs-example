import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleCheckBig, ShieldUser } from "lucide-react";

export function FeaturedBadge() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <CircleCheckBig className="size-4 text-green-600 dark:text-green-400" />
      </TooltipTrigger>
      <TooltipContent>Featured</TooltipContent>
    </Tooltip>
  );
}

export function AdminBadge() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <ShieldUser className="size-4 text-blue-600 dark:text-blue-400" />
      </TooltipTrigger>
      <TooltipContent>Admin</TooltipContent>
    </Tooltip>
  );
}
