import { Check } from "lucide-react";

export function CheckList({ items, columns = 2 }: { items: string[]; columns?: 1 | 2 }) {
  return (
    <ul className={columns === 2 ? "grid gap-3 sm:grid-cols-2" : "flex flex-col gap-3"}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm">
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary-soft">
            <Check className="size-3.5 text-primary" aria-hidden="true" />
          </span>
          <span className="text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}