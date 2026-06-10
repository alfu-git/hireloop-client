import { getJobsByCompanyId, getLoggedInRecruiterCompany } from "@/lib/api/data";
import { Button, Table } from "@heroui/react";
import { Eye, PencilLine, Trash2 } from "lucide-react";
import React from "react";

const RecruiterJobsPage = async () => {
  const company = await getLoggedInRecruiterCompany();
  const expectedCompany = company.find(com => com.companyName === "Acme Corp");

  const jobs = await getJobsByCompanyId(expectedCompany?._id);

  return (
    <section className="my-15">
      <div className="max-w-7xl mx-auto px-5">
        <div>
          <div className="mb-7.5">
            <h2 className="mb-2 text-2xl font-medium text-white">
              Manage All Jobs
            </h2>

            <p className="text-gray-400">
              View, update and manage your current job postings.
            </p>
          </div>

          <Table>
            <Table.ScrollContainer>
              <Table.Content aria-label="Example table">
                <Table.Header>
                  <Table.Column isRowHeader className={"text-center"}>
                    Job Title
                  </Table.Column>

                  <Table.Column className={"text-center"}>
                    Type/Category
                  </Table.Column>

                  <Table.Column className={"text-center"}>
                    Location
                  </Table.Column>

                  <Table.Column className={"text-center"}>Status</Table.Column>

                  <Table.Column className={"text-center"}>Actions</Table.Column>
                </Table.Header>

                <Table.Body>
                  {jobs.map((job) => (
                    <Table.Row key={job?._id}>
                      <Table.Cell className={"text-center"}>
                        {job?.jobTitle}
                      </Table.Cell>

                      <Table.Cell className={"flex flex-col gap-1 text-center"}>
                        <span>{job?.jobType}</span>
                        <span className="text-sm text-gray-400">
                          {job?.jobCategory}
                        </span>
                      </Table.Cell>

                      <Table.Cell className={"text-center"}>
                        {job?.location}
                      </Table.Cell>

                      <Table.Cell className={""}>
                        <span
                          className={
                            "py-1 px-3 bg-green-400/10 text-green-400 rounded-full block max-w-fit mx-auto"
                          }
                        >
                          {job?.status}
                        </span>
                      </Table.Cell>

                      <Table.Cell>
                        <div className="flex gap-6 justify-center items-center">
                          <Button className={"px-0 h-auto bg-transparent"}>
                            <Eye className="w-5 h-5" />
                          </Button>

                          <Button className={"px-0 h-auto bg-transparent"}>
                            <PencilLine className="w-5 h-5" />
                          </Button>

                          <Button
                            className={
                              "px-0 h-auto bg-transparent text-red-500"
                            }
                          >
                            <Trash2 className="w-5 h-5" />
                          </Button>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
            <Table.Footer>{/* Optional footer content */}</Table.Footer>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default RecruiterJobsPage;
