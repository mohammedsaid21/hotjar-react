'use client';

import { useHotjar } from './useHotjar';

export function HotjarInit({ hjid, hjsv }: { hjid: number; hjsv: number }) {
    useHotjar(hjid, hjsv);
    return null;
}
