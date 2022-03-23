class Vector2 {
    public x: number;
    public y: number;

    constructor(x?: number, y?: number) {
        this.x = x ?? 0;
        this.y = y ?? 0;
    }

    public get normalized(): Vector2 {
        var x = this.x;
        var y = this.y;
        var len = x * x + y * y;

        if (len > 0)
        {
            len = 1 / Math.sqrt(len);

            return new Vector2(
                x * len,
                y * len
            );
        }
        return Vector2.zero;
    }

    public normalize(): Vector2 {
        const normalized = this.normalized;
        this.x = normalized.x;
        this.y = normalized.y;
        return this;
    }

    public add(value: Vector2): Vector2 {
        this.x += value.x;
        this.y += value.y;
        return this;
    }

    public subtract(value: Vector2): Vector2 {
        this.x -= value.x;
        this.y -= value.y;
        return this;
    }

    public multiply(value: number): Vector2 {
        this.x *= value;
        this.y *= value;
        return this;
    }

    public divide(value: number): Vector2 {
        this.x /= value;
        this.y /= value;
        return this;
    }

    public static get zero() {
        return new Vector2();
    }
    public static get up() {
        return new Vector2(0, -1);
    }
    public static get right() {
        return new Vector2(1, 0);
    }
    public static get down() {
        return new Vector2(0, 1);
    }
    public static get left() {
        return new Vector2(-1, 0);
    }
}
export default Vector2;
