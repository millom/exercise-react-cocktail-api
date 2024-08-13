import {
  Children,
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { ICocktail, ICocktailContext } from "../interfaces";

interface ICocktailProviderProps {
  children: ReactNode;
}

// export const CocktailContext = createContext<ICotailContext | undefined>(undefined);
export const CocktailContext = createContext<ICocktailContext>(
  {} as ICocktailContext
);

export function CocktailProvider({
  children,
}: ICocktailProviderProps): ReactElement {
  const name = "Mikael";
  const [cocktail, setCocktail] = useState<ICocktail>();

  // useEffect(() => {
  //   console.log("Provider:", cocktail);
  //   setCocktail(cocktail);
  // }, [cocktail]);

  const updateCocktail: (c: ICocktail) => void = (c: ICocktail) => {
    setCocktail(c);
  };

  const values: ICocktailContext = {
    name,
    cocktail,
    updateCocktail,
  };

  return (
    <CocktailContext.Provider value={values}>
      {children}
    </CocktailContext.Provider>
  );
}
