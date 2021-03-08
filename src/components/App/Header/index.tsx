import * as React from 'react';
import StatelessHeader from './StatelessHeader';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IAppHeaderProps {}

const AppHeader: React.FunctionComponent<IAppHeaderProps> = () => (
  <StatelessHeader isFixed isTranspartent />
);

export default AppHeader;
