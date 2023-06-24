interface ServerMessage {
    tokensUsed: number;
    text: string;
    createdAt: admin.firestore.Timestamp;
    user: {
        _id: string;
        name: string;
        avatar: string;
    }
}
interface UserMessage {
    text: string;
    createdAt: admin.firestore.Timestamp;
    user: {
        _id: string;
        name: string;
        avatar: string;
    }
}
interface Price {
    id: string;
    active: boolean;
    billing_scheme: string;
    created: number;
    currency: string;
    custom_unit_amount: any;
    livemode: boolean;
    lookup_key: string | any;
    metadata: any;
    nickname: any;
    object: string;
    product: string;
    recurring: {
        aggregate_usage: any;
        interval: string;
        interval_count: number;
        trial_period_days?: any;
        usage_type: string;
    }
    tax_behavior: string;
    tiers_mode: any;
    transform_quantity?: string | any;
    type: string;
    unit_amount: number;
    unit_amount_decimal: string | number;
}
interface PricingCardProps {
    price: Price
}