export default class {
    public greet(): Promise<String> {
        return new Promise<String>(resolve => {
            resolve("Hello world");
        });
    }
};