interface NavLinkData {
  name: string;
  to: string;
}

export interface HeaderLinkData {
  link: NavLinkData;
  isFixed?: boolean;
  comparator?: (current: string) => boolean;
}

const HeaderLinkFactory = (
  name: string,
  to?: string,
  isFixed?: boolean,
  comparator?: (current: string) => boolean,
): HeaderLinkData => ({
  link: {
    to: to ?? `/${name}`,
    name,
  },
  isFixed,
  comparator,
});

export const navLinks: HeaderLinkData[] = [
  HeaderLinkFactory(`home`, `/`, true),
  HeaderLinkFactory(`blog`, undefined, true),
  HeaderLinkFactory(`contact`, undefined, true),
  HeaderLinkFactory(`about`, undefined, true),
  HeaderLinkFactory(`activities`, undefined, true),
  HeaderLinkFactory(`awards`, undefined, true),
];
