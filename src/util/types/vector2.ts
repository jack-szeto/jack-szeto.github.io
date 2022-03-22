class Vector2 {
    public x: number;
    public y: number;

    constructor(x?: number, y?: number) {
        this.x = x ?? 0;
        this.y = y ?? 0;
    }

    public static get zero() {return new Vector2()}
    public static get up() {return new Vector2(0, -1)}
    public static get right() {return new Vector2(1, 0)}
    public static get down() {return new Vector2(0, 1)}
    public static get left() {return new Vector2(-1, 0)}
}
export default Vector2;
