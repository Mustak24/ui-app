import { createContext, useContext, useState } from "react";

const PopoverContext = createContext();

export default function ({className="", children }) {
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const states = { isPopoverOpen, setPopoverOpen };

  return (<div className={className} style={{position: 'relative'}}>
    <PopoverContext.Provider value={states}>{children}</PopoverContext.Provider>
  </div>);
}

export function TargetBtnOnFocus({ children }) {
  const { setPopoverOpen } = useContext(PopoverContext);
  return (
    <button
      onFocus={() => setPopoverOpen(true)}
      onBlur={() => setPopoverOpen(false)}
    >
      {children}
    </button>
  );
}

export function TargetBtnOnHover({ children }) {
  const { setPopoverOpen } = useContext(PopoverContext);
  return (
    <div
      onMouseEnter={() => setPopoverOpen(true)}
      onMouseLeave={() => setPopoverOpen(false)}
    >
      {children}
    </div>
  );
}

export function TargetBox({ children, className, position='absolute' }) {
  const { isPopoverOpen } = useContext(PopoverContext);
  return (
    <div
      className={className}
      style={{
        scale: isPopoverOpen ? "1" : ".8",
        opacity: isPopoverOpen ? "1" : "0",
        visibility: isPopoverOpen ? "visible" : "hidden",
        position: position,
      }}
    >
      {children}
    </div>
  );
}
