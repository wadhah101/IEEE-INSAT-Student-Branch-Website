import { CreatePage } from './common.generator'

export const generateBlogs = (createPage: CreatePage) => (
    acts: GatsbyTypes.ContentfulActivityConnection
): void => {
    acts.edges
        .map((e) => e.node)
        .forEach((e) =>
            createPage({
                path: `/activities/details/${e.slug}`,
                component: '',
                context: {
                    slug: e.slug
                }
            })
        )
}
