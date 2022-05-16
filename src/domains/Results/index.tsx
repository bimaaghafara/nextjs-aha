import { useRouter } from 'next/router';

// styles & components
import PageLayout from 'src/components/PageLayout';

export default function Results() {
  const router = useRouter();
  console.log(router.query);

  return (
    <PageLayout activeMenu="home" withNotificationMenus={['tags']}>
      <div>Resultspage</div>
    </PageLayout>
  );
}
