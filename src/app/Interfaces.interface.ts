export interface ClosingStatement {
    date: string;
    closing_time: string;
    day_total: number;
    invoice_quantity: number;
    average_invoice: number;
    invoices: InvoiceEntry[];
    banks: BankEntry[]
    methods: PaymentMethodEntry[];
    products: MiniProductEntry[];
}

export interface InvoiceEntry {
    date: string;
    invoice_id: number;
    pid_prefix: string;
    pid: string;
    name: string;
    surname: string;
    total: number;
    void: boolean;
}

export interface BankEntry {
    bank: string;
    total: number;
}

export interface PaymentMethodEntry {
    method: string;
    total: number;
}

export interface MiniProductEntry {
    name: string;
    sold: number;
    total: number;
}
