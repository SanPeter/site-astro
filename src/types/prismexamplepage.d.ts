export interface IPrismExamplePage {
    data: {
        PrismExamplePage: {
            items: IPrismExamplePageItem[];
        }
    }
};

export interface IPrismExamplePageItem {
    _metadata: {
        displayName: string;
        routeSegment: string;
    }   
    Title: string;
    Body: {
        html: string;
    }
};