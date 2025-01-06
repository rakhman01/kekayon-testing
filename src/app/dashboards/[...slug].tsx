// pages/dashboard/[...slug].jsx

import { useRouter } from 'next/router';

const DashboardPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Dynamic Dashboard Page</h1>
      <p>Slug: {JSON.stringify(slug)}</p>
    </div>
  );
};

export default DashboardPage;
