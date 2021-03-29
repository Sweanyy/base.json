declare module "base.json" {
    class DataBase {
        file: string;
        options?: object

        public constructor(file: string, options?: object);

        public add(name: string, data: string, value: number): void;
        public remove(name: string, data: string, value: number): void;
        public divide(name: string, data: string, value: number): void;
        public multiply(name: string, data: string, value: number): void;
        public set(name: string, data: string, value: any): void;
        public get(name: string, data?: string): any;
        public push(name: string, data: string, value: any): void;
        public delete(name?: string, data?: string): void;
        public save(): void;
    }
}