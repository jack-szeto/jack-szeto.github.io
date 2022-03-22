class Rand2 {
    public min: number;
    public max: number;

    private cache?: number;

    constructor(min: number, max: number) {
        this.min = min;
        this.max = max;
    }
    public get value() {
        return this.cache ?? (this.cache = Math.random() * (this.max - this.min) + this.min);
    }
    public clear = () => this.cache = undefined;
}
export default Rand2;
