import { Dispatch, useContext } from "react";
import AppContext from "../../context/AppContext";
import { Action, GlobalStateProvider } from "../../types/AppContext";

const useDispatch = (): { dispatch: Dispatch<Action> } => {
    const { dispatch } = useContext<GlobalStateProvider>(AppContext);
    return { dispatch };
}

export default useDispatch;