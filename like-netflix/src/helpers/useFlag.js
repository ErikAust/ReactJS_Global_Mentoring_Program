import { useState } from "react";

export const useFlag = () => {
  const [visible, setVisible] = useState(false);
  const open = () => setVisible(true);
  const close = () => setVisible(false);

  return [visible, open, close];
};
