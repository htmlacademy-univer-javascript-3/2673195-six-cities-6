import {Main} from './Main/Main.tsx';

type AppProps = {
  cityCardsAmount: number;
}

export function App({ cityCardsAmount } : AppProps) {
  return <Main cityCardsAmount={cityCardsAmount}/>;
}
