'use client'

import { Button, Table } from "@heroui/react";
import { BriefcaseBusiness, User } from "lucide-react";
import React from 'react';

const AdminUsersTable = ({ users }) => {
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Example table">
          <Table.Header>
            <Table.Column isRowHeader className={"text-center"}>
              User Name
            </Table.Column>

            <Table.Column className={"text-center"}>
              Email Address
            </Table.Column>
            <Table.Column className={"text-center"}>
              Role
            </Table.Column>
            <Table.Column className={"text-center"}>
              Join Date
            </Table.Column>
            <Table.Column className={"text-center"}>Status</Table.Column>
            <Table.Column className={"text-center"}>Actions</Table.Column>
          </Table.Header>

          <Table.Body>
            {users.map((user) => (
              <Table.Row key={user?.id}>
                <Table.Cell className={"text-center"}>
                  {user?.name}
                </Table.Cell>

                <Table.Cell className={" text-center"}>
                  {user?.email}
                </Table.Cell>

                <Table.Cell>
                  <span className={`
                    max-w-fit max-h-fit mx-auto my-auto py-1 px-3 flex gap-1 items-center rounded-full text-xs 
                    ${user?.role === "seeker" ? "bg-[#353436]" : user?.role === "recruiter" ? "bg-white text-black" : "bg-purple-500/10 text-white"}
                    `}>
                    {user?.role === "seeker" ? <User className="w-4 h-4" /> : user?.role === "recruiter" ? <BriefcaseBusiness className="w-4 h-4" /> : ""}

                    {user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}
                  </span>
                </Table.Cell>

                <Table.Cell className={"text-center"}>
                  {new Date(user?.createdAt).toLocaleDateString(
                    "en-US",
                    {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    },
                  )}
                </Table.Cell>


                <Table.Cell className={"text-center"}>
                  {user?.status}
                </Table.Cell>

                <Table.Cell>
                  <div className={"flex gap-2 max-h-fit my-auto"}>
                    {user?.role === "recruiter" && <Button className={'px-0 h-auto bg-transparent text-gray-300'}>
                      Make Seeker
                    </Button>}

                    {user?.role === "seeker" && <Button className={'px-0 h-auto bg-transparent text-gray-300'}>
                      Make Recruiter
                    </Button>}

                    {user?.role !== "admin" && <Button className={'px-0 h-auto bg-transparent text-gray-300'}>
                      Make Admin
                    </Button>}
                  </div>


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

export default AdminUsersTable;