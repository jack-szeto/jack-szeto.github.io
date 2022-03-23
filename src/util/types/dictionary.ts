type Key = number|string;
type KeyValuePair<TValue> = {
    [key: Key]: TValue
}
class Dictionary<TValue> {
    private keyvalues: KeyValuePair<TValue>
    constructor() {
        this.keyvalues = {};
    }

    public get Count(): number {
        return Object.keys(this.keyvalues).length;
    }

    public Add(key: Key, value: TValue) {
        this.keyvalues[key] = value;
    }

    public Get(key: Key): TValue {
        return this.keyvalues[key];
    }

    public Remove(key: Key): void {
        delete this.keyvalues[key];
    }

    public ContainKey(key: Key): boolean {
        return Object.keys(this.keyvalues).includes(`${key}`);
    }

    public toArray(): TValue[] {
        return Object.values(this.keyvalues);
    }

    public ContainValue(value: TValue): boolean {
        return Object.values(this.keyvalues).includes(value);
    }
}

export default Dictionary;