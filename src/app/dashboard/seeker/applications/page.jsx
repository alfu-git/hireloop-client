import { getApplicationsByApplicantId } from "@/lib/api/data";
import { getUserSession } from "@/lib/session";
import { timeAgo } from "@/lib/timeFormat";
import { Button, Table } from "@heroui/react";
import React from "react";

const ApplicationsPage = async () => {
  const userSession = await getUserSession();
  const user = userSession?.user;

  const userApplications = await getApplicationsByApplicantId(user?.id);
  console.log(userApplications);
  return (
    <section className="my-20 text-white">
      <div className="max-w-7xl mx-auto px-5">
        <div>
          {/* title */}
          <div>
            <h2 className="mb-2 text-[#E5E2E3] text-2xl font-medium">
              My Applications
            </h2>
            <p className="opacity-60 text-sm font-medium">
              Track your job applications and interview progress in real-time.
            </p>
          </div>

          {/* table */}
          <Table>
            <Table.ScrollContainer>
              <Table.Content aria-label="Example table">
                <Table.Header>
                  <Table.Column isRowHeader className={"text-center"}>
                    Job Title
                  </Table.Column>

                  <Table.Column className={"text-center"}>Company</Table.Column>
                  <Table.Column className={"text-center"}>Applied</Table.Column>
                  <Table.Column className={"text-center"}>Status</Table.Column>
                  <Table.Column className={"text-center"}>Action</Table.Column>
                </Table.Header>

                <Table.Body>
                  {userApplications.map((application) => (
                    <Table.Row key={application?._id}>
                      <Table.Cell className={"text-center"}>
                        {application?.jobTitle}
                      </Table.Cell>

                      <Table.Cell className={" text-center"}>
                        {application?.companyName}
                      </Table.Cell>

                      <Table.Cell className={"text-center"}>
                        {timeAgo(application?.createdAt)}
                      </Table.Cell>

                      <Table.Cell className={""}>
                        <span
                          className={
                            "py-1 px-3 bg-green-400/10 text-green-400 rounded-full block max-w-fit mx-auto"
                          }
                        >
                          {application?.status}
                        </span>
                      </Table.Cell>

                      <Table.Cell>
                        <div className="flex justify-center items-center">
                          <Button className={"px-0 h-auto bg-transparent"}>
                            Details
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

export default ApplicationsPage;
