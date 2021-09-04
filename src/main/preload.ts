import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("counter", {
  fetchCount: (amount = 1): number => {
    return new Promise<{ data: number }>((resolve) =>
      setTimeout(() => resolve({ data: amount }), 500)
    );
  },
});
