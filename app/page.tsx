import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/not-found-error-page">Go to not-found-error-page</Link>
      <br />
      <br />
      <Link href="/generic-error-page">Go to generic-error-page</Link>
      <br />
      <br />
      <br />
      Go to either of the above page and reload the page.. the beforeInteractive script does not work!
      <br />
      <br />
      <br />
      <Link href="/page-does-not-exist">Go to page-does-not-exist</Link>
      <br />
      <br />
      <br />
      Go to page-does-not-exist and reload.. the script will work.. this is
      because nextjs server-renders this page, so the layout is rendered on the
      server as well and sent over the wire.. in the other 2 cases, nextjs stops
      rendering the page in between
    </div>
  );
}
