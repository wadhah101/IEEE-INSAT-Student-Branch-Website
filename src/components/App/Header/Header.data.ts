interface NavLinkData {
  name: string;
  to: string;
}

export interface HeaderLinkData {
  link: NavLinkData;
  comparator?: (current: string) => boolean;
}

const HeaderLinkFactory = (
  name: string,
  to?: string,
  comparator?: (current: string) => boolean,
): HeaderLinkData => ({
  link: {
    to: to ?? `/${name}`,
    name,
  },
  comparator,
});

export const navLinks: HeaderLinkData[] = [
  HeaderLinkFactory(`home`, `/`),
  HeaderLinkFactory(`blog`),
  HeaderLinkFactory(`contact`),
  HeaderLinkFactory(`about`),
  HeaderLinkFactory(`activities`),
  HeaderLinkFactory(`awards`),
];
