'use client';

import { useEffect } from 'react';
import hotjar from '@hotjar/browser';

export const useHotjar = (hjid: number, hjsv: number) => {
    useEffect(() => {
        hotjar.init(hjid, hjsv);
        console.log('Hotjar initialized', hotjar.isReady());
    }, [hjid, hjsv]);
};