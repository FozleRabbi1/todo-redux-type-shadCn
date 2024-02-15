import { ReactNode } from "react";
interface TContainerProps {
  children: ReactNode;
}

const Container = ({ children }: TContainerProps) => (
  <div className="max-w-[1220px] mx-auto px-5 md:px-10">{children}</div>
);
export default Container;
