declare module "base.json" {  
        interface DataBaseOptions {};

        class DataBase {
            file: string;
            options?: DataBaseOptions
    
            public constructor(file: string, options?: DataBaseOptions);
    
            public add(key: string, value: number): void;
            public remove(key: string, value: number): void;
            public divide(key: string, value: number): void;
            public multiply(key: string, value: number): void;
            public modulus(key: string, value: number): void;
            public set(key: string, value: any): void;
            public get(key: string): any;
            public push(key: string, ...values: any): void;
            public has(key: string): boolean;
            public delete(...keys?: string): void;
            private form(method: string, key: string, value?: any): void;
            private save(): void;
        }
};