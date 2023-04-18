'use client';
import useSWR from 'swr';
import { UseCases } from '@/useCases';

export default function Page({ searchParams } : { searchParams: { name?: string }}) {
  const { data } = useSWR(
    ...UseCases.hello.input(searchParams),
  )
  
  return <pre>{JSON.stringify(data, null, '\t')}</pre>;
}
