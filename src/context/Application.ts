import { createContext, ReactNode } from "react";

const ApplicationContext = createContext({
    modal: null,
    setModalState: (state: { content?: ReactNode, show: boolean }) => { },
    closeModal: () => {},
});

export default ApplicationContext;
