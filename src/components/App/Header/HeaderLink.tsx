import clsx from 'clsx'
import { Link } from 'gatsby'
import React from 'react'
import { HeaderLinkData } from './Header.data'
import { IStatelessHeaderProps } from './StatelessHeader'

interface IHeaderLinkProps {
    data: HeaderLinkData
}

const HeaderLink: React.FC<IStatelessHeaderProps & IHeaderLinkProps> = ({
    isTransparent,
    data: {
        link: { name, to }
    }
}) => {
    return (
        <Link
            title={`${name} Page`}
            activeClassName={
                isTransparent ? 'text-opacity-75' : 'text-sb-blue-main-500'
            }
            className={clsx(
                isTransparent
                    ? 'text-white hover:text-opacity-75'
                    : 'text-black text-opacity-75 hover:text-sb-blue-main-500 hover:text-opacity-100',
                'px-3 py-2 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 rounded  '
            )}
            to={to}
        >
            {name}
        </Link>
    )
}

export default HeaderLink
