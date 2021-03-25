import * as React from 'react'
import { useLocation } from '@reach/router'
import StatelessHeader from './StatelessHeader'
import { navLinks } from './Header.data'

interface IAppHeaderProps {}

const AppHeader: React.FunctionComponent<IAppHeaderProps> = () => {
    const location = useLocation()

    // TODO logic
    const { isFixed } = navLinks.find(
        (e) => e.link.to === location.pathname
    ) ?? {
        isFixed: false
    }
    //  Header state
    const [isTransparent, setIsTransparent] = React.useState(isFixed)
    const [isBig, setIsBig] = React.useState(isFixed)

    // scroll state
    React.useEffect(() => {
        if (!isFixed) {
            setIsTransparent(false)
            setIsBig(false)
            return () => null
        }

        const threshold = 100
        const initState = threshold > window.scrollY
        let lastKnownScrollPosition = 0
        let ticking = false

        setIsTransparent(initState)
        setIsBig(initState)

        function doSomething(scrollPos: number) {
            setIsTransparent(scrollPos < threshold)
            setIsBig(scrollPos < threshold)
        }

        const eventHandler = () => {
            lastKnownScrollPosition = window.scrollY

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    doSomething(lastKnownScrollPosition)
                    ticking = false
                })

                ticking = true
            }
        }

        document.addEventListener('scroll', eventHandler)
        return () => document.removeEventListener('scroll', eventHandler)
    }, [location])
    return (
        <StatelessHeader
            isBig={isBig}
            isTransparent={isTransparent}
            isFixed={isFixed}
            navLinks={navLinks}
        />
    )
}

export default AppHeader
