import {
  BrickWall,
  Camera,
  Car,
  ChartColumnIncreasing,
  ClipboardList,
  Gift,
  Layers,
  MessagesSquare,
  PackageCheck,
  ScanBarcode,
  ShoppingCart,
  Smartphone,
  Truck,
  type LucideIcon,
} from "lucide-react";

const RULES: [RegExp, LucideIcon][] = [
  [/distribui|atacad/i, Truck],
  [/constru|ferrag|tinta|piso/i, BrickWall],
  [/auto|pe[cç]as|ve[ií]culo/i, Car],
  [/decora|presente/i, Gift],
  [/whats|atendimento/i, MessagesSquare],
  [/ecommerce|e-commerce|loja.*virtu/i, ShoppingCart],
  [/\bbi\b|dashboard/i, ChartColumnIncreasing],
  [/mobile|externa/i, Smartphone],
  [/c[oó]d(igo)?.*barras|mcn-estoque/i, ScanBarcode],
  [/contage|endere/i, ClipboardList],
  [/foto/i, Camera],
  [/carga|entrega|confer/i, PackageCheck],
];

/** Escolhe um ícone a partir do título (prioridade) ou do slug vindos do Cosmic. */
export function iconFor(slug: string, title = ""): LucideIcon {
  for (const key of [title, slug]) {
    if (!key) continue;
    for (const [re, icon] of RULES) {
      if (re.test(key)) return icon;
    }
  }
  return Layers;
}
