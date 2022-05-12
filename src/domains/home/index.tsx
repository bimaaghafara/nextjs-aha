import { useEffect } from 'react';
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

  return <div>Homepage</div>;
}
