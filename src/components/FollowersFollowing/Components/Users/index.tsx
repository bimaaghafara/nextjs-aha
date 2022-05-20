import { UsersProps } from './types';

export default function Users({ users }: UsersProps) {
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
}
