'use client'

import { companyStatusUpdateAction } from "@/lib/actions/actions";
import { Button, Table } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from 'react';
import toast from "react-hot-toast";

const AdminCompaniesTable = ({ companies }) => {
  const router = useRouter();

  const handleStatusUpdate = async (companyId, companyName, statusValue) => {
    try {
      const res = await companyStatusUpdateAction(companyId, {
        status: statusValue,
      });

      if (res?.modifiedCount > 0) {
        toast.success(
          `${companyName} ${statusValue === "Approved" ? "Approved" : "Rejected"}`,
        );
        router.refresh();
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error("Something went wrong");
    }
  };


  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Example table">
          <Table.Header>
            <Table.Column isRowHeader className={"text-center"}>
              Company Name
            </Table.Column>

            <Table.Column className={"text-center"}>
              Recruiter Email
            </Table.Column>
            <Table.Column className={"text-center"}>
              Industry
            </Table.Column>
            <Table.Column className={"text-center"}>Status</Table.Column>
            <Table.Column className={"text-center"}>
              Date Submitted
            </Table.Column>
            <Table.Column className={"text-center"}>Actions</Table.Column>
          </Table.Header>

          <Table.Body>
            {companies.map((company) => (
              <Table.Row key={company?._id}>
                <Table.Cell className={"text-center"}>
                  {company?.companyName}
                </Table.Cell>

                <Table.Cell className={" text-center"}>
                  {company?.recruiterEmail}
                </Table.Cell>

                <Table.Cell className={"text-center"}>
                  {company?.category}
                </Table.Cell>

                <Table.Cell>
                  <span
                    className={`
                              block py-0.5 px-2 border text-xs font-medium rounded-md max-w-fit max-h-fit mx-auto my-auto
                              ${company?.status === "Pending"
                        ? "bg-yellow-500/10 border-yellow-400/40 text-yellow-500"
                        : company?.status === "Approved"
                          ? "bg-green-500/10 border-green-400/40 text-green-500"
                          : "bg-red-500/10 border-red-400/40 text-red-500"
                      }
                            `}
                  >
                    {company?.status}
                  </span>
                </Table.Cell>

                <Table.Cell className={"text-center"}>
                  {new Date(company?.createdAt).toLocaleDateString(
                    "en-US",
                    {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    },
                  )}
                </Table.Cell>

                <Table.Cell className={"flex justify-center items-center"}>
                  {company?.status === "Approved" ? (
                    <Button
                      onClick={() =>
                        handleStatusUpdate(
                          company?._id,
                          company?.companyName,
                          "Rejected",
                        )
                      }
                      className={
                        "h-8 px-3 bg-red-500/10 border border-red-500/30 rounded text-red-500"
                      }
                    >
                      Reject
                    </Button>
                  ) : company?.status === "Rejected" ? (
                    <Button
                      onClick={() =>
                        handleStatusUpdate(
                          company?._id,
                          company?.companyName,
                          "Approved",
                        )
                      }
                      className={
                        "h-8 px-3 bg-green-500/10 border border-green-500/30 rounded text-green-500"
                      }
                    >
                      Approve
                    </Button>
                  ) : (
                    <div className="flex gap-3 items-center">
                      <Button
                        onClick={() =>
                          handleStatusUpdate(
                            company?._id,
                            company?.companyName,
                            "Approved",
                          )
                        }
                        className={
                          "h-8 px-3 bg-green-500/10 border border-green-500/30 rounded text-green-500"
                        }
                      >
                        Approve
                      </Button>

                      <Button
                        onClick={() =>
                          handleStatusUpdate(
                            company?._id,
                            company?.companyName,
                            "Rejected",
                          )
                        }
                        className={
                          "h-8 px-3 bg-red-500/10 border border-red-500/30 rounded text-red-500"
                        }
                      >
                        Reject
                      </Button>
                    </div>
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
      <Table.Footer>{/* Optional footer content */}</Table.Footer>
    </Table>
  );
};

export default AdminCompaniesTable;