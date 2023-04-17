'use client';

import useSWR from 'swr';
import { UseCases } from '@/useCases';

export default function Page() {
  const { data,  } = useSWR(
    ...UseCases.hello.input({
      name: 'TineJs',
    }),
  )
  
  return <pre>{JSON.stringify(data, null, '\t')}</pre>;
}
