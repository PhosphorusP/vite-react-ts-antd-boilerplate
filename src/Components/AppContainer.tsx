import { theme } from "antd";
import { ReactNode } from "react";

export const AppContainer = ({ children }: { children?: ReactNode }) => {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100dvw",
        height: "100dvh",
        boxSizing: "border-box",
        padding: `${token.paddingContentVertical}px ${token.paddingContentHorizontal}px`,
        display: "flex",
        flexFlow: "column nowrap",
        overflowY: "scroll",
        backgroundColor: token.colorBgLayout,
      }}
      children={children}
    />
  );
};
