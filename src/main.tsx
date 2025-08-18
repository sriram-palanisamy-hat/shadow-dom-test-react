import * as ReactDOM from "react-dom/client";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import TransferList from "./TransfarebleList";
import { SelectTest } from "./SelectTest";
import { GridExample } from "./AgGridTest";
const container = document.getElementsByTagName("interal-app")[0];
const shadowContainer = container?.attachShadow({ mode: "open" });
const shadowRootElement = document.createElement("div");
shadowContainer.appendChild(shadowRootElement);

const cache = createCache({
  key: "css",
  prepend: true,
  container: shadowContainer,
});

const shadowTheme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: shadowRootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: shadowRootElement,
      },
    },
    MuiModal: {
      defaultProps: {
        container: shadowRootElement,
      },
    },
  },
});

ReactDOM.createRoot(shadowRootElement).render(
  <React.StrictMode>
    <CacheProvider value={cache}>
      <ThemeProvider theme={shadowTheme}>
        <TransferList />
        <GridExample />
        <SelectTest />
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>
);
