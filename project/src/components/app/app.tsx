import Main from '../main/main';
import { MainProps } from '../../types/types';

function App({ title, genre, year, movieCount }: MainProps): JSX.Element {
  return (
    <Main year={year} genre={genre} movieCount={movieCount} title={title}/>
  );
}

export default App;
