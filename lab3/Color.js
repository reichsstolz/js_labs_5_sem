class Color
{
    static White = new Color(255, 255, 255, 255);
    static Blue = new Color(2, 50, 150, 180);
    constructor(r, g, b, a=255)
    {
        this.red = r;
        this.green = g;
        this.blue = b;
        this.alpha = a;
    }
}
