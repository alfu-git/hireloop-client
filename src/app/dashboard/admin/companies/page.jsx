import AdminCompaniesTable from "@/components/dashboardPage/admin/AdminCompaniesTable";
import { getAllCompanies } from "@/lib/api/data";
import React from "react";

const AdminCompaniesPage = async () => {
  const companies = await getAllCompanies();

  return (
    <section className="my-20">
      <div className="max-w-7xl mx-auto px-5">
        <div>
          <AdminCompaniesTable companies={companies} />
        </div>
      </div>
    </section>
  );
};

export default AdminCompaniesPage;
