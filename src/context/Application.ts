import { createContext, ReactNode } from "react";

const ApplicationContext = createContext({
    modal: null,
    setModal: (modal: ReactNode) => {},
    closeModal: () => {},
});

export default ApplicationContext;
