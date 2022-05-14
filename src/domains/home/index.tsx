import { useEffect } from 'react';
import PageLayout from 'src/components/PageLayout';
import homeService from './service';

export default function Home() {
  useEffect(() => {
    homeService
      .getUsers()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PageLayout activeMenu="home" withNotificationMenus={['tags']} isBottomNav>
      <div>Homepage</div>
    </PageLayout>
  );
}
