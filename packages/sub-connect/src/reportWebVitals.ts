// Copyright 2019-2022 @subwallet/sub-connect authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Metric } from 'web-vitals';
type ReportHandler = (metric: Metric) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (typeof onPerfEntry === 'function') {
    import('web-vitals')
      .then((mod: any) => {
        // Hỗ trợ cả v2 (get*) và v3 (on*)
        const onCLS  = mod.onCLS  ?? mod.getCLS;
        const onFCP  = mod.onFCP  ?? mod.getFCP;
        const onFID  = mod.onFID  ?? mod.getFID;
        const onLCP  = mod.onLCP  ?? mod.getLCP;
        const onTTFB = mod.onTTFB ?? mod.getTTFB;
        const onINP  = mod.onINP; // chỉ có ở v3

        onCLS?.(onPerfEntry);
        onFCP?.(onPerfEntry);
        onFID?.(onPerfEntry);
        onLCP?.(onPerfEntry);
        onTTFB?.(onPerfEntry);
        onINP?.(onPerfEntry);
      })
      .catch(console.error);
  }
};

export default reportWebVitals;
