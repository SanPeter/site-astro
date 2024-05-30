export interface IArticlePage {
    data: {
        ArticlePage: {
            __typename: string;
            items: IArticlePageItem[];
        }
    }

};

export interface IArticlePageItem {
    _metadata: {
        displayName: string;
        routeSegment: string;
    }
    Title: string;
    PublishDate: date;
    Featured: boolean;
    Description: string;
    OGImage: {
        base: string;
        default: string;
        hierarchical: string;
    }
    ArticleBody: {
        html: string;
    }
};