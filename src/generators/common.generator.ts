export interface CreatePageProps {
    path: string
    component: string
    context: {
        slug: string
    }
}

export interface CreatePage {
    (props: CreatePageProps): void
}
