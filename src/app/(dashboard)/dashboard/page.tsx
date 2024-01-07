import React from "react";
import { auth } from "@/lib/auth";

const DashboardPage = async () => {
  const session = await auth();

  return <pre>{session ? JSON.stringify(session?.user, null, 4) : "Not logged in"}</pre>;
};

export default DashboardPage;
