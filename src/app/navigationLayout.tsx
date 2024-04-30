import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import { ReactNode } from "react";

export default function NavigationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <NavHeader />
      <div>{children}</div>
    </>
  );
}
