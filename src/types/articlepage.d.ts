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
    }
    Title: string;
    PublishDate: string;
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