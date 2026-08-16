export interface PerformanceMetric {
  key: "lcp" | "cwv" | "sites";
  value: number;
  decimals: number;
  prefix: string;
  suffix: string;
  /** Only the CWV pass-rate is a true 0-100 percentage — the ring visual is reserved for it. */
  isPercentage: boolean;
}

export const usePerformanceMetrics = (): PerformanceMetric[] => [
  {
    key: "lcp",
    value: 3.5,
    decimals: 1,
    prefix: "-",
    suffix: "s",
    isPercentage: false,
  },
  {
    key: "cwv",
    value: 100,
    decimals: 0,
    prefix: "",
    suffix: "%",
    isPercentage: true,
  },
  {
    key: "sites",
    value: 50,
    decimals: 0,
    prefix: "",
    suffix: "+",
    isPercentage: false,
  },
];
