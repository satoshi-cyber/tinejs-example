
import hello from '@/useCases/hello';
import { useUseCase } from 'tinejs.next';

export default async function Home() {
  const jobs = await useUseCase(hello.input({ name: 'Earth' }));

  return <pre>{JSON.stringify(jobs, null, '\t')}</pre>;
}
