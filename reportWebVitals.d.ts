import type { Metric } from 'web-vitals';
type ReportHandler = (metric: Metric) => void;
declare const reportWebVitals: (onPerfEntry?: ReportHandler) => void;
export default reportWebVitals;
