import { useRouter } from 'next/router';

// styles & components
import PageLayout from 'src/components/PageLayout';

export default function Search() {
  const router = useRouter();
  console.log(router.query);

  return (
    <PageLayout activeMenu="home" withNotificationMenus={['tags']}>
      <div>Search Page</div>
    </PageLayout>
  );
}
