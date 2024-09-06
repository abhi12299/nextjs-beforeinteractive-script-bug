import { notFound } from 'next/navigation';

export default function NotFoundError() {
  if (true) notFound();
  return <div>about</div>;
}
