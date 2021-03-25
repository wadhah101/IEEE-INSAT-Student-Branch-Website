import { IconType } from 'react-icons'

export interface SocialMediaLink {
    title: string
    href: string
    Icon: IconType
}

export const SocialMediaLinkFactory = (
    title: string,
    href: string,
    Icon: IconType
): SocialMediaLink => ({ title, href, Icon })
