import AdminUsersTable from '@/components/dashboardPage/admin/AdminUsersTable';
import { getAllUsers } from '@/lib/list-users';
import React from 'react';

const AdminUsersPage = async () => {
  const data = await getAllUsers();
  const users = data?.users;
  console.log(users);
  return (
    <section className='my-20 text-white'>
      <div className='max-w-7xl mx-auto px-5'>
        <div>
          {/* title */}
          <div className='mb-8'>
            <h2 className='mb-1 text-[32px] font-medium'>User Management</h2>
            <p className='text-[#C4C7C8] text-sm'>Review, filter, and manage platform access for all users.</p>
          </div>

          {/* table */}
          <div>
            <AdminUsersTable users={users} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminUsersPage;