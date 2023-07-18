import { App as AntdApp, ConfigProvider, theme } from "antd";
import { useMediaQuery } from "react-responsive";
import { App } from "./App";

export const AppWrapper = () => {
  const isDarkMode = useMediaQuery({ query: "(prefers-color-scheme: dark)" });
  return (
    <ConfigProvider
      theme={{
        algorithm: [isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm],
      }}
    >
      <AntdApp style={{ colorScheme: isDarkMode ? "dark" : "light" }}>
        <App />
      </AntdApp>
    </ConfigProvider>
  );
};
